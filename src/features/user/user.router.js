import express from "express";
import UserController from "./user.controller.js";
// import { upload } from "../../middleares/fileupload.middleware.js";
const usercontroller = new UserController();
const UserRouter = express.Router();

UserRouter.post("/signup", usercontroller.signUp);
UserRouter.post("/signin", usercontroller.signIn);

export default UserRouter;
