import React from 'react'
import { withRouter } from 'react-router-dom'
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
import UpdateStateProvider from './updatestate/UpdateState'


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
                                                <UpdateStateProvider>
                                                    <ApiSemuaProdukProvider>
                                                        <GetUserLoginProvider>
                                                            {children}
                                                        </GetUserLoginProvider>
                                                    </ApiSemuaProdukProvider>
                                                </UpdateStateProvider>
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