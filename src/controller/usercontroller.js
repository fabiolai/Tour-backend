import UserServiceS from "../services/userservice";
import handlePassword from "../utils/handlepassword";
import TokenAuth from "../utils/token"
class UserController {
  //login controller
  static async loginUserController(req, res) {
    const user = await UserServiceS.loginUser(req);
    if (!user) {
      return res.status(400).json({ message: "user is not exist" });
    }
    if (handlePassword.checkPassword(user.password, req.body.password)) {
      const token =TokenAuth.generateToken({
        phone: user.phone,
        email:user.email,
        picture: user.picture,
        names: user.names,
        role:user.role

      })
      return res.status(200).json({ message: "logged in successfully" , token});
    } else {
      return res
        .status(400)
        .json({ message: "failed to loggin , Password is wrong" });
    }
  }
  static async registerUser(req, res) {
    const newUser = await UserServiceS.registerUser(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(200).json({ message: "success", data: newUser });
  }

  // getting all

  static async getUsers(req, res) {
    const newUser = await UserServiceS.getUsers(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(200).json({ message: "success", data: newUser });
  }

  // delete user

  static async deleteUser(req, res) {
    const newUser = await UserServiceS.deleteUser(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(200).json({ message: "success", data: newUser });
  }
  //updating user

  static async updateUser(req, res) {
    console.log(req.params.names);
    const newUser = await UserServiceS.updateUser(req);
    if (!newUser) {
      return res.status(401).json({ message: "failed to register" });
    }
    return res.status(200).json({ message: "success", data: newUser });
  }

  static testController(req, res) {
    const test = UserServiceS.testServiceFunction(req);

    return res.status(200).json({
      mssage: "Ok! successfully",
      data: test,
    });
  }

  static getUser(req, res) {
    console.log("am here");
    return res.status(200).json({
      mssage: "Ok! successfully",
    });
  }

  
}
export default UserController;
