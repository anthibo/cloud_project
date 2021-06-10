const mongoose = require('mongoose')

//Model Scehma
//Mongo db collection (Nosql)-> table in sql
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Student must have a name'],
        unique: true,
        trim: true
    },
    uni_id: {
        type: Number,
        required: [true, 'A Student must have an id']
    },
    gpa: {
        type: Number,
        required: [true, 'A student must have a gpa']
    },

    img: {
        type: String,
        required: [true, 'A student must have an image']
    }
})
const Student = mongoose.model('Student', studentSchema)
module.exports = Student;