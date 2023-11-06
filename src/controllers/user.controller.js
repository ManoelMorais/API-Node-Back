const UserCreate = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    res.status(201).send({
      message: "User created successfully",
      user: {
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

export default {
  UserCreate,
};
