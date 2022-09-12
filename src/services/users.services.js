import { v4 as uuid } from "uuid";
import users from "../database/users";
import * as bcrypt from "bcryptjs";

class UsersServices {
  createUserServices = async (email, name, password) => {
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuid(),
      email,
      name,
      password: hashPassword,
    };

    users.push(newUser);

    return newUser;
  };

  getUserServices = () => {
    return users;
  };

  updetedUserServices = async (id, name, email, password) => {
    const userFound = users.findIndex((elem) => elem.id === id);

    const hashPassword = await bcrypt.hash(password, 10);

    const userUpdated = {
      id,
      name,
      email,
      password: hashPassword,
    };

    users[userFound] = { ...users[userFound], ...userUpdated };

    return userUpdated;
  };

  deletedUserServices = (id) => {
    const userFound = users.findIndex((elem) => elem.id === id);

    users.splice(userFound, 1);

    return "";
  };
}

export default new UsersServices();
