import ProductModel from "./product.model.js";

export default class ProductController {
  getallproduct(req, res) {
    const Products = ProductModel.getAll();
    res.status(200).send(Products);
  }
  addProduct(req, res) {
    const { name, price, Sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      Sizes: Sizes.split(","),
      ImageUrl: req.file.filename,
    };
    const CreatedProducts = ProductModel.add(newProduct);
    res.status(201).send(CreatedProducts);
  }
  rateProduct(req, res) {}
  filterProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    const result = ProductModel.filter(minPrice, maxPrice, category);
    res.status(200).send(result);
  }
  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      return res.status(200).send(product);
    }
  }
}
