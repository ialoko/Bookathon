const express = require('express');
const app = express();

const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();
const port = process.env.PORT || 5000;


//middleware
app.use(express.static('public'));

// Connect to the database
mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});