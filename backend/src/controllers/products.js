// For Semua Harga
const postProduct = require('../models/products');
// For 5rb

// For Semua Harga
// POST
exports.createProduct = (req, res, next)=>{
    // const image = req.body.image;
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;

    // create Database Dynamic
    const Posting = new postProduct({
        // image: image,
        label: label,
        name: name,
        price: price,
        stock: stock,
        author: {
            uId: 1,
            name: "Mohamad Ridwan"
        }
    })

    // Save Posting Product to database mongoDB
    Posting.save()
    .then((result)=>{
        res.status(201).json({
            message: "Create Product Success",
            // nama data yg dikirim
            dataProduct: result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET with query params with id
exports.getProduct = (req, res, next)=>{
    // Create Pagination
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 4;
    let totalItems;

    postProduct.find()
    .countDocuments()
    .then(count=>{
        totalItems = count;
        return postProduct.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then(result=>{
        res.status(200).json({
            message: "Data Produk Berhasil Di Panggil",
            dataSemuaHarga: result,
            total_data: totalItems,
            per_page: parseInt(perPage),
            current_page: parseInt(currentPage)
        })
    })
    .catch(err=>{
        next(err)
    })
}

// GET API with params ID
exports.getProductById  = (req, res, next)=>{
    const productId = req.params.productId
    postProduct.findById(productId)
    .then(result=>{
        if(!result){
            const error = new Error('data product tidak di temukan!');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "data product berhasil di dapatkan",
            data: result
        })
    })
    .catch(err=>{
        next(err)
    })
}