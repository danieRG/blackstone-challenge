const { authModel } = require("../models/authModel");


module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body
            const login = await authModel.login(email, password);
            
            const token = 'ajxnjskcjkcnkjasjnckjsanxkjsanx'

            if(login){
                res.status(200).send({ token: token })
            }
        } 
        catch (error) {
            next(error)
        }
    }
}