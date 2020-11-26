const dataKeranjang = require('../models/keranjang')

// POST
exports.postData = (req, res, next)=>{
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const posId = req.body.id

    // create dynamic to mongoDB
    const Posting = new dataKeranjang({
        id : posId,
        label : label,
        name : name,
        price : price,
    })

    Posting.save()
    .then(result=>{
        res.status(201).json({
            message: "data keranjang berhasil di tambahkan!!",
            keranjang : result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET
exports.getData = (req, res, next)=>{
    let totalItems;

    dataKeranjang.find()
    .countDocuments()
    .then(count=>{
        totalItems = count;
        return dataKeranjang.find()
    })
    .then(result=>{
        res.status(200).json({
            message : "data keranjang berhasil di dapatkan!!",
            data: result,
            total_data: totalItems
        })
    })
    .catch(err=>{
        next(err)
    })
}

// PUT
exports.putData = (req, res, next)=>{
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const postId = req.params.id;

    dataKeranjang.findById(postId)
    .then(post => {
        if(!post){
            const err = new Error('data makaroni tidak di temukan')
            err.errorStatus = 404;
            throw err;
        }

        post.label = label
        post.name = name
        post.price = price

        return post.save();
    })
    .then(result=>{
        res.status(201).json({
            message : "data makaroni berhasil di tambahkan ke keranjang",
            data : result
        })
    })
    .catch(err=>{
        next(err)
    })
}