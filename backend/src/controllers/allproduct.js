const { validationResult } = require('express-validator');
const Schema = require('../models/allproduct');

// POST
exports.postAll = (req, res, next) => {
    if (!req.file) {
        const err = new Error('Image Harus di Upload!');
        err.errorStatus = 422
        throw err;
    }

    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;
    const deskripsi = req.body.deskripsi;
    const komposisi = req.body.komposisi;
    const image = req.file.path;

    const PostData = new Schema({
        label: label,
        name: name,
        price: price,
        stock: stock,
        deskripsi: deskripsi,
        komposisi: komposisi,
        image: image,
    })

    PostData.save()
        .then(result => {
            res.status(201).json({
                message: "Data makaroni berhasil di tambahkan!!",
                allData: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET with query params with id
exports.getAll = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 4;
    let totalItems;

    Schema.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return Schema.find()
                .skip((parseInt(currentPage) - 1) * parseInt(perPage))
                .limit(parseInt(perPage));
        })
        .then(result => {
            res.status(200).json({
                message: "Data Berhasil di dapatkan!!",
                data: result,
                total_data: totalItems,
                per_page: parseInt(perPage),
                current_page: parseInt(currentPage)
            })
        })
        .catch(err => {
            next(err)
        })
}
// 

// Get with params ID
exports.getAllById = (req, res, next) => {
    const getId = req.params.getId
    Schema.findById(getId)
        .then(result => {
            if (!result) {
                const error = new Error('data makaroni tidak ada');
                error.errorStatus = 404;
                throw error;
            }
            res.status(200).json({
                message: "Data berhasil di dapatkan!!",
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// Get with username
// exports.getAllByUsername = (req, res, next)=>{
//     const getUsername = req.params.getUsername
//     Schema.find
// }