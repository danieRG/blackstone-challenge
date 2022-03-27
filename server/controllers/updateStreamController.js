

module.exports = {

    update: async (req, res, next) => {
        try {
            
            searchTerm = req.body.searchTerm.join(',  ')

            res.status(200).send({ searchTerm: searchTerm })
        } catch (error) {
            next(error)
        }
    }
}