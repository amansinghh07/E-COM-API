import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middleares/fileupload.middleware.js";
const productcontroller = new ProductController();
const Productrouter = express.Router();

Productrouter.get("/filter", productcontroller.filterProducts);
Productrouter.get("/", productcontroller.getallproduct);
Productrouter.post(
  "/",
  upload.single("ImageUrl"),
  productcontroller.addProduct
);
Productrouter.get("/:id", productcontroller.getOneProduct);

export default Productrouter;
