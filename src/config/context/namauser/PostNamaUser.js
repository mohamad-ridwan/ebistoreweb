import React, { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/app';
import { database } from '../../firebase';

export const PostNamaUserContext = createContext()

const PostNamaUserProvider = ({ children }) => {

    const [dataNama, setDataNama] = useState({
        uid: ''
    })

    const PostNamaUser = (data) => {
        const userId = dataNama.uid
        database.ref('namauser/' + userId).set({
            username: data.username
        })
    }

    const getUserLoginFromFirebase = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userID = user.uid

                setDataNama({
                    uid: userID
                })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getUserLoginFromFirebase();
    }, [])

    return (
        <PostNamaUserContext.Provider value={[PostNamaUser]}>
            {children}
        </PostNamaUserContext.Provider>
    )
}

export default PostNamaUserProvider