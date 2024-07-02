const { DataTypes , Model} = require('sequelize');
const sequelize = require('../database');
const Room = require('./rooms');

const Guest = sequelize.define('Guest', {
    guest_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: true
      // Add more validations as necessary
    },
    nationality: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Room, 
        key: 'room_id'
      }
    }
  }, {
    tableName: 'guests',
    timestamps: false 
  });
  Guest.sync({ force: true }).then(() => {
    console.log('Guests table created in database');
  }).catch(err => {
    console.error('Error while creating', err);
  });
  module.exports = Guest;