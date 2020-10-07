// Import dotenv config
require('dotenv').config()

// Import Express and database
const express = require('express')
const conn = require('./conn')
const cors = require('cors')

const port = process.env.SERVER_PORT

// description on variable alias app
const app = express()

// Memberikan sebuah middleware
app.use(express.json())
app.use(cors())

// routing default request api
app.get('/api/', (req, res) => {
    // For mengirim data ke body browser
    res.send(`
    <div style="
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
    ">
        <h1>Kamu Request ke server ya..?</h1>
    </div>
    `)
})

// database card
app.get('/api/body', (req, res) => {
    // Create Object destruction
    const { id, totLike, like, favorite, basket, share, image, nameM, hargaM, txtHargaNormal, hargaNormal, rate, ketRate, stock, btnView, btnBuy } = req.body
    res.json({
        id: id,
        totLike: totLike,
        like: like,
        favorite: favorite,
        basket: basket,
        share: share,
        image: image,
        nameM: nameM,
        hargaM: hargaM,
        txtHargaNormal: txtHargaNormal,
        hargaNormal: hargaNormal,
        rate: rate,
        ketRate: ketRate,
        stock: stock,
        btnView: btnView,
        btnBuy: btnBuy
    })
})

// Jalankan Servernya
app.listen(port, () => {
    console.log('listen port 4000')
})