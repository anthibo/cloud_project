

const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });


const app = require('./app');




//Connecting to database
const CloudDB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)

const localDB = process.env.DATABASE_LOCAL
mongoose
    .connect(CloudDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connection successful ");
    })

//STARTING SERVER 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

