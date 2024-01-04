const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.status(401).send({ message: "! Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "1 Invalid Email or Password" });

    const role = await User.findOne({ username: req.body.username });

    const token = user.generateAuthToken();
    res
      .status(200)
      .send({ data: token, role: role.role, message: "logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "1 Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label("username"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
