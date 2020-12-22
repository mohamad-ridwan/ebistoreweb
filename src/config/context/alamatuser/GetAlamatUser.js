import React, { createContext, useEffect, useState } from 'react'
import firebase, { database } from '../../firebase';

export const GetAlamatUserContext = createContext()

const GetAlamatUserProvider = ({ children }) => {

    let [alamatUser, setAlamatUser] = useState({})

    // GET
    const getDataFirebase = () => {
        const userId = JSON.parse(localStorage.getItem('userData'))
        const UrlAPI = database.ref('alamatuser/' + userId.uid);
        return new Promise((resolve, reject) => {
            UrlAPI.on('value', (snapshot) => {
                setAlamatUser(snapshot.val())
                resolve(snapshot.val(), snapshot.key)
            })
        })
    }

    useEffect(() => {
        getDataFirebase();
    }, [])


    return (
        <GetAlamatUserContext.Provider value={[alamatUser, setAlamatUser, getDataFirebase,]}>
            {children}
        </GetAlamatUserContext.Provider>

    )
}

export default GetAlamatUserProvider