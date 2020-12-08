import React from 'react'
import Axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const ApiSemuaHargaContext = createContext()

const ApiSemuaHargaProvider = ({ children }) => {

    const [getSemuaHarga, setGetSemuaHarga] = useState()

    useEffect(() => {
        Axios.get('http://localhost:6235/v8/makaroni/getall?page=7')
            .then(res => {
                const respon = res.data
                setGetSemuaHarga(respon.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ApiSemuaHargaContext.Provider value={[getSemuaHarga, setGetSemuaHarga]}>
            {children}
        </ApiSemuaHargaContext.Provider>
    )
}

export default ApiSemuaHargaProvider