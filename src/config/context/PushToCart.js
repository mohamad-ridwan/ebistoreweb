import React from 'react'
import { createContext, useEffect, useState } from "react";
import API from '../../service';
import { cloudFirestore } from "../firebase";

export const PustToCartContext = createContext()

const PustToCartProvider = ({ children }) => {

    const [dataCart, setDataCart] = useState([])

    const getCart = async () => {
        const promise = await new Promise((resolve, reject) => {
            API.APIFirebaseGetKeranjang()
                .then((res) => {
                    if (res) {
                        setTimeout(() => {
                            setDataCart(res)
                        }, 1000)
                        resolve(dataCart)
                    }
                })
        })

        return promise
    }

    const postCart = async (id, data) => {
        const promise = await new Promise((resolve, reject) => {
            const userId = JSON.parse(localStorage.getItem('userData'))
            cloudFirestore.collection(`${userId.uid}`).doc(`${id}`)
                .set({ data: data, userId: userId.uid })
            if (reject(console.log('terjadi kesalahan server! \nbad request : 500'))) {
                return reject()
            } else if (!reject() && resolve(data)) {
                return resolve(data)
            }
        })

        return promise
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <PustToCartContext.Provider value={[dataCart, setDataCart, postCart, getCart]}>
            {children}
        </PustToCartContext.Provider>
    )
}

export default PustToCartProvider