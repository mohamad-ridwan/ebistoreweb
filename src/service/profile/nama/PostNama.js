import { database } from "../../../config/firebase"

const PostNamaUser = async (path, data) => {
    const userId = JSON.parse(localStorage.getItem('userData'))
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            database.ref(`namauser/` + userId.uid)
                .set({
                    username: data.username
                })
        }, 0)
    })

    return promise
}

export default PostNamaUser