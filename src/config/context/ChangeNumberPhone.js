import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ChangeNumberPhone = createContext()

const ChangeNumberPhoneProvider = ({ children }) => {

    const [getChangeTxt, setGetChangeTxt] = useState({
        data: {
            phoneUser: ''
        }
    })

    return (
        <ChangeNumberPhone.Provider value={[getChangeTxt, setGetChangeTxt]}>
            {children}
        </ChangeNumberPhone.Provider>
    )
}

export default ChangeNumberPhoneProvider