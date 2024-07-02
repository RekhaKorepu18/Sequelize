const hotels = [ {
    hotel_name: 'Taj Mahal Palace',
    address: 'Apollo Bunder, Mumbai, India',
    contact_number: '+912266655443',
    email: 'info@tajhotels.com',
    rating: 5.0
  },
  {
    hotel_name: 'Hilton',
    address: '1234 Hilton Street, New York, USA',
    contact_number: '+11234567890',
    email: 'reservations@hilton.com',
    rating: 4.5
  },
  {
    hotel_name: 'Four Seasons',
    address: '789 Four Seasons Blvd, Toronto, Canada',
    contact_number: '+14161234567',
    email: 'inquiries@fourseasons.com',
    rating: 4.8
  }
];
const rooms = [
    {
      hotel_id: 1,
      room_number: '101',
      type: 'Standard',
      price: 150.00,
      capacity: 2,
      available: true
    },
    {
      hotel_id: 1,
      room_number: '102',
      type: 'Deluxe',
      price: 250.00,
      capacity: 4,
      available: true
    },
    {
      hotel_id: 2,
      room_number: '201',
      type: 'Suite',
      price: 400.00,
      capacity: 3,
      available: true
    }
  ];
  const guests = [{
    first_name: 'Anush',
        last_name: 'Korepu',
        email: 'anush@example.com',
        phone_number: '1234567890',
        nationality: 'Indian',
        check_in: new Date('2024-07-02'),
        check_out: new Date('2024-07-10'),
        room_id: 1 
      },
      {
        first_name: 'Rekha',
        last_name: 'Korepu',
        email: 'rekha@example.com',
        phone_number: '9876543210',
        nationality: 'Indian',
        check_in: new Date('2024-07-03'),
        check_out: new Date('2024-07-12'),
        room_id: 2 
      },
      {
        first_name: 'Aarka',
        last_name: 'kamela',
        email: 'aarka@example.com',
        phone_number: '5556667777',
        nationality: 'Indian',
        check_in: new Date('2024-07-05'),
        check_out: new Date('2024-07-15'),
        room_id: 3 
      }
  ];

  const bookings = [
    {
      room_id: 1,
      guest_name: 'Anush Korepu',
      check_in: new Date('2024-07-02'),
      check_out: new Date('2024-07-10'),
      total_price: 5000, 
      status: 'Confirmed'
    },
    {
      room_id: 2,
      guest_name: 'Rekha Korepu',
      check_in: new Date('2024-07-03'),
      check_out: new Date('2024-07-12'),
      total_price: 1000, 
      status: 'Confirmed'
    },
    {
      room_id: 3,
      guest_name: 'Aarka Kamela',
      check_in: new Date('2024-07-05'),
      check_out: new Date('2024-07-15'),
      total_price: 7500, 
      status: 'Confirmed'
    }
  ];
  
  module.exports = bookings;
  
  
  module.exports = {
    hotels,
    rooms,
    guests,
    bookings
  };