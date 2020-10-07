import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

const Container1 = () => {
    return (
        <>
            {/* Max-width 400px */}
            <Media query="(max-width: 400px)" render={() => (
                <>
                    <Router>
                        <Switch>

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
                            <Route path='/pagekeranjang'>
                                <PageKeranjang />

                                <HelmetPageKeranjang />
                            </Route>
                            {/* END For Page Keranjang */}

                            {/* For Page Home */}
                            <Route path='/'>
                                {/* Navbar */}
                                <Navbar />
                                {/* END Navbar */}

                                {/* Page Beranda */}
                                <PageBeranda />
                                {/* END Page Beranda */}

                                <BtnNotifPromo />

                                {/* Helmet Page Beranda */}
                                <HelmetPageBeranda />
                                {/* END Helmet Page Beranda */}
                            </Route>
                            {/* END For Page Home */}

                        </Switch>

                        <NavBottom />
                    </Router>
                </>
            )} />
            {/* END Max-width 400px */}
        </>
    )
}

export default Container1