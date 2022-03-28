const db = require('../db.json')
const { authUtils } = require('../utils/authUtils')
const authModel = {}


authModel.login = async(email, password) => {
    const { user } = db
    try {
        if(user.email !== email) return('User not found')

        const isLoggedIn = await authUtils.compareHash(password, user.password)
    
        if(isLoggedIn){
            const token  = authUtils.generateToken(user.id, user.name, user.email)

            return {token: token, displayName: user.name};
        }

        return('Wrong credentials')
        
    } catch (error) {
        throw error
    }
}

module.exports = { authModel } 