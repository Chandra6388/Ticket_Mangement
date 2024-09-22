"use strict"
const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const userModel = Schema({

    Username: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
   
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        default: null
    },
    PhoneNo: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 10,
          
        default: null
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Notes: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
}

)
const User_model = model('USER', userModel);

module.exports = User_model;
 
















