export default class ProductModel {
  constructor(id, name, description, price, ImageUrl, category, Sizes) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.ImageUrl = ImageUrl;
    (this.category = category), (this.Sizes = Sizes);
  }
  static add(product) {
    product.id = product.length + 1;
    products.push(product);
    return product;
  }
  static get(id) {
    const product = products.find((p) => p.id == id);
    return product;
  }
  static getAll() {
    return products;
  }
  static filter(minPrice, maxPrice, category) {
    const result = products.filter((p) => {
      return (
        (!minPrice || p.price >= minPrice) &&
        (!maxPrice || p.price <= maxPrice) &&
        (!category || p.category == category)
      );
    });
    return result;
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    "Category1",
    ["M", "L", "XL"]
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    "Category2",
    ["L", "XL", "XXL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
    "Category3"
  ),
];
