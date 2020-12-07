const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dataMenu = new Schema({
    nameMenu: {
        type: String,
        required: true
    },
    linkPage: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('dataMenu', dataMenu)