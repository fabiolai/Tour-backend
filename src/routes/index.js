import { Router } from "express";
import UserController from "../controller/usercontroller";
import app from "../server";
import tourController from "../controller/tourController";

const route =Router();


route.post("/user/login", UserController.loginUserController);
route.post("/user/test", UserController.testController);
route.post("/user/create",UserController.registerUser);
route.get("/user",UserController.getUsers);
route.delete("/user/delete/:id",UserController.deleteUser);
route.patch("/user/update/:id",UserController.updateUser);
route.post("/tour/create", tourController.registerTour);
route.patch("/tour/update/:id",tourController.updateTour);
route.get("/tour/get",tourController.getTour);







 

// route.get("/user/getUser",(req,res)=>{
//     console.log("Here--------------");
//     res.json(["Fabiola test","Shakur"]);
// });
export default route;
