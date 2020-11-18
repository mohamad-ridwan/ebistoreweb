const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// For Makaroni 5RB
const makaroniLimaRibu = new Schema({
    // image: {
    //     type: String,
    //     required: true
    // },
    label:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    stock: {
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

module.exports = mongoose.model('makaroniLimaRibu', makaroniLimaRibu)