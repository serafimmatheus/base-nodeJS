import users from "../database/users";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

class LoginServices {
  loginServices = (email, password) => {
    const userFound = users.find((elem) => elem.email === email);

    if (!userFound) {
      return "Usuário ou senha incorretos!";
    }

    const passwordMatch = bcrypt.compareSync(password, userFound.password);

    if (!passwordMatch) {
      return "Usuário ou senha incorretos!";
    }

    const token = sign({ id: users.id }, "SECRET_KEY", { expiresIn: "24h" });

    return token;
  };
}

export default new LoginServices();
