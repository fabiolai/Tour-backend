import tourServices from "../services/tourservice";
import Response from "../utils/response";


class tourController{
    // create tour

  static async registerTour(req, res) {
    const newTour = await tourServices.registerTour(req);
    if (!newTour) {
      //return Response.errorMessage(res,"failed to register tour", 400)
     return res.status(400).json({ message: "failed to register" });
    }
    //return Response.errorMessage(res,"failed to register tour", 400)
    return res.status(200).json({ message: "registered", data: newTour });
  }


  //updating tour

  static async updateTour(req, res) {
    console.log(req.params.names);
    const newTour = await tourServices.updateTour(req);
    if (!newTour) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(200).json({ message: "success", data: newTour });
  }
// get tour

static async getTour(req, res) {
  const newTour = await tourServices.getTour(req);
  if (!newTour) {
    return res.status(401).json({ message: "failed to register" });
  }
  return res.status(200).json({ message: "success", data: newTour });
}


}
export default tourController;