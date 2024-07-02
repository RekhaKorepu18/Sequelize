const { DataTypes , Model} = require('sequelize');
const sequelize = require('../database');

const Hotel = sequelize.define('Hotel', {
    hotel_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey: true
    },
    hotel_name : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    address : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    contact_number : {
        type : DataTypes.STRING(15),
        allowNull : true

    },
    email : {
        type : DataTypes.STRING(100),
        allowNull : true
    },
    rating: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: true,
        defaultValue: 0.0
    }
}, {
    tableName: 'hotels',
     timestamps: false
});

Hotel.sync({ force: true }).then(() => {
    console.log('Hotel table created in database');
  }).catch(err => {
    console.error('Error while creating', err);
  });
  
  module.exports = Hotel;




