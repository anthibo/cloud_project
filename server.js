const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
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

//STARTING SERVER
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

