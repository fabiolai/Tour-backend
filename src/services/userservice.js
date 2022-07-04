 import UserModel from "../models/users";

class UserServiceS{

//function that register user

    static async registerUser(req){
        const user = await UserModel.create(req.body);

         return user;

     }

     // Function that that get all users

     static async getAll(req){
        const user = await UserModel.find(req.body);

         return user;

     }
     
     // function that delete user


     static async deleteUser(req){
        const user = await UserModel.deleteOne({_id:req.params.id});

         return user;

     }

     // function that update user
     
     static async updateUser(req){
        await UserModel.findOneAndUpdate({_id:req.params.id},req.body);
        const user = await UserModel.findOne({_id:req.params.id});

         return user;

     }


    static testServiceFunction(req) {
        req.body.names= req.body.names.toUpperCase();
       const {num1,num2} = req.body;
       const sum = num1 + num2;
       const prod = num1 * num2;
       req.body.sum = sum;
       req. body. pro = prod
        return req.body;
    }

}



export default UserServiceS;