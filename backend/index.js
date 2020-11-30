const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const http = require('http')
const fs = require('fs');
const connect = require('connect')

// get method express
const server = express();

// Call Router EndPoint
// For API Produk Ebi Store
const productRoutes = require('./src/routes/products')
// For API produk 5rb
const limaRibuRoutes = require('./src/routes/limaribu')
// For API Produk 10rb
const sepuluhRibuRoutes = require('./src/routes/sepuluhribu')
// For API produk 15RB
const limaBelasRibuRoutes = require('./src/routes/limabelasribu')
// For Data Alamat
const dataAlamatRoutes = require('./src/routes/alamat')
// For All data product
const allProductRoutes = require('./src/routes/allproduct')
// For data keranjang
const keranjangRoutes = require('./src/routes/keranjang')
// For Register
const registerRoutes = require('./src/routes/register')
// For API web fetchAPI
const blogRoutes = require('./src/routes/blog');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images');
    },
    filename: (req, file, cb)=>{
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

// Handling Filter Folder Image
const fileFilter = (req, file, cb)=>{
    if( file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

server.use(bodyParser.json());
// handling error get images with widdleware
server.use('/images', express.static(path.join(__dirname, 'images')));
server.use(multer({storage: fileStorage, fileFilter}).single('image'))

// Allow Access for mode cors Response API
server.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization', 'application/json')
    next();
})

// For Endpoint produk Ebi Store
server.use('/v1/makaroni', productRoutes)
// For Endpoint 5RB
server.use('/v2/makaroni', limaRibuRoutes)
// For Endpoint 10RB
server.use('/v3/makaroni', sepuluhRibuRoutes)
// For Endpoint 15RB
server.use('/v4/makaroni', limaBelasRibuRoutes)
// For Data ALamat
server.use('/v5/dataalamat', dataAlamatRoutes)
// For data keranjang
server.use('/v7/makaroni', keranjangRoutes)
// For all product
server.use('/v8/makaroni', allProductRoutes)
// For Register
server.use('/v9/register', registerRoutes)
// For Endpoint web fetchAPI
server.use('/v9/blog', blogRoutes);

// handle middleware
server.use((error, req, res, next)=>{
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})

mongoose.connect('mongodb+srv://ridwan:ugELM2oeKdlMmVR9@cluster0.mtciq.mongodb.net/blog?retryWrites=true&w=majority')
.then(()=>{
    server.listen(62542, ()=> console.log('Connection Success!!'));
})
.catch(err => console.log(err));

