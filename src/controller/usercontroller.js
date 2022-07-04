import UserServiceS from "../services/userservice";

class UserController {
  static async registerUser(req, res) {
    const newUser = await UserServiceS.registerUser(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }

  // getting all 

  static async getAll(req, res) {
    const newUser = await UserServiceS.getAll(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }
  
  // delete user

  static async deleteUser(req, res) {
    const newUser = await UserServiceS.deleteUser(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }
  //updating user
  
  static async updateUser(req, res) {
    const newUser = await UserServiceS.updateUser(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }

  static testController(req, res) {
    const test = UserServiceS.testServiceFunction(req);

    return res.status(200).json({
      mssage: "Ok! successfully",
      data: test,
    });
  }

  static getUser(req,res){
    console.log("am here");
    return res.status(200).json({
      mssage: "Ok! successfully",
     
    });
  }
}
export default UserController;
