const Express = require("express");
const router = Express.Router();
const { Op } = require("sequelize");
const { User } = require("../db");
const userControllers = require("../controllers/userControllers");

//post user

router.post(
    '/',
    [],
    userControllers.signUp
);
////////
router.get(
    '/confirm/:token',
    [],
    userControllers.confirm
);

//get user

router.get("/", async (req,res) =>{
    try{
        const user = await User.findAll()
        res.status(200).json(user)

    } catch (error) {
        console.log(error);
    }
})



//get user by id 

router.get("/:id", async (req,res)=>{
    const {id} = req.params;
    try{
        const user = await User.findByPk(id)
        res.status(200).json(user)

    }catch (error) {
        console.log(error);
    }
})


//update user by id

router.put("/:id", async (req,res)=>{
    const {id} = req.params;
    const {name, email, password} = req.body;
    try{
        const user = await User.update({name, email, password}, {where: {id}})
        res.status(200).json(user)
    }catch (error) {
        console.log(error);
    }
})

//delete user by id 
router.delete('/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        const user = await User.destroy({where: {id}})
        res.status(200).json(user)
    }catch (error) {
        console.log(error);
    }
})


module.exports = router;