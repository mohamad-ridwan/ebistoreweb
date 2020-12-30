import { database } from "../../../config/firebase"

const PostNomerUser = async (data) => {
    const userId = JSON.parse(localStorage.getItem('userData'))
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            database.ref(`nomeruser/` + userId.uid)
                .set({
                    phoneUser: data.phoneUser
                })
        }, 0)
    })

    return promise
}

export default PostNomerUser