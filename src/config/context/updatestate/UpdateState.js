import React, { createContext, useState } from 'react'

export const UpdateStateContext = createContext()

const UpdateStateProvider = ({ children }) => {

    const [update, setUpdate] = useState('')

    return (
        <UpdateStateContext.Provider value={[update, setUpdate]}>
            {children}
        </UpdateStateContext.Provider>
    )
}

export default UpdateStateProvider