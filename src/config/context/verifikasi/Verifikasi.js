import React, { createContext, useState } from 'react'

export const VerifikasiContext = createContext()

const VerifikasiProvider = ({ children }) => {

    const [verifikasi, setVerifikasi] = useState('')


    return (
        <VerifikasiContext.Provider value={[verifikasi, setVerifikasi]}>
            {children}
        </VerifikasiContext.Provider>
    )
}

export default VerifikasiProvider