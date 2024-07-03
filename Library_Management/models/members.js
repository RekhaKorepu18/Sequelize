const sequelize = require('../database');
const {DataTypes} = require('sequelize');
const Loan = require('./loans');

const Member = sequelize.define('Member', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    address : {
        type : DataTypes.STRING(255),
    },
    phone_number : {
        type : DataTypes.STRING(20)
    },
    email : {
        type: DataTypes.STRING(255),
        unique : true
    }
}, {
   tableName: 'members',
   timestamps: false
});
// Associations


Member.sync({force: true}). then(() => {
    console.log('members table created');
 }).catch((err) => { 
      console.error('Error while creating members table', err);
 });
 module.exports = Member;

