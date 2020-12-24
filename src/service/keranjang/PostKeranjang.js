import { cloudFirestore } from "../../config/firebase"

export const PostKeranjang = async (path, data, id) => {
    const promise = await new Promise((resolve, reject) => {
        cloudFirestore.collection(`${path}`).doc(`${id}`)
            .set({ data })
        resolve(data)
        // reject(console.log('terjadi kesalahan : (error code : 404)',))
    })

    return promise
}