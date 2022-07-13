import Bookings from "../models/booking"

class BookingService{
    //Booking Tour
        static async BookingTour(req){
    const BookingB= await Bookings.create(req.body);
    return BookingB;
        };
        //get all
    // static async getAllBooking(){
    //     const BookingB= await Bookings.find();
    //     return BookingB;
    //         }
    };
    export default BookingService;