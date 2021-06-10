const Student = require('./../models/StudentModel')

//Query to get all the students and send the data to students.ejs and send back the file to the client as a response 
exports.getAllStudents = async (req, res) => {
    try {
        const query = await Student.find({}).select('-_id')
        // console.log(query);
        res.render(`${__dirname}/../public/students`, { data: query })
    }
    catch (err) {
        console.log(err);
    }

}