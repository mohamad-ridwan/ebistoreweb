import React from 'react'
import { withRouter } from 'react-router-dom'
import ApiMenuProvider from './ApiMenu'
import ApiSemuaProdukProvider from './ApiSemuaProduk'
import ChangeNumberPhoneProvider from './ChangeNumberPhone'
import GetNumberPhoneProvider from './GetNumberPhone'
import GetUserLoginProvider from './GetUserLogin.jsx'
import HelmetProvider from './Helmet'
import GetNamaUserProvider from './namauser/GetNamaUser'
import PostNamaUserProvider from './namauser/PostNamaUser'
import GetNomerUserProvider from './nomerhp/GetNomerUser'
import PostNomerUserProvider from './nomerhp/PostNomerUser'
import PostAlamatUserProvider from './alamatuser/PostAlamatUser'
import PushToCartProvider from './PushToCart'
import GetAlamatUserProvider from './alamatuser/GetAlamatUser'


const ContextWrapper = ({ children }) => {
    return (
        <GetNamaUserProvider>
            <PostNamaUserProvider>
                <GetNomerUserProvider>
                    <PostNomerUserProvider>
                        <GetAlamatUserProvider>
                            <PostAlamatUserProvider>
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
                            </PostAlamatUserProvider>
                        </GetAlamatUserProvider>
                    </PostNomerUserProvider>
                </GetNomerUserProvider>
            </PostNamaUserProvider>
        </GetNamaUserProvider>
    )
}

export default (ContextWrapper)