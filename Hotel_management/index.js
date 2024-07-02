const sequelize = require('./database');
const Hotel = require('./models/hotels');
const Room = require('./models/rooms');
const Guest = require('./models/guests');
const Booking = require('./models/bookings');
const {hotels, rooms, guests, bookings} = require('./models/insertionData');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Sync all models
        await sequelize.sync({ force: true }); 
        console.log('All models were synchronized successfully.');
      
        
       for(let i=0;i<hotels.length;i++){
            await Hotel.create(hotels[i]);
        }
         console.log(await Hotel.findAll());
       

        for(let i=0;i<rooms.length;i++){
            await Room.create(rooms[i]);
        }
        console.log(await Room.findAll());
           
        
        for(let i=0;i<guests.length;i++){
          await Guest.create(guests[i]);
        }
        console.log(await Guest.findAll());
      
        for(let i=0;i<bookings.length;i++){
          await Booking.create(bookings[i]);
        }
        console.log(await Booking.findAll());
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
})();
