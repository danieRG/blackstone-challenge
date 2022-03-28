const { authModel } = require("../models/authModel");


module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body
            const login = await authModel.login(email, password);

            if(login){
                res.status(200).send(login)
            }
        } 
        catch (error) {
            next(error)
        }
    }
}