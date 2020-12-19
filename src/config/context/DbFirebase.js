import React, { createContext, useEffect, useState } from "react";
import firebase, { database } from '../firebase';

export const DbFirebaseContext = createContext()

const DbFirebaseProvider = ({ children }) => {

    const [dataUser, setDataUser] = useState({
        uid: '',
    })

    // POST
    const addDataFirebase = (data) => {
        alert('berhasil Cuk')
        database.ref('alamatuser/' + data.userId).set({
            alamat: data.alamat,
            kota: data.kota,
            kodePos: data.kodePos,
            namaPenerima: data.namaPenerima
        })
    }

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userID = user.uid

                setDataUser({
                    uid: userID
                })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getUserLogin();
    }, [])

    return (
        <DbFirebaseContext.Provider value={[dataUser, setDataUser, addDataFirebase]}>
            {children}
        </DbFirebaseContext.Provider>
    )
}

export default DbFirebaseProvider