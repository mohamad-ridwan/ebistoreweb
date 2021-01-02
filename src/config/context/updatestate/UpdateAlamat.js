import React, { createContext, useState } from 'react'

export const UpdateAlamatContext = createContext()

const UpdateAlamatProvider = ({ children }) => {

    const [updateAlamat, setUpdateAlamat] = useState({
        alamat: '',
        kota: '',
        kodePos: '',
        namaPenerima: ''
    })

    return (
        <UpdateAlamatContext.Provider value={[updateAlamat, setUpdateAlamat]}>
            {children}
        </UpdateAlamatContext.Provider>
    )
}

export default UpdateAlamatProvider