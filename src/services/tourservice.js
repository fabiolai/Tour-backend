import TourModel from "../models/tours";

class TourServices {
  //function that create tour
  static async registerTour(req){
    const tour = await TourModel.create(req.body)
    return tour;
  }


   // function that update tour
     
   static async updateTour(req){
    const tour = await TourModel.findByIdAndUpdate(req.params.id,req.body,{new:true});

     // const user =  UserModel.findOne({_id:req.params.id});

      return tour;

  }
  

  // Function that get all tour

  static async getTour(){
    const tour = await TourModel.find();
    // console.log(user)

     return tour;

 }

}
export default TourServices;
