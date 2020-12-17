import Axios from 'axios'
import React, { Component, useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import JudulCard from '../../../componentcard/judulcard/JudulCard'
import imgNew from '../../../img/delapanbelas.jpg'
import imgPromo from '../../../img/promo.jpg'
import './PageBeranda.scss'
import { Link, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import firebase from 'firebase/app';
import newProfil from '../../../img/newprofil.png'
import { GetUserLogin } from '../../../config/context/GetUserLogin.jsx'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'

const PageBeranda = () => {

    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [getSemuaHarga, setGetSemuaHarga] = useState([])
    const [getSerba5rb, setGetSerba5rb] = useState([])
    const [getSerba10rb, setGetSerba10rb] = useState([])
    const [getSerba15rb, setGetSerba15rb] = useState([])
    const [getMenuSemuaHarga, setGetMenuSemuaHarga] = useState()
    const [getMenuSerba5rb, setGetMenuSerba5rb] = useState([])
    const [getMenuSerba10rb, setGetMenuSerba10rb] = useState([])
    const [getMenuSerba15rb, setGetMenuSerba15rb] = useState([])

    const getDataAPI = () => {
        API.APISemuaHarga()
            .then(res => {
                const respon = res.data
                setGetSemuaHarga(respon)
            })
        API.APISerba5rb()
            .then(res => {
                const respon = res.data
                setGetSerba5rb(respon)
            })
        API.APISerba10rb()
            .then(res => {
                const respon = res.data
                setGetSerba10rb(respon)
            })
        API.APISerba15rb()
            .then(res => {
                const respon = res.data
                setGetSerba15rb(respon)
            })
        API.APIMenuSemuaHarga()
            .then(res => {
                const respon = res.data
                setGetMenuSemuaHarga(respon)
            })
        API.APIMenuSerba5rb()
            .then(res => {
                const respon = res.data
                setGetMenuSerba5rb(respon)
            })
        API.APIMenuSerba10rb()
            .then(res => {
                const respon = res.data
                setGetMenuSerba10rb(respon)
            })
        API.APIMenuSerba15rb()
            .then(res => {
                const respon = res.data
                setGetMenuSerba15rb(respon)
            })
    }

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const emailUser = user.email
                const nameDefault = 'User'
                const nameUser = user.displayName
                const photoUser = user.photoURL
                const sayHi = 'Hi !'
                const numberPhone = user.phoneNumber
                const numberPhoneDefault = 'Kamu belum memiliki nomer hp yang tercantum'

                setGetUser({
                    email: emailUser,
                    hi: sayHi,
                    name: nameUser || emailUser,
                    photo: photoUser || newProfil,
                    numberPhone: numberPhone || numberPhoneDefault
                })

            } else {
                histori.push('/login')
                const photoDefault = newProfil
                const nameDefault = 'User'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'
                const numberPhoneDefault = 'Kamu belum memiliki nomer hp yang tercantum'
                setGetUser({
                    photo: photoDefault,
                    name: nameDefault,
                    email: emailDefault,
                    numberPhone: numberPhoneDefault
                })
            }
        })
    }

    const histori = useHistory()

    const pushNotifikasi = () => {
        histori.push('/notifikasi')
    }

    const pushProfil = (user) => {
        histori.push(`/profil/${user}`)
    }

    const params = useHistory()

    const handleDetail = (_id) => {
        params.push(`/detail-produk/${_id}`)
    }

    const toDbFirebase = () => {
        histori.push('/db-firebase')
    }

    // carousel react-slick
    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 400
    }

    const settings2 = {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600
    }

    useEffect(() => {
        getUserLogin()
        getDataAPI()
    }, [])

    return (
        <>
            {getSerba5rb && getSerba5rb.length > 0 ? (
                <>
                    <Helmet
                        titleHelmet={'Ebi Store'}
                        contentHelmet={'halaman beranda | Ebi Store'}
                    />
                    <Navbar />
                    <div className="wrapper-pageBeranda">
                        <section className="section1-pageBeranda">
                            <p className="title-home">
                                <i className="fas fa-home"
                                    onClick={() => toDbFirebase()}
                                ></i>Beranda
                </p>
                            <Link to='/keranjang/1' className="box-icon iconCart">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                            <Link className="box-icon"
                                onClick={pushNotifikasi}
                            >
                                <i class="far fa-bell"></i>
                            </Link>
                        </section>

                        {/* Profil */}
                        <section className="container-profil">
                            <div className="name-profil">
                                {getUser.hi}
                                <br />
                                {getUser.name}
                            </div>

                            <Link
                                onClick={() => pushProfil(getUser.name || getUser.email)}
                            >
                                <img src={getUser.photo} alt="" className="img-profil" />
                            </Link>
                        </section>
                        {/* END Profil */}

                        <JudulCard
                            txtJudul={"New"}
                            page={'/semua-produk/9'}
                            pagination={`• 10 Makaroni`}
                        />
                        {/* Container New produk */}
                        <section className="container-new-produk">
                            <Slider {...settings2} className="boxSlide">
                                <img src={imgNew} alt="" className="img-new-produk" />
                                <img src={imgNew} alt="" className="img-new-produk" />
                                <img src={imgNew} alt="" className="img-new-produk" />
                                <img src={imgNew} alt="" className="img-new-produk" />
                            </Slider>
                        </section>
                        {/* END Container new produk */}

                        {/* Section 2 */}
                        <section className="section-2-pageBeranda" id="secGroup">
                            {/* Judul */}
                            {getMenuSemuaHarga && (
                                <JudulCard
                                    txtJudul={getMenuSemuaHarga.nameMenu}
                                    page={'/semua-produk/1'}
                                />
                            )}
                            {/* END Judul */}

                            {/* Section Semua Harga */}
                            <div className="box-group">
                                <Slider {...settings} className="boxSlide">
                                    {getSemuaHarga && getSemuaHarga.length > 0
                                        ? getSemuaHarga.map(e => {
                                            return (
                                                <>
                                                    <BoxCard
                                                        key={e._id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        data={e}
                                                        image={`http://localhost:6235/${e.image}`}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={handleDetail}
                                                    />
                                                </>
                                            )
                                        }) : (
                                            <div className="oke">FAILED</div>
                                        )}
                                </Slider>
                            </div>
                            {/* END Section Semua Harga */}
                        </section>
                        {/* END Section 2 */}

                        {/* Section 3 */}
                        <section className="section-3-pageBeranda" id="secGroup">
                            {/* Judul */}
                            {getMenuSerba5rb && (
                                <JudulCard
                                    txtJudul={getMenuSerba5rb.nameMenu}
                                    page={'/semua-produk/2'}
                                />
                            )}
                            {/* END Judul */}

                            {/* Section Serba 5rb */}
                            <div className="box-group">
                                <Slider {...settings} className="boxSlide">
                                    {getSerba5rb && getSerba5rb.length > 0
                                        ? getSerba5rb.map(e => {
                                            return (
                                                <>
                                                    <BoxCard
                                                        key={e._id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        data={e}
                                                        image={`http://localhost:6235/${e.image}`}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={handleDetail}
                                                    />
                                                </>
                                            )
                                        }) : (
                                            <div className="oke">FAILED</div>
                                        )}
                                </Slider>
                            </div>
                            {/* END Section Serba 5rb */}

                            {/* Btn View */}
                            {/* End Btn View */}
                        </section>
                        {/* END Section 3 */}

                        {/* Section 4 */}
                        <section className="section-4-pageBeranda" id="secGroup">
                            {/* Judul */}
                            {getMenuSerba10rb && (
                                <JudulCard
                                    txtJudul={getMenuSerba10rb.nameMenu}
                                    page={'/semua-produk/3'}
                                />
                            )}
                            {/* END Judul */}

                            {/* Section Serba 10rb */}
                            <div className="box-group">
                                <Slider {...settings} className="boxSlide">
                                    {getSerba10rb && getSerba10rb.length > 0
                                        ? getSerba10rb.map(e => {
                                            return (
                                                <>
                                                    <BoxCard
                                                        key={e._id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        data={e}
                                                        image={`http://localhost:6235/${e.image}`}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={handleDetail}
                                                    />
                                                </>
                                            )
                                        }) : (
                                            <div className="oke">FAILED</div>
                                        )}
                                </Slider>
                            </div>
                            {/* END Section Serba 10rb */}
                        </section>
                        {/* END Section 4 */}

                        {/* Section 5 */}
                        <div className="section-5-pageBeranda" id="secGroup">
                            {/* Judul */}
                            {getMenuSerba15rb && (
                                <JudulCard
                                    txtJudul={getMenuSerba15rb.nameMenu}
                                    page={'/semua-produk/4'}
                                />
                            )}
                            {/* END Judul */}

                            {/* Section Serba 15rb */}
                            <div className="box-group">
                                <Slider {...settings} className="boxSlide">
                                    {getSerba15rb && getSerba15rb.length > 0
                                        ? getSerba15rb.map(e => {
                                            return (
                                                <>
                                                    <BoxCard
                                                        key={e._id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        data={e}
                                                        image={`http://localhost:6235/${e.image}`}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={handleDetail}
                                                    />
                                                </>
                                            )
                                        }) : (
                                            <div className="oke">FAILED</div>
                                        )}
                                </Slider>
                            </div>
                            {/* END Section Serba 15rb */}
                        </div>
                        {/* END Section 5 */}

                        {/* Section 6 */}
                        <div className="section-6-pageBeranda" id="secGroup">
                            {/* Judul */}
                            <JudulCard txtJudul={"Promo Akhir Pekan"} />
                            {/* END Judul */}

                            {/* container promo akhir pekan */}
                            <div className="container-promo">
                                <img src={imgPromo} alt="" className="img-promo" />

                                <p className="time-promo">
                                    Berakhir Pada :
                        <br />
                        Jam: 08.00 Detik: 05
                    </p>
                            </div>
                            {/* end container promo akhir pekan */}
                        </div>
                        {/* END Section 6 */}
                    </div>
                </>
            ) : (
                    <Spinner
                        bgColorLoading={'#ffa835'}
                    />
                )}
        </>
    )
}

export default (withRouter(PageBeranda))