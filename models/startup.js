const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    Address:{
        type:String
        
    },
    City:{
        type:String
    },
    Country:{
        type:String
    },
    Code:{
        type:String
    },
    Logo:{
        type:String,
    },
    Website:{
        type:String
    },
    Category:{
        type:String
    },
    Product:{
        type:String
    }

});

const Startup = mongoose.model('Startup',startupSchema);

module.exports = Startup;