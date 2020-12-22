import Axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ChangeNumberPhone } from './ChangeNumberPhone'

export const GetNumberPhone = createContext()

const GetNumberPhoneProvider = ({ children }) => {

    const [getDataHp, setGetDataHp] = useState()

    const [update, setUpdate] = useState(false)


    const handleUpdate = (data) => {
        setUpdate(true)
        setGetDataHp(data)
        console.log('hasil:', data)
    }

    // useEffect(() => {
    //     Axios.get('http://localhost:6235/v11/nomerhpuser/getnomer')
    //         .then(res => {
    //             const respon = res.data
    //             setGetDataHp(respon.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }, [])

    return (
        <GetNumberPhone.Provider value={[getDataHp, setGetDataHp, handleUpdate, update, setUpdate]}>
            {children}
        </GetNumberPhone.Provider>
    )
}

export default GetNumberPhoneProvider