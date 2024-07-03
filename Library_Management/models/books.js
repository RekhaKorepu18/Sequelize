const sequelize = require('../database');
const {DataTypes} = require('sequelize');
const Author = require('./authors');
const Book = sequelize.define('Book', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    author_id : {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
              model : Author,
              key: 'id'
        }
    },
    genre : {
        type : DataTypes.STRING(100),
    },
    isbn : {
        type : DataTypes.STRING(13),
        unique: true
    },
    publication_year : {
        type : DataTypes.INTEGER
    }
}, {
    tableName : 'books',
    timestamps: false

});
//Associations.
Author.hasMany(Book);
Book.belongsTo(Author);

Book.sync({force: true}). then(() => {
   console.log('books table created');
}).catch((err) => { 
     console.error('Error while creating books table', err);
});
module.exports = Book;
