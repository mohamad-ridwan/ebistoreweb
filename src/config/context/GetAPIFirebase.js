import React, { createContext, useEffect, useState } from 'react'
import firebase, { database } from '../firebase';

export const GetAPIFirebaseContext = createContext()

const GetAPIFirebaseProvider = ({ children }) => {

    let [notes, setNotes] = useState({
        newData: [],
        uid: ''
    })

    // GET
    const getDataFirebase = () => {
        const userId = notes.uid
        const UrlAPI = database.ref('alamatuser/' + userId);
        return new Promise((resolve, reject) => {
            UrlAPI.on('value', (snapshot) => {
                const data = notes.newData;
                Object.keys(snapshot.val()).map(key => {
                    data.push({
                        id: key,
                        data: snapshot.val()[key]
                    })
                })
                setNotes({
                    newData: data
                })
                resolve(snapshot.val())
            });
        })
    }

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userID = user.uid

                setNotes({
                    uid: userID
                })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getUserLogin();
        getDataFirebase();
    }, [])


    return (
        <GetAPIFirebaseContext.Provider value={[notes, setNotes, getDataFirebase,]}>
            {children}
        </GetAPIFirebaseContext.Provider>

    )
}

export default GetAPIFirebaseProvider