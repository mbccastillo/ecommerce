const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require("dotenv").config();

// import routes
const authRoutes = require('./routes/auth');

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("DB Connected"));
// .then((result) => app.listen(8000))
// .catch((err) => console.log(err));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is runnig on port $(port)`);
});