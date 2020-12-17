import Get from "./Get"
import Post from "./Post"

// POST
const APIPostAlamat = (data) => Post('v5/dataalamat/postalamat', data)

// GET
// FOR Page Beranda
const APISemuaHarga = () => Get('v8/makaroni/getall?page=1')
const APISerba5rb = () => Get('v8/makaroni/getall?page=2')
const APISerba10rb = () => Get('v8/makaroni/getall?page=3')
const APISerba15rb = () => Get('v8/makaroni/getall?page=4')
// FOR Detail Produk
const APIDetailProduk = (_id) => Get(`v8/makaroni/getall/${_id}`)
// For API Menu Beranda
const APIMenuSemuaHarga = () => Get('v10/menu/getmenu/5fd28b78e40a1a44d0c89c5d')
const APIMenuSerba5rb = () => Get('v10/menu/getmenu/5fd28b96e40a1a44d0c89c5e')
const APIMenuSerba10rb = () => Get('v10/menu/getmenu/5fd28bafe40a1a44d0c89c5f')
const APIMenuSerba15rb = () => Get('v10/menu/getmenu/5fd28bbde40a1a44d0c89c60')


const API = {
    APISemuaHarga,
    APISerba5rb,
    APISerba10rb,
    APISerba15rb,
    APIPostAlamat,
    APIDetailProduk,
    APIMenuSemuaHarga,
    APIMenuSerba5rb,
    APIMenuSerba10rb,
    APIMenuSerba15rb
}

export default API