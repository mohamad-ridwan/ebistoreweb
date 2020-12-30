import { database } from "../../../config/firebase"

const PostAPIAlamat = async (path, data, userId) => {
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            database.ref(`${path}` + userId).set({
                alamat: data.alamat,
                kota: data.kota,
                kodePos: data.kodePos,
                namaPenerima: data.namaPenerima
            })
        }, 3000)
    })

    return promise
}

export default PostAPIAlamat