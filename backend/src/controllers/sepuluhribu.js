const postProduct = require('../models/sepuluhribu');

// POST
exports.createProduct = (req, res, next)=>{
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;

    // Create Dynamic Database
    const Posting = new postProduct({
        label : label,
        name: name,
        price: price,
        stock: stock,
        author:{
            uId: 1,
            name: "Mohamad Ridwan"
        }
    })

    // Save Post to mongoDB
    Posting.save()
    .then((result)=>{
        res.status(201).json({
            message: "data produk makaroni sepuluh ribu berhasil di tambahkan!",
            makaroniSepuluhRibu: result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET with query params
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
            message : "data makaroni sepuluh ribu berhasil di dapatkan!!",
            dataSepuluhRibu: result,
            total_data: totalItems,
            per_page: parseInt(perPage),
            current_page: parseInt(currentPage)
        })
    })
    .catch(err=>{
        next(err)
    })
}