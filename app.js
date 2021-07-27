const express = require('express');
const morgan = require('morgan')

const app = express();
const StudentRouter = require('./routes/StudentRouter')




//define engine
app.set("view engine", "ejs");
//middlwares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


app.use(express.json())
app.use(express.static(`${__dirname}/public`))


//routing to homepage root route
app.route('/')
    .get((req, res) => {
        res.sendFile(`${__dirname}/public/homepage.html`)
    })


//silly comment to test ci
//ROUTES
app.use('/students', StudentRouter)

module.exports = app;



