 import UserModel from "../models/users";
 import HandlePassword from "../utils/handlepassword";


class UserServiceS{
    // login
    static  async loginUser(req){
        const user = await UserModel.findOne({email:req.body.email});
        return user;
    }

//function that register user

    static async registerUser(req){
        req.body.password = HandlePassword.encryptPassword(req.body.password)
        const user = await UserModel.create(req.body);

         return user;

     }

     // Function that that get all users

     static async getUsers(){
        const user = await UserModel.find();
        // console.log(user)

         return user;

     }
     
     // function that delete user


     static async deleteUser(req)
     {
        const user = await UserModel.find();

         return user;


     }

     // function that update user
     
     static async updateUser(req){
       const user = await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true});

        // const user =  UserModel.findOne({_id:req.params.id});

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