const jwt = require("jsonwebtoken")
const {User} = require("../db")


const verifyToken = async (req, res, next) => {
    try {
        const token = await req.headers["x-access-token"]
        const decodedToken = await jwt.verify(
          token,
          "Booky-users"
        )
        const user = await decodedToken
        console.log(user)
        req.user = user
        next()
      } catch (error) {
        res.status(401).json('No estas autorizado!')
      }
  };

  const isAdmin = async (req, res, next)=>{
   /*  const userDb = await User.findByPk(req.user.id) */
    if (req.user.isAdmin) {
        next()
      } else {
        res.status(404).json({
          error: true,
          message: 'No es un administrador'
        })
      }
  }

  const isUser = async (req, res, next)=>{
    if (req.user.isUser) {
        next()
      } else {
        res.status(404).json({
          error: true,
          message: 'No es un usuario'
        })
      }
  }

  module.exports = {
    verifyToken,
    isAdmin,
    isUser
  }