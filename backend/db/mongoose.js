const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection
    .once('open', () => console.log('connection established'))
    .on('error', (error) => console.log(error));