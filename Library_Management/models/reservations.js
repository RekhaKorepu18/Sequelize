const sequelize = require('../database');
const {DataTypes} = require('sequelize');
const Book = require('./books');
const Member = require('./members');


const Reservation = sequelize.define('Reservation',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    book_id : {
         type : DataTypes.INTEGER,
         references : {
            Model : Book,
            key : 'id'
        }
    },
    member_id : {
        type : DataTypes.INTEGER,
        references : {
            Model : Member,
            key : 'id'
        }
    },
    reservation_date : {
        type : DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName : 'reservations',
    timestamps: false
});

Member.hasMany(Reservation);
Reservation.belongsTo(Member);

Reservation.hasOne(Book);
Book.hasMany(Reservation);

Reservation.sync({force: true}). then(() => {
    console.log('reservations table created');
 }).catch((err) => { 
      console.error('Error while creating reservations table', err);
 });
 module.exports = Reservation;