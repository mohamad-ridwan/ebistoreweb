import Axios from "axios"
import { RootPath } from "./Config"

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${RootPath}/${path}`,
            data)
            .then(res => {
                resolve(res)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

export default Post