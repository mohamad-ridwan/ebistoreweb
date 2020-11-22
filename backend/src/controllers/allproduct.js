const dataAllProduct = require('../models/allproduct')
const { Schema } = require("mongoose");

// POST
exports.createAllProduct = (req, res, next)=>{
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;

    // Untuk dynamic database
    // Create Schema baru untuk mongoDB
    const Posting = new dataAllProduct({
        data1 : [
            {
                label: label,
                name: name,
                price: price,
            }
        ],
        data2 : [
            {
                label: label,
                name : name,
                price: price
            }
        ]
    })

    // Lalu Save Posting ke mongoDB
    Posting.save()
    .then((result)=>{
        // Kirimkan pesan status jika berhasil
        res.status(201).json({
            message : "data berhasil di tambahkan!!",
            allProduct : result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}