import { database } from "../../config/firebase"

const GetAllAPIProfile = async (path) => {
    const userId = JSON.parse(localStorage.getItem('userData'))
    const promise = await new Promise((resolve, reject) => {
        database.ref(`${path}` + userId.uid)
            .on('value', (snapshot) => {
                resolve(snapshot.val())
            }, () => {
                reject(console.log('API ERROR (error code : 404)'))
            })
    })
    return promise
}

export default GetAllAPIProfile