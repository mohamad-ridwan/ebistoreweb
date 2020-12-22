import React, { createContext, useEffect, useState } from 'react'
import { database } from '../../firebase'
import firebase from 'firebase/app';

export const PostNomerUserContext = createContext()

const PostNomerUserProvider = ({ children }) => {

    const [getUser, setGetUser] = useState({
        uid: ''
    })

    const postNomer = (data) => {
        const id = getUser.uid
        database.ref('nomeruser/' + id).set({
            phoneUser: data.phoneUser
        })
    }

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const uid = user.uid

                setGetUser({
                    uid: uid
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
        <PostNomerUserContext.Provider value={[postNomer]}>
            {children}
        </PostNomerUserContext.Provider>
    )
}

export default PostNomerUserProvider