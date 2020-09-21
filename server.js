const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// importing files
const routes = require('./routes/api');

// Define Global Variables
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const log = console.log;
const PORT = process.env.PORT || 8080; // Step 1

mongoose.connect("mongodb://localhost:27017/mernStackdb",{ useNewUrlParser: true , useUnifiedTopology: true });

app.use(cors());

app.use('/api',routes);




/*
// Step 2
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/my_database', {
    useNewUrlParser: true
});

// Configuration



// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}
 */
app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});
