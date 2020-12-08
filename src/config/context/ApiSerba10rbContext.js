import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiSerba10rbContext = createContext()

const ApiSerba10rbProvider = ({ children }) => {

    const [getSerba10rb, setGetSerba10rb] = useState()

    useEffect(() => {
        Axios.get('http://localhost:6235/v8/makaroni/getall?page=3')
            .then(res => {
                const respon = res.data
                setGetSerba10rb(respon.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ApiSerba10rbContext.Provider value={[getSerba10rb, setGetSerba10rb]}>
            {children}
        </ApiSerba10rbContext.Provider>
    )
}

export default ApiSerba10rbProvider