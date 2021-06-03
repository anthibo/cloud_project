const express = require('express');
const morgan = require('morgan')

const app = express();
const StudentRouter = require('./routes/StudentRouter')


app.set("view engine", "ejs");
//middlwares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.static(`${__dirname}/public`))


//routing to homepage
app.route('/')
    .get((req, res) => {
        res.sendFile(`${__dirname}/public/homepage.html`)
    })



//ROUTES
app.use('/students', StudentRouter)

module.exports = app;



