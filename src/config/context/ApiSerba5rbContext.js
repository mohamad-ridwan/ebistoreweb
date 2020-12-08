import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiSerba5rbContext = createContext()

const ApiSerba5rbProvider = ({ children }) => {

    const [getSerba5rb, setGetSerba5rb] = useState()

    useEffect(() => {
        Axios.get('http://localhost:6235/v8/makaroni/getall?page=6')
            .then(res => {
                const respon = res.data
                setGetSerba5rb(respon.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ApiSerba5rbContext.Provider value={[getSerba5rb, setGetSerba5rb]}>
            {children}
        </ApiSerba5rbContext.Provider>
    )
}

export default ApiSerba5rbProvider