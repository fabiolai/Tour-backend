import { Router } from "express";
import UserController from "../controller/usercontroller";

const route =Router();
route.post("/user/test", UserController.testController);

export default route;
