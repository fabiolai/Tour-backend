import {check,validationResult} from "express-validator";

class validator{
    static validateInput =(req,res,next) =>{
         const errors =validationResult(req);

        if(!errors.isEmpty()) {
            const errorMessage = errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                satus:400,
                message:errorMessage
            })

        }
        return next();
    }
    static newAccountRules(){
        return[
            check("email","please your email is invalid").isEmail(),
           // check("firstName","please your first name have special character").isA,
            check("names","please your  names have special character").isAlp,
            check("gender","gender is invalid").isIn(['male','female']),
            check("phone"," your phone is invalid").isMobilePhone(),
            check("age","age should be integer").isInt(),
            check("password","password must be strong").isStrongPassword()
        ];
    } 
    static checkId() {
        return[
            check("id","id should be mongoId")
        ]
    }
}  
export default validator;  