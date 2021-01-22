import { database } from "../../../config/firebase"

const PostAPIAlamat = async (path, data, userId) => {
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            database.ref(`${path}` + userId).set({
                alamat: data.alamat,
                kota: data.kota,
                kodePos: data.kodePos,
                nomerHp: data.nomerHp,
                namaPenerima: data.namaPenerima
            })
            resolve(data)
            console.log('hasil : ', data)
        })
    })

    return promise
}

export default PostAPIAlamat