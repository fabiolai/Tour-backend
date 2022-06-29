import UserServiceS from "../services/userservice";

class UserController{

    static testController(req,res){
const test = UserServiceS.testServiceFunction(req);

return res.status(200).json({
    mssage:"Ok! successfully",
    data:test
})
    }

}
export default UserController;