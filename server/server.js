const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();
const port = process.env.PORT || 5000;


//middleware
//app.use(express.static('public'));
app.use(express.json());
console.log(__dirname + "../client/build");
app.use(express.static(path.join(__dirname, "..", "client")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
});

// Connect to the database
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'test',
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;



app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});