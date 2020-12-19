import { database } from "../config/firebase"

export const GetFirebase = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        const urlNomerUser = database.ref(`${path}`)
        urlNomerUser.on('value', (snapshot) => {
            resolve(snapshot.val())
        })
    })

    return promise
}