const {validationResult} = require('express-validator');
const path = require('path');
const fs = require('fs')
const BlogPost = require('../models/blog');

// POST
exports.createBlogPost = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input Value tidak sesuai');
        err.errorStatus = 400
        err.data = errors.array();
        throw err;
    }

    if(!req.file){
        const err = new Error('Image Harus di Upload');
        err.errorStatus = 422
        // err.data = errors.array();
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    // Database Dynamic
    const Posting = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {
            uId: 1, 
            name: "Mohamad Ridwan"
        }
    })

    // Save Posting to database mongo DB
    Posting.save()
    .then((result)=>{
        res.status(201).json({
            message : 'Create Blog Post Success!!!',
            dataBlog: result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET with query params with id
exports.getAllBlogPost = (req, res, next)=>{
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    let totalItems;

    BlogPost.find()
    .countDocuments()
    .then(count=>{
        totalItems = count;
        return BlogPost.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then(result=>{
        res.status(200).json({
            message: "Data Berhasil Di panggil",
            data: result,
            total_data: totalItems,
            per_page : parseInt(perPage),
            current_page: parseInt(currentPage)
        })
    })
    .catch(err=>{
        next(err);
    })
}

// GET Api with params ID
exports.getBlogPostById = (req, res, next)=>{
    const postId = req.params.postId
    BlogPost.findById(postId)
    .then(result=>{
        // Handling kesalahan pemanggilan ID
        if(!result){
            const error = new Error('data Blog Post not Found!!');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "Data Blog Post Get Success!!",
            data: result
        })
    })
    .catch(err=>{
        next(err)
    })
}

// PUT
exports.updateBlogPost = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input Value tidak sesuai');
        err.errorStatus = 400
        err.data = errors.array();
        throw err;
    }

    if(!req.file){
        const err = new Error('Image Harus di Upload');
        err.errorStatus = 422
        // err.data = errors.array();
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;
    const postId = req.params.postId;

    BlogPost.findById(postId)
    // Promise Satu
    .then(post => {
        if(!post){
            const err = new Error('data Blog Post not Found!!')
            err.errorStatus = 404;
            throw err;
        }
        
        post.title = title
        post.body = body
        post.image = image

        return post.save();
    })
    // Promise Dua
    .then(result=>{
        res.status(200).json({
            message: "Update Success!!",
            data: result
        })
    })
    .catch(err=>{
        next(err);
    })
}

// DELETE
exports.deleteBlogPost = (req, res, next)=>{
    const postId = req.params.postId;

    // Cek data dengan id yg terkirim
    BlogPost.findById(postId)
    .then(post =>{
        if(!post){
            const error = new Error('data Blog Post not Found!!');
            error.errorStatus = 404;
            throw error;
        }

        removeImage(post.image);
        return BlogPost.findByIdAndRemove(postId)
        
    })
    .then(result =>{
        res.status(200).json({
            message: "Delete Blog Post Success!!",
            data: result,
        })
    })
    .catch(err=>{
        next(err)
    }) 
}

// Remove dengan file path Image
const removeImage = (filePath)=>{
    console.log(filePath);
    console.log('dir name :', __dirname);

    filePath = path.join(__dirname, '../..', filePath);
    fs.unlink("file path :", filePath, err => console.log(err))
}