import { verify } from "jsonwebtoken";

const tokenAlreadyExistsMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization token." });
  }

  verify(token, "SECRET_KEY", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    return next();
  });
};

export default tokenAlreadyExistsMiddleware;
