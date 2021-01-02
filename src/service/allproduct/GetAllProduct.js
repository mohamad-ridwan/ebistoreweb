import { cloudFirestore } from "../../config/firebase"

export const GetAllProduct = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        cloudFirestore.collection(`${path}`)
            .get()
            .then((querySnapshot) => {
                const data = []
                querySnapshot.forEach((doc) => {
                    Object.keys(querySnapshot).map(key => {
                        data.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    })
                    resolve(data)
                })
            })
            .catch((err) => {
                reject(err)
            })
    })
    return promise
}