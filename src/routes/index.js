import { Router } from "express";
import UserController from "../controller/usercontroller";
// import app from "../server";
import tourController from "../controller/tourController";
import BookingController from "../controller/bookingcontroller";
import validator from "../middleware/validator";
import Datachecker from "../middleware/datachecker";
import verifytoken from "../middleware/verifytoken";
import verifyaccess from "../middleware/verifyaccess";


const route =Router();

route.post("/user/login", UserController.loginUserController);
route.post("/user/test", UserController.testController);
route.post("/user/create",validator.newAccountRules(),
validator.validateInput,
Datachecker.validateEmailDuplication, 
UserController.registerUser);
route.get("/user",UserController.getUsers);
route.delete("/user/delete/:id",UserController.deleteUser);
route.patch("/user/update/:id",UserController.updateUser);
route.post("/tour/create",verifytoken,verifyaccess("admin"), tourController.registerTour);
route.patch("/tour/update/:id",tourController.updateTour);
route.get("/tour/get",tourController.getTour);
route.post("/booking",BookingController.BokingTour);
//route.get("/user/all",verifytoken,verifyaccess("users"),UserController.getUsers);









 

// route.get("/user/getUser",(req,res)=>{
//     console.log("Here--------------");
//     res.json(["Fabiola test","Shakur"]);
// });
export default route;
