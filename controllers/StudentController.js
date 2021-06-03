const Student = require('./../models/StudentModel')
exports.getAllStudents = async (req, res) => {
    try {
        const query = await Student.find({}).select('-_id')
        console.log(query);
        res.render(`${__dirname}/../public/students`, { data: query })
    }
    catch (err) {
        console.log(err);
    }

}