const dataAkun = require('../models/register')

// POST
exports.postAkun = (req, res, next)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const Posting = new dataAkun({
        username : username,
        email : email,
        password : password
    })

    // Save new schema to MONGODB
    Posting.save()
    .then((result)=>{
        res.status(201).json({
            message: "Data Akun berhasil di tambahkan!!",
            dataAkun : result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET
exports.getAkun = (req, res, next)=>{
    let totalItems;

    dataAkun.find()
    .countDocuments()
    .then(count=>{
        totalItems = count;
        return dataAkun.find()
    })
    .then(result=>{
        res.status(200).json({
            message: "Data Akun berhasil di dapatkan!!",
            data: result,
            total_data: totalItems
        })
    })
    .catch(err=>{
        next(err)
    })
}