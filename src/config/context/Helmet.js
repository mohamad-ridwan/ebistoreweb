import React, { useEffect, useState } from 'react'

const { createContext } = require("react");

export const HelmetContext = createContext()

const HelmetProvider = ({ children }) => {

    const path = window.location.pathname

    return (
        <HelmetContext.Provider value={path}>
            {children}
        </HelmetContext.Provider>
    )
}

export default HelmetProvider