const { match } = require("assert")
const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },
    LastName : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true,
        unique:true
    },
    Password : {
        type:String,
        required:true
        
    },
    ConfirmPassword : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register