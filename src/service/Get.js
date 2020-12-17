import Axios from "axios";
import { RootPath } from "./Config";

const Get = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            Axios.get(`${RootPath}/${path}`)
                .then(result => {
                    resolve(result.data);
                }, (err) => {
                    reject(err);
                })
        }, 50);
    })
    return promise;
}

export default Get