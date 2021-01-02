import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, HashRouter, useHistory, useLocation } from 'react-router-dom';
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
import { store } from './config/redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import API from './service';
import ContextWrapper from './config/context/ContextWrapper';

function App() {

  const [errorMessage, setErrorMessage] = useState('')
  const getAPI = () => {
    API.APIFirebaseAllProduct()
      .catch(err => {
        setErrorMessage('SERVER ERROR (ERROR: 500)', err)
      })
  }

  const histori = useLocation()

  const getUserLogin = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

      } else {
        new URLSearchParams(histori.search).get('/login')
      }
    })
  }

  const history = createBrowserHistory()

  useEffect(() => {
    getAPI();
    // getUserLogin();
  }, [])

  return (
    <ContextWrapper>
      <Provider store={store}>
        <div className="App" id="app">
          <Media query="(max-width: 450px)" render={() => (
            <>

              <Router history={history}>

                <WindowScroll>
                  <Switch>

                    <Route path='/profil/:user/email'>
                      <Email />
                    </Route>

                    <Route path='/profil/:user/nomer-profil'>
                      <NomerProfil />
                    </Route>

                    <Route path='/profil/:user/nama-profil'>
                      <NamaProfil />
                    </Route>

                    <Route path='/detail-produk/transaksi/:id'>
                      <Transaksi />
                    </Route>

                    <Route path='/detail-produk/:id'>
                      <DetailProduk />
                    </Route>

                    <Route path='/semua-produk/:id'>
                      <SemuaProduk />
                    </Route>

                    <Route path='/profil/:user/alamat'>
                      <PageAlamat />
                    </Route>

                    <Route path='/profil/:user'>
                      <PageProfil />
                    </Route>

                    <Route path='/notifikasi'>
                      <PageNotifikasi />
                    </Route>

                    <Route path='/favorit'>
                      <PageFavorit />
                    </Route>

                    <Route path='/keranjang'>
                      <PageKeranjang />
                    </Route>

                    <Route path='/register'>
                      <Register />
                    </Route>

                    <Route path='/login'>
                      <Login />
                    </Route>

                    <Route path='/'>
                      <PageBeranda />
                      <BtnNotifPromo />
                    </Route>

                  </Switch>
                </WindowScroll>

              </Router>

              {errorMessage && (
                <div className="error">
                  {errorMessage}
                </div>
              )}
            </>
          )} />
        </div>
      </Provider>
    </ContextWrapper>
  );
}

export default withRouter(App);
