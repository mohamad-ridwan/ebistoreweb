import React from 'react'
import { withRouter } from 'react-router-dom'
import ApiMenuProvider from './ApiMenu'
import ApiSemuaProdukProvider from './ApiSemuaProduk'
import ChangeNumberPhoneProvider from './ChangeNumberPhone'
import GetNumberPhoneProvider from './GetNumberPhone'
import GetUserLoginProvider from './GetUserLogin.jsx'
import HelmetProvider from './Helmet'
import PushToCartProvider from './PushToCart'


const ContextWrapper = ({ children }) => {
    return (
        <PushToCartProvider>
            <HelmetProvider>
                <GetNumberPhoneProvider>
                    <ChangeNumberPhoneProvider>
                        <ApiMenuProvider>
                            <ApiSemuaProdukProvider>
                                <GetUserLoginProvider>
                                    {children}
                                </GetUserLoginProvider>
                            </ApiSemuaProdukProvider>
                        </ApiMenuProvider>
                    </ChangeNumberPhoneProvider>
                </GetNumberPhoneProvider>
            </HelmetProvider>
        </PushToCartProvider>
    )
}

export default (ContextWrapper)