import { database } from "../../../config/firebase"

const PostNamaUser = async (data) => {
    const userId = JSON.parse(localStorage.getItem('userData'))
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            database.ref(`namauser/` + userId.uid)
                .set(data)
        }, 0)
    })

    return promise
}

export default PostNamaUser