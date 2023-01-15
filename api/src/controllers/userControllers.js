const { User } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const { getToken, getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({
      where: {
        [Op.or]: [{ name: req.body.name, email: req.body.email }],
      },
    });

    if (user !== null) {
      return res.json({
        success: false,
        msg: "Usuario ya existe",
      });
    }

    const code = uuidv4();

    user = new User({ name, email, code, password });

    const token = getToken({ email, code });

    const template = getTemplate(name, token);

    await sendEmail(email, "Confirma Tu Cuenta", template);
    await user.save();

    res.json({
      success: true,
      msg: "Registrado correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al registrar usuario",
    });
  }
};

const confirm = async (req, res) => {
  try {
    const { token } = req.body;
    const data = await getTokenData(token);

    if (data === null) {
      return res.json({ success: false, msg: "Error al obtener data " });
    }
    console.log(data);
    const { email, code } = data.data;

    const user = await User.findOne({
      where: {
        [Op.and]: [{ email: email }],
      },
    });
    if (user === null) {
      return res.json({
        success: false,
        msg: "Usuario no existe",
      });
    }
    if (code !== user.code) {
      return res.redirect("/error.html");
    }
    user.status = "VERIFIED";
    await user.save();
    return res.redirect("/confirm.html");
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al confirmar usuario",
    });
  }
};

module.exports = {
  signUp,
  confirm,
};