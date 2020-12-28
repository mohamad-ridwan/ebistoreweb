import { cloudFirestore } from "../../config/firebase"

export const DeleteKeranjang = async (path, id) => {
    const promise = await new Promise((resolve, reject) => {
        cloudFirestore.collection(`${path}`).doc(`${id}`)
            .delete()
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })

    return promise
}