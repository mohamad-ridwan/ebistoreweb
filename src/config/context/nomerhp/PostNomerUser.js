import React, { createContext, useEffect, useState } from 'react'
import { database } from '../../firebase'
import firebase from 'firebase/app';

export const PostNomerUserContext = createContext()

const PostNomerUserProvider = ({ children }) => {

    const [getUser, setGetUser] = useState({
        uid: ''
    })

    const postNomer = (data) => {
        const userId = getUser.uid
        database.ref('nomeruser/' + userId).set({
            phoneUser: data.phoneUser
        })
    }

    const getUserFromFirebase = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid

                setGetUser({
                    uid: userId
                })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getUserFromFirebase();
    }, [])

    return (
        <PostNomerUserContext.Provider value={[postNomer]}>
            {children}
        </PostNomerUserContext.Provider>
    )
}

export default PostNomerUserProvider