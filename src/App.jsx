import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, useHistory } from 'react-router-dom';
import './App.css';
import Media from 'react-media';
import WindowScroll from './componentcard/windowscroll/WindowScroll';
import Transaksi from './components/pages/transaksi/Transaksi';
import HelmetTransaksi from './components/pages/transaksi/helmettransaksi/HelmetTransaksi';
import DetailProduk from './components/pages/detailproduk/DetailProduk';
import HelmetDetailProduk from './components/pages/detailproduk/helmetdetailproduk/HelmetDetailProduk';
import SemuaProduk from './components/pages/semuaproduk/SemuaProduk';
import HelmetSemuaProduk from './components/pages/semuaproduk/helmetsemuaproduk/HelmetSemuaProduk';
import PageAlamat from './components/pages/pagealamat/PageAlamat';
import HelmetPageAlamat from './components/pages/pagealamat/helmetpagealamat/HelmetPageAlamat';
import PageProfil from './components/pages/pageprofil/PageProfil';
import HelmetPageProfil from './components/pages/pageprofil/helmetpageprofil/HelmetPageProfil';
import PageNotifikasi from './components/pages/pagenotifikasi/PageNotifikasi';
import HelmetPageNotifikasi from './components/pages/pagenotifikasi/helmetpagenotifikasi/HelmetPageNotifikasi';
import PageFavorit from './components/pages/pagefavorit/PageFavorit';
import HelmetPageFavorit from './components/pages/pagefavorit/helmetpagefavorit/HelmetPageFavorit';
import PageKeranjang from './components/pages/pagekeranjang/PageKeranjang';
import HelmetPageKeranjang from './components/pages/pagekeranjang/helmetpagekeranjang/HelmetPageKeranjang';
import Register from './components/pages/register/Register';
import PageBeranda from './components/pages/pageberanda/PageBeranda';
import HelmetPageBeranda from './components/pages/pageberanda/helmetpageberanda/HelmetPageBeranda';
import Login from './components/pages/login/Login';
import BtnNotifPromo from './components/btnnotifpromo/BtnNotifPromo';
import NamaProfil from './components/pages/namaprofil/NamaProfil';
import NomerProfil from './components/pages/nomerprofil/NomerProfil';

function App() {


  return (
    <div className="App" id="app">
      {/* Max-width 400px */}
      <Media query="(max-width: 450px)" render={() => (
        <>
          <Router>

            <WindowScroll>
              <Switch>

                {/* Nama Profil */}
                <Route path='/nomerprofil'>
                  <NomerProfil />
                </Route>
                {/* END Nama Profil */}

                {/* Nama Profil */}
                <Route path='/namaprofil'>
                  <NamaProfil />
                </Route>
                {/* END Nama Profil */}

                {/* Transaksi */}
                <Route path='/transaksi/:id'>
                  <Transaksi />

                  <HelmetTransaksi />
                </Route>
                {/* end Transaksi */}

                {/* detail produk */}
                <Route path='/detail-produk/:id'>
                  <DetailProduk />

                  <HelmetDetailProduk />
                </Route>
                {/* end detail produk */}

                {/* page semua produk */}
                <Route path='/semuaproduk/:id'>
                  <SemuaProduk />

                  <HelmetSemuaProduk />
                </Route>
                {/* end page semua produk */}

                {/* page alamat*/}
                <Route path='/pagealamat'>
                  <PageAlamat />

                  <HelmetPageAlamat />
                </Route>
                {/* end page alamat */}

                {/* Page Profil */}
                <Route path='/pageprofil'>
                  <PageProfil />

                  <HelmetPageProfil />
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
                <Route path='/pagekeranjang/:id'>
                  <PageKeranjang />

                  <HelmetPageKeranjang />
                </Route>
                {/* END For Page Keranjang */}

                {/* For Register */}
                <Route path='/register'>
                  <Register />
                </Route>
                {/* END For Register */}

                {/* For Login */}
                <Route path='/login'>
                  <Login />
                </Route>
                {/* END For Login */}

                {/* For Home */}
                <Route path='/'>
                  {/* Navbar */}
                  {/* <Navbar /> */}
                  {/* END Navbar */}

                  {/* Page Beranda */}
                  <PageBeranda />
                  {/* END Page Beranda */}

                  <BtnNotifPromo />

                  {/* Helmet Page Beranda */}
                  <HelmetPageBeranda />
                  {/* END Helmet Page Beranda */}
                </Route>
                {/* END For Home */}

              </Switch>
            </WindowScroll>
            {/* <NavBottom /> */}

          </Router>
        </>
      )} />
      {/* END Max-width 400px */}
    </div>
  );
}

export default App;
