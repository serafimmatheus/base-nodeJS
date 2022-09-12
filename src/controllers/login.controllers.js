import loginServices from "../services/login.services";

class LoginControllers {
  loginControllers = (req, res) => {
    const { email, password } = req.body;

    const token = loginServices.loginServices(email, password);

    return res.status(200).json(token);
  };
}

export default new LoginControllers();
