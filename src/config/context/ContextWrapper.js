import React from 'react'
import ApiSemuaProdukProvider from './ApiSemuaProduk'
import ChangeNumberPhoneProvider from './ChangeNumberPhone'
import GetUserLoginProvider from './GetUserLogin'
import HelmetProvider from './Helmet'
import PushToCartProvider from './PushToCart'
import UpdateAlamatProvider from './updatestate/UpdateAlamat'
import UpdateStateProvider from './updatestate/UpdateState'


const ContextWrapper = ({ children }) => {
    return (
        <UpdateAlamatProvider>
            <PushToCartProvider>
                <HelmetProvider>
                    <ChangeNumberPhoneProvider>
                        <UpdateStateProvider>
                            <ApiSemuaProdukProvider>
                                <GetUserLoginProvider>
                                    {children}
                                </GetUserLoginProvider>
                            </ApiSemuaProdukProvider>
                        </UpdateStateProvider>
                    </ChangeNumberPhoneProvider>
                </HelmetProvider>
            </PushToCartProvider>
        </UpdateAlamatProvider>
    )
}

export default (ContextWrapper)