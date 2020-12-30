import React, { createContext, useEffect, useState } from 'react'
import firebase, { database } from '../../firebase';

export const GetAlamatUserContext = createContext()

const GetAlamatUserProvider = ({ children }) => {

    const [alamatUser, setAlamatUser] = useState([])

    // GET
    const getDataFirebase = () => {
        const userId = JSON.parse(localStorage.getItem('userData'))
        const UrlAPI = database.ref('alamatuser/' + userId.uid);
        return new Promise((resolve, reject) => {
            const data = alamatUser
            UrlAPI.on('value', (snapshot) => {
                Object.keys(snapshot.val()).map(key => {
                    data.push({
                        id: snapshot.key,
                        data: snapshot.val()
                    })
                })
                setAlamatUser(data)
                resolve(alamatUser)
            })
        })
    }

    // useEffect(() => {
    //     getDataFirebase();
    // }, [])


    return (
        <GetAlamatUserContext.Provider value={[alamatUser, setAlamatUser, getDataFirebase,]}>
            {children}
        </GetAlamatUserContext.Provider>

    )
}

export default GetAlamatUserProvider