import { cloudFirestore } from "../../config/firebase"

export const GetKeranjang = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        cloudFirestore.collection(`${path}`)
            .get()
            .then((querySnapshot) => {
                const data = []
                querySnapshot.forEach((doc) => {
                    Object.keys(doc.data()).map(key => {
                        data.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    })
                    resolve(data)
                })
            })
    })

    return promise
}