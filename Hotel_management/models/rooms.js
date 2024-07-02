const { DataTypes , Model} = require('sequelize');
const sequelize = require('../database');
const Hotel = require('./hotels');

const Room = sequelize.define('Room', {
  room_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hotel_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Hotel, 
      key: 'hotel_id'
    }
  },
  room_number: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'rooms',
  timestamps: false 
});


Room.sync({ force: true }).then(() => {
  console.log('Room table created');
}).catch(err => {
  console.error('Error while creating:', err);
});
module.exports = Room;
