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


const API = {
    APISemuaHarga,
    APISerba5rb,
    APISerba10rb,
    APISerba15rb,
    APIPostAlamat,
    APIDetailProduk
}

export default API