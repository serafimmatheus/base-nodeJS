import { usersServices } from "../services";

class UsersControllers {
  createUsersControllers = async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = await usersServices.createUserServices(
      email,
      name,
      password
    );

    return res.status(201).json(newUser);
  };

  getUsersControllers = (_, res) => {
    const users = usersServices.getUserServices();

    return res.status(200).json(users);
  };

  updatedUsersControllers = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updetadeUser = await usersServices.updetedUserServices(
      id,
      name,
      email,
      password
    );

    return res.status(200).json(updetadeUser);
  };

  deletedUsersControllers = (req, res) => {
    const { id } = req.params;
    const userDeleted = usersServices.deletedUserServices(id);

    return res.status(204).json(userDeleted);
  };
}

export default new UsersControllers();
