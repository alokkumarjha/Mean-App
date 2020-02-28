const express = require('express');
const app = express();
const employeeRoute = express.Router();
const empController = require('../controller/employee.controller')



employeeRoute.get('/',empController.getAllEmployee)

employeeRoute.post('/create', empController.createEmployee);

// Add Employee
// employeeRoute.route('/create').post((req, res, next) => {
//   Employee.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });

// Get All Employees
// employeeRoute.route('/').get((req, res) => {
//   Employee.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


module.exports = employeeRoute;