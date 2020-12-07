const dataMenu = require('../models/menu')

exports.postData = (req, res, next) => {
    const nameMenu = req.body.nameMenu
    const linkPage = req.body.linkPage

    // Save to MongoDB
    const Posting = new dataMenu({
        nameMenu: nameMenu,
        linkPage: linkPage
    })

    Posting.save()
        .then((result) => {
            res.status(201).json({
                message: "Data berhasil di tambahkan!",
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getData = (req, res, next) => {
    let totalItems;

    dataMenu.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return dataMenu.find()
        })
        .then(result => {
            res.status(200).json({
                message: "Data Berhasil Di dapatkan!",
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}