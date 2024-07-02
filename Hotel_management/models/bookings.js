const { DataTypes , Model} = require('sequelize');
const sequelize = require('../database');
const Room = require('./rooms');
const Booking = sequelize.define('Booking', {
    booking_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Room, 
        key: 'room_id'
      }
    },
    guest_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      
    }
  }, {
    tableName: 'bookings',
    timestamps: false 
  });
  
  module.exports = Booking;