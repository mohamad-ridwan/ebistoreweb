import { GetAllProduct } from "./allproduct/GetAllProduct"
import { GetFirebase } from "./GetFirebase"
import Post from "./Post"
import { GetDetailProduct } from "./detailproduct/GetDetailProduct"
import { PostKeranjang } from "./keranjang/PostKeranjang"
import { GetKeranjang } from "./keranjang/GetKeranjang"
import { DeleteKeranjang } from "./keranjang/DeleteKeranjang"
import PostAPIAlamat from "./profile/alamat/PostAlamat"
import GetAllAPIProfile from "./profile/GetAllAPIProfile"
import PostNamaUser from "./profile/nama/PostNama"
import PostNomerUser from "./profile/nomerhp/PostNomer"

const user = JSON.parse(localStorage.getItem('userData'))

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
const APIFirebaseAllProduct = (endpoint) => GetAllProduct(`${endpoint}/`)
const APIFirebaseSerbaLimaRibu = () => GetAllProduct('limaribu/')
const APIFirebaseSerbaSepuluhRibu = () => GetAllProduct('sepuluhribu/')
const APIFirebaseSerbaLimaBelasRibu = () => GetAllProduct('limabelasribu/')
// For DetailProduct Firebase (cloud firestore)
const APIFirebaseDetailProduct = (endpoint, id) => GetDetailProduct(`${endpoint}/`, id)
const APIFirebaseDPLimaRibu = (id) => GetDetailProduct('limaribu/', id)
const APIFirebaseDPSepuluhRibu = (id) => GetDetailProduct('sepuluhribu/', id)
const APIFirebaseDPLimaBelasRibu = (id) => GetDetailProduct('limabelasribu/', id)
// For Page ALL Product (cloud firestore)
const APIFirebasePageAllProduct = (id) => GetAllProduct(`${id}`)
// For Menu Page ALL Product (cloud firestore)
const APIFirebaseMenuAllProduct = () => GetAllProduct(`menu/`)
// For Push to Keranjang
const APIFirebasePushKeranjang = (data, id) => PostKeranjang(`${user.uid}`, data, id)
const APIFirebaseGetKeranjang = () => GetKeranjang()
// For Delete Keranjang
const APIFirebaseDeleteKeranjang = (id) => DeleteKeranjang(`${user.uid}`, id)
// For API Realtime Database Firebase
// POST
const APIRealtimePostAlamat = (data) => PostAPIAlamat('alamatuser/', data, user.uid)
const APIRealtimePostNama = (data) => PostNamaUser(data)
const APIRealtimePostNomer = (data) => PostNomerUser(data)
// GET
const APIRealtimeNamaProfile = () => GetAllAPIProfile('namauser/')
const APIRealtimeNomerProfile = () => GetAllAPIProfile('nomeruser/')
const APIRealtimeAlamatProfile = () => GetAllAPIProfile('alamatuser/')

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
    APIFirebaseMenuAllProduct,
    APIFirebasePushKeranjang,
    APIFirebaseGetKeranjang,
    APIFirebaseDeleteKeranjang,
    APIRealtimePostAlamat,
    APIRealtimeNamaProfile,
    APIRealtimeNomerProfile,
    APIRealtimeAlamatProfile,
    APIRealtimePostNama,
    APIRealtimePostNomer
}

export default API