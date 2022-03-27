const authModel = {}


authModel.login = async(email, password) => {
    try {
        //validar si usurio eexiste
        //responder con token
        return true
    } catch (error) {
        throw error
    }
}

module.exports = { authModel } 