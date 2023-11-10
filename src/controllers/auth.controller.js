import bcrypt from "bcrypt";
import { LoginService, gerenateToken } from "../services/auth.service.js";

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await LoginService(email);

    if (!user) {
      return res.status(404).send({ message: "Invalid E-mail or Password" });
    }

    const passwordIsValid = bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(404).send({ message: "Invalid E-mail or Password" });
    }

    const token = gerenateToken(user.id, user.email)

    res.send({token});
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

export { Login };
