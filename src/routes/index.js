import { Router } from "express";
import UserController from "../controller/usercontroller";
import app from "../server";

const route =Router();
route.post("/user/test", UserController.testController);

route.post("/user",UserController.registerUser);
route.get("/user",UserController.getUser);
route.delete("/user/:id",UserController.deleteUser);
route.patch("/user/:id",UserController.updateUser);




 route.get("/user/getUser",UserController.getUser);

// route.get("/user/getUser",(req,res)=>{
//     console.log("Here--------------");
//     res.json(["Fabiola test","Shakur"]);
// });
export default route;
