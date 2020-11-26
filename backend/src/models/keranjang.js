const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dataKeranjang = new Schema({
    id : {
        type: String,
        required: true,
    },
    label : {
        type : String,
        required : true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('datakeranjang', dataKeranjang)