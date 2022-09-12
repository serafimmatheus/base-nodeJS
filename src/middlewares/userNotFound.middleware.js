import users from "../database/users";

const userNotFoundMiddleware = (req, res, next) => {
  const { id } = req.params;
  const userNotFound = users.find((elem) => elem.id === id);

  if (!userNotFound) {
    return res.status(404).json({ message: "User not found!" });
  }

  return next();
};

export default userNotFoundMiddleware;
