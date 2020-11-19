const mongoose = require('mongoose');
const { model } = require('./products');
const Schema = mongoose.Schema;

const PostAlamat = new Schema({
    jalan: {
        type: String,
        required: true
    },
    desa: {
        type: String,
        required: true
    },
    kecamatan: {
        type: String,
        required: true
    },
    kota: {
        type: String,
        required: true
    },
    provinsi:{ 
        type: String,
        required: true
    },
    kodePos: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Data Alamat', PostAlamat)