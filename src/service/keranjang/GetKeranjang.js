import { cloudFirestore } from "../../config/firebase"

export const GetKeranjang = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        const userId = JSON.parse(localStorage.getItem('userData'))
        if (userId === true) {
            cloudFirestore.collection(`${userId.uid}`)
                .onSnapshot((querySnapshot) => {
                    const data = []
                    querySnapshot.forEach((doc) => {
                        Object.keys(doc.data()).map(key => {
                            data.unshift({
                                id: doc.id,
                                data: doc.data()
                            })
                        })
                    })
                    resolve(data)
                })
        }

    })

    return promise
}