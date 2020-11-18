const postProduct = require('../models/limaribu')

// For 5RB
// POST
exports.createLimaRibu = (req, res, next)=>{
    // const image = req.body.image;
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;

    // create Database Dynamic
    const PostingLimaRibu = new postProduct({
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
    PostingLimaRibu.save()
    .then((result)=>{
        res.status(201).json({
            message: "Makaroni 5Rb berhasil di tambahkan!!",
            // nama data yg dikirim
            makaroniLimaRibu: result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET with query params ID
exports.getLimaRibu = (req, res, next)=>{
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
        .limit(parseInt(perPage))
    })
    .then(result=>{
        res.status(200).json({
            message : "makaroni 5RB berhasil di dapatkan",
            dataLimaRibu : result,
            total_data : totalItems,
            per_page : parseInt(perPage),
            current_page : parseInt(currentPage)
        })
    })
    .catch(err=>{
        next(err)
    })
}