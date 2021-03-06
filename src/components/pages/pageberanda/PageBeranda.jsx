import Axios from 'axios'
import React, { Component, useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import JudulCard from '../../../componentcard/judulcard/JudulCard'
import imgNew from '../../../img/delapanbelas.jpg'
import imgPromo from '../../../img/promo.jpg'
import img from '../../../img/enambelas.jpg'
import './PageBeranda.scss'
import { Link, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import firebase from 'firebase/app';
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'
import newProfil from '../../../img/newprofil.png'

const PageBeranda = () => {

    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [dataNama, setDataNama] = useState({})
    const [getSerba5rb, setGetSerba5rb] = useState([])
    const [getSerba10rb, setGetSerba10rb] = useState([])
    const [getSerba15rb, setGetSerba15rb] = useState([])
    const [getMenuSemuaHarga, setGetMenuSemuaHarga] = useState()
    const [getMenuSerba5rb, setGetMenuSerba5rb] = useState([])
    const [getMenuSerba10rb, setGetMenuSerba10rb] = useState([])
    const [getMenuSerba15rb, setGetMenuSerba15rb] = useState([])
    const [allProduct, setAllProduct] = useState([])
    const [dataKeranjang, setDataKeranjang] = useState([])
    const [photoProfil, setPhotoProfil] = useState({
        photoUrl: ''
    })

    const getUserLogin = async () => {
        const fb = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const photo = user.photoURL
                const photoDefault = `${newProfil}`
                setPhotoProfil({ photoUrl: photo || photoDefault })

                if (user) {
                    API.APIRealtimeNamaProfile()
                        .then((res) => {
                            if (!res) {
                                histori.push('/registrasi-nama')
                            }
                        })
                } else if (user) {
                    API.APIRealtimeNomerProfile()
                        .then((res) => {
                            if (!res) {
                                histori.push('/verifikasi-nomor')
                            }
                        })
                }
            } else {
                histori.push('/login')
            }
        })

        return fb
    }

    const removeDuplicate = ((data, index) => {
        const unique = data
            .map(e => e[index])

            .map((e, i, final) => final.indexOf(e) === i && i)

            .filter(e => data[e]).map(e => data[e])

        return unique;
    })

    const getDataAPI = () => {
        API.APIFirebaseMenuSemuaHarga()
            .then(res => {
                setGetMenuSemuaHarga(res)
            })
        API.APIFirebaseMenuLimaRibu()
            .then(res => {
                setGetMenuSerba5rb(res)
            })
        API.APIFirebaseMenuSepuluhRibu()
            .then(res => {
                setGetMenuSerba10rb(res)
            })
        API.APIFirebaseMenuLimaBelasRibu()
            .then(res => {
                setGetMenuSerba15rb(res)
            })
        API.APIFirebaseAllProduct('allproduct')
            .then((result) => {
                setAllProduct(removeDuplicate(result, 'id'))
            })
        API.APIFirebaseAllProduct('limaribu')
            .then((result) => {
                setGetSerba5rb(removeDuplicate(result, 'id'))
            })
        API.APIFirebaseAllProduct('sepuluhribu')
            .then((result) => {
                setGetSerba10rb(removeDuplicate(result, 'id'))
            })
        API.APIFirebaseAllProduct('limabelasribu')
            .then((result) => {
                setGetSerba15rb(removeDuplicate(result, 'id'))
            })
        API.APIFirebaseGetKeranjang()
            .then((res) => {
                setDataKeranjang(res)
            })
        API.APIRealtimeNamaProfile()
            .then((res) => {
                setDataNama(res)
            })
    }

    const histori = useHistory()

    const pushNotifikasi = () => {
        histori.push('/notifikasi')
    }

    const pushProfil = (user) => {
        histori.push(`/profil/${user}`)
    }

    const handleDetail = (id) => {
        histori.push(`/detail-produk/${id}`)
    }

    const toAllProduk = (path) => {
        histori.push(`${path}`)
    }

    // carousel react-slick
    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 200
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
            {getSerba10rb && getSerba10rb.length > 0 ? (
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
                                ></i>Beranda
                            </p>
                            <div className="wrapp-box-icon">
                                <Link to='/keranjang' className="box-icon iconCart">
                                    {dataKeranjang && dataKeranjang.length > 0 ? (
                                        <p className="angka-notif">
                                            {dataKeranjang.length}
                                        </p>
                                    ) : (
                                            <p className="angka-notif"
                                                style={{
                                                    display: 'none'
                                                }}
                                            >

                                            </p>
                                        )}
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </div>
                            <div className="wrapp-box-icon">
                                <Link className="box-icon"
                                    onClick={pushNotifikasi}
                                >
                                    {/* {dataKeranjang && dataKeranjang.length > 0 ? (
                                        <p className="angka-notif"
                                        >
                                            {dataKeranjang.length}
                                        </p>
                                    ) : (
                                            <p className="angka-notif"
                                                style={{
                                                    display: `none`
                                                }}
                                            >

                                            </p>
                                        )} */}
                                    <i class="far fa-bell"></i>
                                </Link>
                            </div>
                        </section>

                        {/* Profil */}
                        <section className="container-profil">
                            {dataNama && dataNama ? (
                                <p className="name-profil">
                                    {'Hi !'}
                                    <br />
                                    {dataNama.username}
                                </p>
                            ) : (
                                    <p className="name-profil">
                                        {getUser.hi}
                                        <br />
                                        {getUser.name || getUser.email}
                                    </p>
                                )}

                            <Link
                                onClick={() => pushProfil(getUser.name || getUser.email)}
                            >
                                <img src={getUser.photo || photoProfil.photoUrl} alt="" className="img-profil" />
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
                                    txtJudul={getMenuSemuaHarga.name}
                                    goPage={() => toAllProduk('semua-produk/allproduct')}
                                />
                            )}
                            {/* END Judul */}

                            {/* Section Semua Harga */}
                            <div className="box-group">
                                <Slider {...settings} className="boxSlide">
                                    {allProduct.length > 0 ? allProduct.map(e => {
                                        return (
                                            <BoxCard
                                                key={e.id}
                                                flxDirectWrapp={"column"}
                                                heightWrapp={"auto"}
                                                widthWrapp={"calc(90%)"}
                                                displayNavBtn={"none"}
                                                name={e.data.name}
                                                price={e.data.price}
                                                stock={e.data.stock}
                                                image={img}
                                                displayBtnBuy={"none"}
                                                mrginWrapp={"10px auto"}
                                                paddContent={"0px 10px 10px 10px"}
                                                mrgnStock={"5px 0 0px 0"}
                                                detail={() => handleDetail(e.id)}
                                            />
                                        )
                                    }) : (
                                            <div className="wa">oke</div>
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
                                    txtJudul={getMenuSerba5rb.name}
                                    goPage={() => toAllProduk('semua-produk/limaribu')}
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
                                                        key={e.id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        name={e.data.name}
                                                        price={e.data.price}
                                                        stock={e.data.stock}
                                                        image={img}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={() => handleDetail(e.id)}
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
                                    txtJudul={getMenuSerba10rb.name}
                                    goPage={() => toAllProduk('semua-produk/sepuluhribu')}
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
                                                        key={e.id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        name={e.data.name}
                                                        price={e.data.price}
                                                        stock={e.data.stock}
                                                        image={img}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={() => handleDetail(e.id)}
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
                                    txtJudul={getMenuSerba15rb.name}
                                    goPage={() => toAllProduk('semua-produk/limabelasribu')}
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
                                                        key={e.id}
                                                        flxDirectWrapp={"column"}
                                                        heightWrapp={"auto"}
                                                        widthWrapp={"calc(90%)"}
                                                        displayNavBtn={"none"}
                                                        name={e.data.name}
                                                        price={e.data.price}
                                                        stock={e.data.stock}
                                                        image={img}
                                                        displayBtnBuy={"none"}
                                                        mrginWrapp={"10px auto"}
                                                        paddContent={"0px 10px 10px 10px"}
                                                        mrgnStock={"5px 0 0px 0"}
                                                        detail={() => handleDetail(e.id)}
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