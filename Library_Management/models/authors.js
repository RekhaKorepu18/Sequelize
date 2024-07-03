const sequelize = require('../database');
const { DataTypes }= require('sequelize');
const Book = require('./books');
const Author = sequelize.define('Author', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birth_year : {
        type : DataTypes.INTEGER,
    },
    nationality : {
        type : DataTypes.STRING(100)
    }
},
  { 
    tableName: 'authors',
    timestamps : false
});



Author.sync({force: true}).then(() => {
    console.log('authors table created');
}).catch((err) => {
    console.log('Error while creating authors table');
});
module.exports=Author;
