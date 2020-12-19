import React, { createContext, useEffect, useState } from 'react'
import { database } from '../../firebase';
import firebase from 'firebase/app';

export const GetNomerUserContext = createContext()

const GetNomerUserProvider = ({ children }) => {

    const [dataNomer, setDataNomer] = useState({
        uid: '',
        data: []
    })

    const getNomer = () => {
        const userId = dataNomer.uid
        return new Promise((resolve, reject) => {
            const urlNomerUser = database.ref('nomeruser/' + userId);
            urlNomerUser.on('value', (snapshot) => {
                const data = dataNomer.data
                Object.keys(snapshot.val()).map(key => {
                    data.push({
                        id: key,
                        data: snapshot.val()[key]
                    })
                })
                setDataNomer({
                    data: data
                })
                resolve(snapshot.val())
            })
        })
    }

    const getUserFirebase = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid

                setDataNomer({
                    uid: userId
                })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getUserFirebase()
        getNomer();
    }, [])

    return (
        <GetNomerUserContext.Provider value={[dataNomer, setDataNomer]}>
            {children}
        </GetNomerUserContext.Provider>
    )
}

export default GetNomerUserProvider