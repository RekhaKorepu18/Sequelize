const sequelize = require('../database');
const {DataTypes} = require('sequelize');
const Book = require('./books');
const Member = require('./members');

const Loan = sequelize.define('Loan',{
    id : {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey : true
    },
    book_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            Model : Book,
            key : 'id'
        }
    },
    member_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            Model : Member,
            key : 'id'
        }
    },
    loan_date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    due_date : {
        type : DataTypes.DATE,
        allowNull : false
    }
}, {
    tableName: 'loans',
    timestamps: false
}); 
// Associations.
Member.hasMany(Loan);
Loan.belongsTo(Member);

Loan.hasOne(Book);
Book.hasMany(Loan);

Loan.sync({force: true}). then(() => {
    console.log('loans table created');
 }).catch((err) => { 
      console.error('Error while creating loans table', err);
 });
 module.exports = Loan;
