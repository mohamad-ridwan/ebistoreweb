import Axios from "axios";
import { RootPath } from "./Config";

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${RootPath}/${path}`)
            .then(result => {
                resolve(result.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Get