import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //   1.Read The token
  const token = req.headers["authorization"];
  //  2.If no token return the error
  console.log(token);
  if (!token) {
    return res.status(401).send("unauthorized");
  }
  //  3.Check if token is valid
  try {
    const payload = jwt.verify(token, "X7BvJj25LDxrArMddaps2BXCdW1Tx1Gc");
    console.log(payload);
  } catch (err) {
    //  4.Return error
    return res.status(401).send("unauthorized");
  }
  // 5.Next Middleware
  next();
};
export default jwtAuth;
