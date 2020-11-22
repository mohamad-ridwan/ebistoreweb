const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AllProduct = new Schema({
    data1 : [
        {
            label :{
                type: String,
                required: true
            },
            name : {
                type : String,
                required: true
            },
            price : {
                type: String,
                required: true
            }
        }
    ],
    data2 : [
        {
            label : {
                type: String,
                required: true
            },
            name : {
                type: String,
                required: true
            },
            price : {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('allproduct', AllProduct)