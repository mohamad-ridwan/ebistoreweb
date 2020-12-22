import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { matchPath, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import { createBrowserHistory } from "history";


export const ApiSemuaProduk = createContext()

const ApiSemuaProdukProvider = ({ children }) => {

    const [getApi, setGetApi] = useState([])

    // const location = useLocation()

    // const histori = createBrowserHistory()
    // const id = histori.location
    // console.log(id)

    // const search = window.location.search
    // const params = new URLSearchParams(search)
    // const foo = params.get('bar')

    // const search = useLocation().search
    // const product = new URLSearchParams(search).get('product')
    // console.log(product)

    // useEffect(() => {
    //     Axios.get(`http://localhost:6235/v8/makaroni/getall/`)
    //         .then(res => {
    //             const respon = res.data
    //             setGetApi(respon.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    return (
        <ApiSemuaProduk.Provider value={[getApi, setGetApi]}>
            {children}
        </ApiSemuaProduk.Provider>
    )
}

export default ApiSemuaProdukProvider