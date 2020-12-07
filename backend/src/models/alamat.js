const mongoose = require('mongoose');
const { model } = require('./products');
const Schema = mongoose.Schema;

const PostAlamat = new Schema({
    alamat: {
        type: String,
        required: true
    },
    kota: {
        type: String,
        required: true
    },
    kodePos: {
        type: String,
        required: true
    },
    namaPenerima: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Data Alamat', PostAlamat)