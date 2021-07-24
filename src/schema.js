const { Schema } = require("mongoose");

const mongoose = ("mongoose");

const productsSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    email: {
    type: String,
    required: true
    }
})

module.exports = productsSchema;