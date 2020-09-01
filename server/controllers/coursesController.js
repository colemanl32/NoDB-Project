const courses = require('../data.json')

module.exports = {
    getCourses: (req, res) => {
        res.status(200).send(courses)
    }
}