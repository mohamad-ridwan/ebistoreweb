import React, { createContext, useEffect, useState } from 'react'
import { database } from '../../firebase'
import firebase from 'firebase/app';

export const GetNamaUserContext = createContext()

const GetNamaUserProvider = ({ children }) => {

    const [dataNama, setDataNama] = useState({
        uid: '',
        data: [],
    })

    const GetNamaUser = async () => {
        const userId = JSON.parse(localStorage.getItem('userData'))
        const promise = await new Promise((resolve, reject) => {
            const UrlAPI = database.ref('namauser/' + userId.uid)
            UrlAPI.on('value', (snapshot) => {
                const data = dataNama.data
                Object.keys(snapshot.val()).map(key => {
                    data.push({
                        id: userId.uid,
                        data: snapshot.val()[key]
                    })
                })
                setDataNama({
                    data: data
                })
                resolve(snapshot.val())
            })
        })
        return promise
    }

    useEffect(() => {
        GetNamaUser();
    }, [])

    return (
        <GetNamaUserContext.Provider value={[dataNama]}>
            {children}
        </GetNamaUserContext.Provider>
    )
}

export default GetNamaUserProvider