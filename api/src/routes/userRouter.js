const Express = require("express");
const router = Express.Router();
const { Op } = require("sequelize");
const { User } = require("../db");
const userControllers = require("../controllers/userControllers");
const { verifyToken, isAdmin, isUser } = require("../middlewares/authJwt");
const transporter = require("../config/mail.config")
const sendEmail = require("../config/mail.config")

//post user

router.post("/", [], userControllers.signUp);

///
router.post("/login", userControllers.signIn);

///
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

////////
// router.get("/confirm/:token", [], userControllers.confirm);

//get user

router.get("/", async (req, res) => {
  try {
    const user = await User.findAll({
      paranoid: false,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

//get user by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(200).json(user);
    return res.status(200).json(user.isValid);
  } catch (error) {
    console.log(error);
  }
});

//update user by id

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.update(
      { name, email, password },
      { where: { id } }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

//delete user by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

//restore user by id
router.put("/restore/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.restore({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get("/email/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const findEmail = await User.findOne({ where: { email: email } });
    if (findEmail) {
      return res.status(200).json(true);
    }
    return res.status(200).json(false);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/validate/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const findEmail = await User.findOne({ where: { email: email } });
    if (findEmail) {
      const user = await User.update(
        {
          isValid: true,
        },
        {
          where: { email: email },
        }
      );
      return res
        .status(200)
        .json({ user: user.email, message: "Email validated" });
    }
    return res.status(200).json({ message: "Email not found" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/send", async(req, res)=> {
  const { name, email, subject, message } = req.body
  try {
    transporter.sendContact(name, email, subject, message) && res.status(200).json({msg: "Email sended"})
  } catch (error) {
    console.log(error)
  }
})


module.exports = router;
