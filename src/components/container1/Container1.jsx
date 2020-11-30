import React from 'react'
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import PageNotifikasi from '../pages/pagenotifikasi/PageNotifikasi';
import PageFavorit from '../pages/pagefavorit/PageFavorit';
import HelmetPageFavorit from '../pages/pagefavorit/helmetpagefavorit/HelmetPageFavorit';
import PageKeranjang from '../pages/pagekeranjang/PageKeranjang';
import HelmetPageKeranjang from '../pages/pagekeranjang/helmetpagekeranjang/HelmetPageKeranjang';
import Navbar from '../navbar/Navbar';
import NavBottom from '../navbottom/NavBottom';
import Media from 'react-media';
import HelmetPageBeranda from '../pages/pageberanda/helmetpageberanda/HelmetPageBeranda';
import PageBeranda from '../pages/pageberanda/PageBeranda';
import HelmetPageNotifikasi from '../pages/pagenotifikasi/helmetpagenotifikasi/HelmetPageNotifikasi';
import BtnNotifPromo from '../btnnotifpromo/BtnNotifPromo';
import PageProfil from '../pages/pageprofil/PageProfil';
import HelmetPageProfil from '../pages/pageprofil/helmetpageprofil/HelmetPageProfil';
import PageAlamat from '../pages/pagealamat/PageAlamat';
import HelmetPageAlamat from '../pages/pagealamat/helmetpagealamat/HelmetPageAlamat';
import SemuaProduk from '../pages/semuaproduk/SemuaProduk';
import HelmetSemuaProduk from '../pages/semuaproduk/helmetsemuaproduk/HelmetSemuaProduk';
import DetailProduk from '../pages/detailproduk/DetailProduk';
import HelmetDetailProduk from '../pages/detailproduk/helmetdetailproduk/HelmetDetailProduk';
import HelmetTransaksi from '../pages/transaksi/helmettransaksi/HelmetTransaksi';
import Transaksi from '../pages/transaksi/Transaksi';
import WindowScroll from '../../componentcard/windowscroll/WindowScroll';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const Container1 = () => {
    return (
        <>
            {/* Max-width 400px */}
            <Media query="(max-width: 450px)" render={() => (
                <>
                    <Router>
                        <WindowScroll>
                        <Switch>
                            {/* Transaksi */}
                            <Route path='/transaksi/:id'>
                                <Transaksi/>

                                <HelmetTransaksi/>
                            </Route>
                            {/* end Transaksi */}

                            {/* detail produk */}
                            <Route path='/detail-produk/:id'>
                                <DetailProduk/>

                                <HelmetDetailProduk/>
                            </Route>
                            {/* end detail produk */}

                            {/* page semua produk */}
                            <Route path='/semuaproduk'>
                                <SemuaProduk/>

                                <HelmetSemuaProduk/>
                            </Route>
                            {/* end page semua produk */}

                            {/* page alamat*/}
                            <Route path='/pagealamat'>
                                <PageAlamat/>

                                <HelmetPageAlamat/>
                            </Route>
                            {/* end page alamat */}

                            {/* Page Profil */}
                            <Route path='/pageprofil'>
                                <PageProfil/>

                                <HelmetPageProfil/>                
                            </Route>
                            {/* END Page Profil */}

                            {/* For Page Notifikasi */}
                            <Route path='/pagenotifikasi'>
                                <PageNotifikasi />

                                <HelmetPageNotifikasi />
                            </Route>
                            {/* END For Page Notifikasi */}

                            {/* For Page Favorit */}
                            <Route path='/pagefavorit'>
                                <PageFavorit />

                                <HelmetPageFavorit />
                            </Route>
                            {/* END For Page Favorit */}

                            {/* For Page Keranjang */}
                            <Route path='/pagekeranjang/'>
                                <PageKeranjang />

                                <HelmetPageKeranjang />
                            </Route>
                            {/* END For Page Keranjang */}

                            {/* For Register */}
                            <Route path='/register'>
                                <Register/>
                            </Route>
                            {/* END For Register */}

                            {/* For Home */}
                            <Route path='/'>
                                {/* Navbar */}
                                {/* <Navbar /> */}
                                {/* END Navbar */}

                                {/* Page Beranda */}
                                <PageBeranda />
                                {/* END Page Beranda */}

                                {/* <BtnNotifPromo /> */}

                                {/* Helmet Page Beranda */}
                                <HelmetPageBeranda />
                                {/* END Helmet Page Beranda */}
                            </Route>
                            {/* END For Home */}

                            {/* For Page Home */}
                            <Route path='/login'>
                                <Login/>
                            </Route>
                            {/* END For Page Home */}

                        </Switch>
                        </WindowScroll>

                        {/* <NavBottom /> */}
                    </Router>
                </>
            )} />
            {/* END Max-width 400px */}
        </>
    )
}

export default Container1