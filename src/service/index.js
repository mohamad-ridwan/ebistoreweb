import Get from "./Get"
import { GetAllProduct } from "./allproduct/GetAllProduct"
import { GetFirebase } from "./GetFirebase"
import Post from "./Post"
import { GetDetailProduct } from "./detailproduct/GetDetailProduct"

// POST
const APIPostAlamat = (data) => Post('v5/dataalamat/postalamat', data)

// GET
// FOR BERANDA
const APIFirebase = (userId) => GetFirebase('nomeruser/', userId)
// For Menu (Realtime DB Firebase)
const APIFirebaseMenuSemuaHarga = () => GetFirebase('menu/semuaharga')
const APIFirebaseMenuLimaRibu = () => GetFirebase('menu/limaribu')
const APIFirebaseMenuSepuluhRibu = () => GetFirebase('menu/sepuluhribu')
const APIFirebaseMenuLimaBelasRibu = () => GetFirebase(`menu/limabelasribu`)
// For All Product Firebase (cloud firestore)
const APIFirebaseAllProduct = () => GetAllProduct(`allproduct/`)
const APIFirebaseSerbaLimaRibu = () => GetAllProduct('limaribu/')
const APIFirebaseSerbaSepuluhRibu = () => GetAllProduct('sepuluhribu/')
const APIFirebaseSerbaLimaBelasRibu = () => GetAllProduct('limabelasribu/')
// For DetailProduct Firebase (cloud firestore)
const APIFirebaseDetailProduct = (id) => GetDetailProduct(`allproduct/`, id)
const APIFirebaseDPLimaRibu = (id) => GetDetailProduct('limaribu/', id)
const APIFirebaseDPSepuluhRibu = (id) => GetDetailProduct('sepuluhribu/', id)
const APIFirebaseDPLimaBelasRibu = (id) => GetDetailProduct('limabelasribu/', id)
// For Page ALL Product (cloud firestore)
const APIFirebasePageAllProduct = (id) => GetAllProduct(`${id}`)
// For Menu Page ALL Product (cloud firestore)
const APIFirebaseMenuAllProduct = () => GetAllProduct(`menu/`)


const API = {
    APIPostAlamat,
    APIFirebase,
    APIFirebaseMenuSemuaHarga,
    APIFirebaseMenuLimaRibu,
    APIFirebaseMenuSepuluhRibu,
    APIFirebaseMenuLimaBelasRibu,
    APIFirebaseAllProduct,
    APIFirebaseDetailProduct,
    APIFirebaseSerbaLimaRibu,
    APIFirebaseDPLimaRibu,
    APIFirebaseSerbaSepuluhRibu,
    APIFirebaseSerbaLimaBelasRibu,
    APIFirebaseDPSepuluhRibu,
    APIFirebaseDPLimaBelasRibu,
    APIFirebasePageAllProduct,
    APIFirebaseMenuAllProduct
}

export default API