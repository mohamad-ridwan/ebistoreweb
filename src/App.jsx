import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, useHistory, HashRouter } from 'react-router-dom';
import './App.css';
import Media from 'react-media';
import WindowScroll from './componentcard/windowscroll/WindowScroll';
import Transaksi from './components/pages/transaksi/Transaksi';
import DetailProduk from './components/pages/detailproduk/DetailProduk';
import SemuaProduk from './components/pages/semuaproduk/SemuaProduk';
import PageAlamat from './components/pages/pagealamat/PageAlamat';
import PageProfil from './components/pages/pageprofil/PageProfil';
import PageNotifikasi from './components/pages/pagenotifikasi/PageNotifikasi';
import PageFavorit from './components/pages/pagefavorit/PageFavorit';
import PageKeranjang from './components/pages/pagekeranjang/PageKeranjang';
import Register from './components/pages/register/Register';
import PageBeranda from './components/pages/pageberanda/PageBeranda';
import Login from './components/pages/login/Login';
import BtnNotifPromo from './components/btnnotifpromo/BtnNotifPromo';
import NamaProfil from './components/pages/namaprofil/NamaProfil';
import NomerProfil from './components/pages/nomerprofil/NomerProfil';
import Email from './components/pages/email/Email';
import firebase from 'firebase/app';
import { createBrowserHistory } from 'history';
import { store } from './config/redux';
import ContextWrapper from './config/context/ContextWrapper';
import { Provider } from 'react-redux';
import PushToCartProvider from './config/context/PushToCart';
function App() {

  const history = createBrowserHistory();

  return (
    <ContextWrapper>
      <Provider store={store}>
        <div className="App" id="app">
          {/* Max-width 400px */}
          <Media query="(max-width: 450px)" render={() => (
            <>
              <Router history={history}>

                <WindowScroll>
                  <Switch>

                    {/* Email */}
                    <Route path='/profil/:user/email'>
                      <Email />
                    </Route>
                    {/* END Email */}

                    {/* Nama Profil */}
                    <Route path='/profil/:user/nomer-profil'>
                      <NomerProfil />
                    </Route>
                    {/* END Nama Profil */}

                    {/* Nama Profil */}
                    <Route path='/profil/:user/nama-profil'>
                      <NamaProfil />
                    </Route>
                    {/* END Nama Profil */}

                    {/* Transaksi */}
                    <Route path='/detail-produk/transaksi/:id'>
                      <Transaksi />
                    </Route>
                    {/* end Transaksi */}

                    {/* detail produk */}
                    <Route path='/detail-produk/:id'>
                      <DetailProduk />
                    </Route>
                    {/* end detail produk */}

                    {/* page semua produk */}
                    <Route path='/semua-produk/:id'>
                      <SemuaProduk />
                    </Route>
                    {/* end page semua produk */}

                    {/* page alamat*/}
                    <Route path='/profil/:user/alamat'>
                      <PageAlamat />
                    </Route>
                    {/* end page alamat */}

                    {/* Page Profil */}
                    <Route path='/profil/:user'>
                      <PageProfil />
                    </Route>
                    {/* END Page Profil */}

                    {/* For Page Notifikasi */}
                    <Route path='/notifikasi'>
                      <PageNotifikasi />
                    </Route>
                    {/* END For Page Notifikasi */}

                    {/* For Page Favorit */}
                    <Route path='/favorit'>
                      <PageFavorit />
                    </Route>
                    {/* END For Page Favorit */}

                    {/* For Page Keranjang */}
                    <Route path='/keranjang/:id'>
                      <PageKeranjang />
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
      </Provider>
    </ContextWrapper>
  );
}

export default App;
