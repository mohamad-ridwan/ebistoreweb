import Get from "./Get"
import { GetFirebase } from "./GetFirebase"
import Post from "./Post"

// POST
const APIPostAlamat = (data) => Post('v5/dataalamat/postalamat', data)

// GET
// FOR BERANDA
const APISemuaHarga = () => Get('v8/makaroni/getall?page=1')
const APISerba5rb = () => Get('v8/makaroni/getall?page=2')
const APISerba10rb = () => Get('v8/makaroni/getall?page=3')
const APISerba15rb = () => Get('v8/makaroni/getall?page=4')
const APIDetailProduk = (_id) => Get(`v8/makaroni/getall/${_id}`)
const APIMenuSemuaHarga = () => Get('v10/menu/getmenu/5fd28b78e40a1a44d0c89c5d')
const APIMenuSerba5rb = () => Get('v10/menu/getmenu/5fd28b96e40a1a44d0c89c5e')
const APIMenuSerba10rb = () => Get('v10/menu/getmenu/5fd28bafe40a1a44d0c89c5f')
const APIMenuSerba15rb = () => Get('v10/menu/getmenu/5fd28bbde40a1a44d0c89c60')
const APIFirebase = (userId) => GetFirebase('nomeruser/', userId)
const APIFirebaseSemuaHarga = () => GetFirebase('semuaharga/')
const APIFirebaseLimaRibu = () => GetFirebase('limaribu/')
const APIFirebaseSepuluhRibu = () => GetFirebase('sepuluhribu/')
const APIFirebaseLimaBelasRibu = () => GetFirebase('limabelasribu/')
// For Menu
const APIFirebaseMenuSemuaHarga = () => GetFirebase('menu/semuaharga')
const APIFirebaseMenuLimaRibu = () => GetFirebase('menu/limaribu')
const APIFirebaseMenuSepuluhRibu = () => GetFirebase('menu/sepuluhribu')
const APIFirebaseMenuLimaBelasRibu = () => GetFirebase('menu/limabelasribu')


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
    APIMenuSerba15rb,
    APIFirebase,
    APIFirebaseSemuaHarga,
    APIFirebaseLimaRibu,
    APIFirebaseSepuluhRibu,
    APIFirebaseLimaBelasRibu,
    APIFirebaseMenuSemuaHarga,
    APIFirebaseMenuLimaRibu,
    APIFirebaseMenuSepuluhRibu,
    APIFirebaseMenuLimaBelasRibu
}

export default API