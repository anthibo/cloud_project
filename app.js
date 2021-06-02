const express = require('express');
const morgan = require('morgan')

const app = express();
const StudentRouter = require('./routes/StudentRouter')



//middlwares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.static(`${__dirname}/public`))






//ROUTES
app.use('/students', StudentRouter)

module.exports = app;



