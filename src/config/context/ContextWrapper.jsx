import React from 'react'
import ApiSemuaHargaProvider from './ApiSemuaHargaContext'
import ApiSerba10rbProvider from './ApiSerba10rbContext'
import ApiSerba15rbProvider from './ApiSerba15rbContext'
import ApiSerba5rbProvider from './ApiSerba5rbContext'
import GetUserLoginProvider from './GetUserLogin.jsx'

const ContextWrapper = ({ children }) => {
    return (
        <GetUserLoginProvider>
            <ApiSerba15rbProvider>
                <ApiSerba10rbProvider>
                    <ApiSerba5rbProvider>
                        <ApiSemuaHargaProvider>
                            {children}
                        </ApiSemuaHargaProvider>
                    </ApiSerba5rbProvider>
                </ApiSerba10rbProvider>
            </ApiSerba15rbProvider>
        </GetUserLoginProvider>
    )
}

export default (ContextWrapper)