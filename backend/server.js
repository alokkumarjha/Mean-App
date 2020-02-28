let express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');
require('./db/mongoose');

const employeeRoute = require('../backend/routes/employee.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/api', employeeRoute)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});