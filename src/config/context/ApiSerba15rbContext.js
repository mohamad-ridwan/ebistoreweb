import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiSerba15rbContext = createContext()

const ApiSerba15rbProvider = ({ children }) => {

    const [getSerba15rb, setGetSerba15rb] = useState()

    useEffect(() => {
        Axios.get('http://localhost:6235/v8/makaroni/getall?page=1')
            .then(res => {
                const respon = res.data
                setGetSerba15rb(respon.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ApiSerba15rbContext.Provider value={[getSerba15rb, setGetSerba15rb]}>
            {children}
        </ApiSerba15rbContext.Provider>
    )
}

export default ApiSerba15rbProvider