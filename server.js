import express from "express";
import Productrouter from "./src/features/product/product.route.js";
import bodyParser from "body-parser";
import UserRouter from "./src/features/user/user.router.js";
import { basicAuthorizer } from "./src/middleares/basicAuth.middleware.js";
import jwtAuth from "./src/middleares/jwt.middleware.js";
const server = express();

server.use(bodyParser.json());
server.use(express.static("uploads"));
server.use("/api/products", jwtAuth, Productrouter);
server.use("/api/user", basicAuthorizer, UserRouter);

server.get("/", (req, res) => {
  res.send("Welcom to Ecom APi server...");
});

server.listen(3200, () => {
  console.log("server is listening at 3200");
});
