import { cloudFirestore } from "../../config/firebase"

export const GetDetailProduct = async (path, id) => {
    const promise = await new Promise((resolve, reject) => {
        cloudFirestore.collection(`${path}`).doc(`${id}`).get()
            .then((doc) => {
                if (doc.exists) {
                    resolve(doc.data())
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return promise
}