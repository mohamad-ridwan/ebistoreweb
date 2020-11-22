const PostAlamat = require('../models/alamat');

// POST
exports.createAlamat = (req, res, next) =>{
    const jalan = req.body.jalan;
    const desa = req.body.desa;
    const kecamatan = req.body.kecamatan;
    const kota = req.body.kota;
    const provinsi = req.body.provinsi;
    const kodePos = req.body.kodePos;

    // oper ke mongoDB
    const Posting = new PostAlamat({
        jalan: jalan,
        desa: desa,
        kecamatan: kecamatan,
        kota : kota,
        provinsi: provinsi,
        kodePos: kodePos,
        author: {
            uId: 1,
            name: "Mohamad Ridwan"
        }
    })

    // lalu save to mongoDB
    Posting.save()
    .then((result)=>{
        res.status(201).json({
            message: "Data Alamat Berhasil di tambahkan",
            // beri nama collection datanya
            dataAlamat : result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET with query params
exports.getAlamat = (req, res, next) =>{
    const page = req.query.page;
    let totalItems;

    PostAlamat.find()
    .countDocuments()
    .then(count=>{
        totalItems = count;
        return PostAlamat.find()
    })
    .then(result=>{
        res.status(200).json({
            message : "Data alamat berhasil di dapatkan",
            dataAlamat: result,
            page : parseInt(page)
        })
    })
    .catch(err=>{
        next(err)
    })
}

// GET with params ID
// exports.getAlamatById = (req, res, next)=>{
//     const getId = req.params.getId
//     PostAlamat.findById(getId)
//     .then(result=>{
//         if(!result){
//             const error = new Error('data ')
//         }
//     })
//     .catch()
// }

// PUT
exports.updateAlamat = (req, res, next) =>{
    const jalan = req.body.jalan;
    const desa = req.body.desa;
    const kecamatan = req.body.kecamatan;
    const kota = req.body.kota;
    const provinsi = req.body.provinsi;
    const kodePos = req.body.kodePos;
    const postId = req.params.postId;

    PostAlamat.findById(postId)
    .then(post=>{
        if(!post){
            const err= new Error('data alamat tidak ada')
            err.errorStatus = 404;
            throw err;
        }

        post.jalan = jalan
        post.desa = desa
        post.kecamatan = kecamatan
        post.kota = kota
        post.provinsi = provinsi
        post.kodePos = kodePos

        return post.save();
    })
    .then(result=>{
        res.status(200).json({
            message: "data alamat berhasil di update",
            data : result
        })
    })
    .catch(err=>{
        next(err)
    })
}

// Delete
exports.deleteAlamat = (req, res, next)=>{
    const postId = req.params.postId;

    // Cek terlebih dahulu data yg ada
    PostAlamat.findById(postId)
    .then(post=>{
        if(!post){
            const error = new Error('data alamat tidak ada');
            error.errorStatus = 404;
            throw error;
        }

        return PostAlamat.findByIdAndRemove(postId)
    })
    .then(result=>{
        res.status(200).json({
            message: "data alamat berhasil di hapus!!",
            data: result
        })
    })
    .catch(err=>{
        next(err)
    })
}