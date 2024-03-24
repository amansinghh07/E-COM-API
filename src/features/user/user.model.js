export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }
  static signup(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    newUser.id = Users.length + 1;
    Users.push(newUser);
    return newUser;
  }
  static signin(email, password) {
    const result = Users.find(
      (u) => u.email == email && u.password == password
    );
    return result;
  }
  static getAll(){
    return Users;
  }
}
const Users = [
  {
    name: "Admin1",
    email: "seller@ecom.com",
    password: "Password1",
    type: "Seller",
    id: "1",
  },
];
