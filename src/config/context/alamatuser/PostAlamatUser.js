import React, { createContext, useEffect, useState } from "react";
import firebase, { database } from '../../firebase';

export const PostAlamatUserContext = createContext()

const PostAlamatUserProvider = ({ children }) => {

    const [dataUser, setDataUser] = useState({
        uid: '',
    })

    // POST
    const addDataFirebase = (data) => {
        const userId = dataUser.uid
        database.ref('alamatuser/' + userId).set({
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
        <PostAlamatUserContext.Provider value={[dataUser, setDataUser, addDataFirebase]}>
            {children}
        </PostAlamatUserContext.Provider>
    )
}

export default PostAlamatUserProvider