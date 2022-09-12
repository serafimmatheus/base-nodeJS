import users from "../database/users";

const emailAlreadyExistsMiddleware = (req, res, next) => {
  const emailAlreadyExists = users.find(
    (elem) => elem.email === req.body.email
  );

  if (emailAlreadyExists) {
    return res.status(400).json({ message: "Email already exists!" });
  }

  return next();
};

export default emailAlreadyExistsMiddleware;
