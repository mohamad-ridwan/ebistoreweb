const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const allData = new Schema({
    label : {
        type: String,
        required : true,
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    stock : {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    komposisi: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('alldata', allData)