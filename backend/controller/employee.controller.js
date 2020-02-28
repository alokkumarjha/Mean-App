const Joi = require('joi')
const mongoose = require('mongoose');
const Employee = require('../Models/Employee');

module.exports ={

 async getAllEmployee(req,res){

    Employee.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
 },

 async createEmployee(req,res){
    const schema={
        name : Joi.string().min(3).required(),
        email : Joi.string().email().required(),
        designation : Joi.string().min(3).required()
    };

    const result=Joi.validate(req.body, schema);
    
    if(result.error){
        res.status(400).send(result.error);
        return
    }

    Employee.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
 }

}