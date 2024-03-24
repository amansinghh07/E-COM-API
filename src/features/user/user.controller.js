import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const signupUser = UserModel.signup(name, email, password, type);
    res.status(201).send(signupUser);
  }
  signIn(req, res) {
    const { email, password } = req.body;
    const signinUser = UserModel.signin(email, password);
    if (!signinUser) {
      res.status(400).send("Invalid Credentials");
    } else {
      const token = jwt.sign(
        {
          userID: signinUser.id,
          email: signinUser.email,
        },
        "X7BvJj25LDxrArMddaps2BXCdW1Tx1Gc",
        {
          expiresIn: "2h",
        }
      );
      res.status(200).send(token);
    }
  }
}
