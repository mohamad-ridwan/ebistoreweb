import React from 'react'
import { withRouter } from 'react-router-dom'
import ApiMenuProvider from './ApiMenu'
import ApiSemuaProdukProvider from './ApiSemuaProduk'
import ChangeNumberPhoneProvider from './ChangeNumberPhone'
import DbFirebaseProvider from './DbFirebase'
import GetAPIFirebaseProvider from './GetAPIFirebase'
import GetNumberPhoneProvider from './GetNumberPhone'
import GetUserLoginProvider from './GetUserLogin.jsx'
import HelmetProvider from './Helmet'
import GetNamaUserProvider from './namauser/GetNamaUser'
import PostNamaUserProvider from './namauser/PostNamaUser'
import GetNomerUserProvider from './nomerhp/GetNomerUser'
import PostNomerUserProvider from './nomerhp/PostNomerUser'
import PushToCartProvider from './PushToCart'


const ContextWrapper = ({ children }) => {
    return (
        <GetNamaUserProvider>
            <PostNamaUserProvider>
                <GetNomerUserProvider>
                    <PostNomerUserProvider>
                        <GetAPIFirebaseProvider>
                            <DbFirebaseProvider>
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
                            </DbFirebaseProvider>
                        </GetAPIFirebaseProvider>
                    </PostNomerUserProvider>
                </GetNomerUserProvider>
            </PostNamaUserProvider>
        </GetNamaUserProvider>
    )
}

export default (ContextWrapper)