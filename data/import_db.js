const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Student = require('./../models/StudentModel')
dotenv.config({ path: `${__dirname}/../config.env` });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
const localDB = process.env.DATABASE_LOCAL
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connection successful ");
    })
//READ JSON FILE
const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`, 'utf-8'))
//import data into database
const importData = async () => {
    try {
        await Student.create(students)
        console.log('Data Successfully loaded')

    }
    catch (err) {
        console.log(err);
    }
    process.exit()
}
//Delete all data from collection
const deleteData = async () => {
    try {
        await Student.deleteMany()
        console.log('Data deleted')
    }
    catch (err) {
        console.log(err);
    }
    process.exit()
}

if (process.argv[2] == '--import') {
    importData()
}

if (process.argv[2] == '--delete') {
    //console.log('delete function')
    deleteData()
}
//console.log(process.argv[2])