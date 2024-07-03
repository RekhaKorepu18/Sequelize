const sequelize = require('./database');
const {books, authors, members, loans, reservations} = require('./models/insertionData');
const Book = require('./models/books');
const Author = require('./models/authors');
const Loan = require('./models/loans');
const Reservation = require('./models/reservations');
const Member = require('./models/members');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection  established');

        await sequelize.sync({force: true});
        console.log("All models synchronized");
        await Book.sync({force: true});
        await Author.sync({force: true});
       
        // Author
        await Author.bulkCreate(authors);
        console.log(await Author.findAll());
        // BOOKS 
        await Book.bulkCreate(books);
        console.log(await Book.findAll());
         
        //Member
       await Member.sync({force: true});
        await Member.bulkCreate(members);
        console.log(await Member.findAll());
        
        //Loans
        await Loan.sync({force: true});
        console.log('loans table created');
        await Loan.bulkCreate(loans);
        console.log(await Loan.findAll());
    

        // Reservations
        await Reservation.sync({force:true});
        console.log('reservations table created');
        await Reservation.bulkCreate(reservations);
        console.log(await Reservation.findAll());
      
    }
    catch(error){
        console.log('Unable to connect to database:', error);
    }
    finally {
       
    }
})();