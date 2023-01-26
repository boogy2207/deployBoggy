const { User } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const { getToken, getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;
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
    image?
    user = new User({ name, email, code, password:await bcryptjs.hash(password, 10), image }):
    user = new User({ name, email, code, password:await bcryptjs.hash(password, 10) })
    const token = getToken({ email, code });

    const template = getTemplate(name, token);

    await sendEmail(email, "Confirma Tu Cuenta", template);
    await user.save();

    res.json({
      success: true,
      msg: "Registrado correctamente",
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al registrar usuario",
      error: error,
    });
  }
};

const confirm = async (req, res) => {
  try {
    console.log('a');
    const { token } = req.params;
    const data = await getTokenData(token);

    if (data === null) {
      return res.json({ success: false, msg: "Error al obtener data " });
    }
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

const signIn = async (req, res)=>{
  try {
    const {email, password} = req.body
    const users = await User.findOne({ where:{email: email}})
    if(!users) return res.status(402).json("Correo no encontrado")
    if(users.isValid === false) return res.status(404).json("La cuenta no esta verificada")
    const confirmPassword = await bcryptjs.compare(password, users.password)
    if(!confirmPassword){
      return res.status(401).json("La contraseña es incorrecta")
    }
    const token = await jwt.sign({
      id: users.id,
      email: users.email,
      name: users.name,
      isAdmin: users.isAdmin,
      isUser: users.isUser
    }, process.env.JWT_SEC, {
      expiresIn: 84500
    })
    const dataUser = {email: users.email, name: users.name, id: users.id, isAdmin: users.isAdmin, isUser: users.isUser}
    res.status(200).json({user: dataUser, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  signUp,
  confirm,
  signIn
};

