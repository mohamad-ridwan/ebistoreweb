import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiMenu = createContext()

const ApiMenuProvider = ({ children }) => {

    const [getDataMenu, setGetDataMenu] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:6235/v10/menu/getmenu')
            .then(res => {
                const respon = res.data
                setGetDataMenu(respon.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ApiMenu.Provider value={[getDataMenu, setGetDataMenu]}>
            {children}
        </ApiMenu.Provider>
    )
}

export default ApiMenuProvider