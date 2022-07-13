import express from"express";
import validator from"../middleware/validator";
import Usercontroller from "../controller/usercontroller";
import Datachecker  from "../middlewares/datachecker";

const userRouter = express.Router();


validator.newAccountRules(),
validator.validateInput,
Datachecker.validateEmailDuplication,
Datachecker.checkAge,

userRouter.get("/:id",validator,checkId(),validator.validateInput,Usercontroller);
userRouter.patch("/:id",validator,checkId(),validator.validateInput,Usercontroller);
userRouter.delete("/:id",validator,checkId(),validator.validateInput,Usercontroller);

export default userRouter;