import  Bokkingservice from "../services/bookingService";
import Response from "../utils/response";

class BookingController {
    //Booking 
    static async BokingTour(req, res) {
      const BookingB = await Bokkingservice.BokingTour(req);
      if (!BookingB) {
        return Response.errorMessage(res, "Failed to Bookings", 400);
      }
      return Response.successMessage(
        res,
        "booking sucessfully registered",
        BookingB,
        200
      );
    };
    
   }
export default BookingController;