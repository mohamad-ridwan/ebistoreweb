import Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import JudulCard from '../../../componentcard/judulcard/JudulCard'
import img from '../../../img/satu.jpeg'
import imgPromo from '../../../img/promo.jpg'
import './PageBeranda.scss'
import {matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter} from 'react-router-dom'
import bgMakaroni from '../../../img/bgmakaroni.jpg'

const PageBeranda = () => {

    // Create Modal Desc App
    let [modal, setModal] = useState(false)
    // END Create Modal Desc App

    // GET product semua harga
    const [dataProduk, setDataProduk] = useState([]);
    // GET Serba 5rb
    const [produkLimaRibu, setProdukLimaRibu] = useState([]);
    // GET Serba 10rb
    const [produkSepuluhRibu, setProdukSepuluhRibu] = useState([]);
    // GET Serba 15rb
    const [produkLimaBelasRibu, setProdukLimaBelasRibu] = useState([]);
 
    // Semua Harga
    const getDataProduk = ()=>{
        Axios.get('http://localhost:62542/v8/makaroni/getall?page=8')
        .then(result=>{
            const resAPI = result.data

            setDataProduk(resAPI.data)
        })
        .catch(err=>{
            console.log('failed :', err)
        })
    }

    // 5rb
    const getLimaRibu = ()=>{
        Axios.get('http://localhost:62542/v8/makaroni/getall?page=6')
        .then(result=>{
            const resAPI = result.data

            setProdukLimaRibu(resAPI.data)
        })
        .catch(err=>{
            console.log('produk 5rb failed get', err)
        })
    }

    // 10rb
    const getSepuluhRibu = ()=>{
        Axios.get('http://localhost:62542/v8/makaroni/getall?page=3')
        .then(result=>{
            const resAPI = result.data

            setProdukSepuluhRibu(resAPI.data)
        })
        .catch(err=>{
            console.log('data failed in get', err)
        })
    }

    // 15rb
    const getLimaBelasRibu = ()=>{
        Axios.get('http://localhost:62542/v8/makaroni/getall')
        .then(result=>{
            const resAPI = result.data

            setProdukLimaBelasRibu(resAPI.data)
        })
        .catch(err=>{
            console.log('data failed in get', err)
        })
    }
    
    // params Detail Produk
    const history = useHistory()

    const handleDetail = (_id)=>{
        history.push({
            pathname: `detail-produk/${_id}`
        })
    }
    // END params Detail produk

    // carousel react-slick
    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 400
    }

    useEffect(()=>{
        getLimaBelasRibu();
        getSepuluhRibu();
        getLimaRibu();
        getDataProduk();
    }, [])

    return (
        <>
            <div className="wrapper-pageBeranda">
                <section className="section1-pageBeranda">
                    <div className="box-icon iconCart">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="box-icon">
                    <i class="far fa-bell"></i>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="section-2-pageBeranda" id="secGroup">
                    {/* Judul */}
                        <JudulCard
                        txtJudul={"Semua Harga"}
                     />
                    {/* END Judul */}

                    {/* Section Semua Harga */}
                    <div className="box-group" style={{
                        backgroundColor: `#fff`
                    }}>
                        <Slider {...settings} className="boxSlide">
                            {dataProduk && dataProduk.length > 0 
                            ? dataProduk.map(e=>{
                                return (
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={`http://localhost:62542/${e.image}`}
                                    data={e}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                )
                            }):(
                                <div className="wait">Failed</div>
                            )}
                        </Slider>
                        
                        <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/semuaproduk'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        />
                    </div>
                    {/* END Section Semua Harga */}
                </section>
                {/* END Section 2 */}

                {/* Section 3 */}
                <section className="section-3-pageBeranda" id="secGroup" style={{
                        backgroundColor: `#fff`
                    }}>
                    {/* Judul */}
                    <JudulCard txtJudul="Serba 5rb" />
                    {/* END Judul */}

                    {/* Section Serba 5rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        {produkLimaRibu && produkLimaRibu.length > 0
                        ? produkLimaRibu.map(i=>{
                            return(
                                <BoxCard
                                    key={i._id}
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={`http://localhost:62542/${i.image}`}
                                    data={i}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                            )
                        }):(
                            <div className="wait">failed</div>
                        )}
                        </Slider>
                    
                        <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/detail-produk/1'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        />
                    </div>
                    {/* END Section Serba 5rb */}

                    {/* Btn View */}
                    {/* End Btn View */}
                </section>
                {/* END Section 3 */}

                {/* Section 4 */}
                <section className="section-4-pageBeranda" id="secGroup"  style={{
                        backgroundColor: `#fff`
                    }}>
                    {/* Judul */}
                    <JudulCard txtJudul="Serba 10rb" />
                    {/* END Judul */}

                    {/* Section Serba 10rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                            {produkSepuluhRibu && produkSepuluhRibu.length > 0 ? produkSepuluhRibu.map(e=>{
                                return(
                                    <BoxCard
                                    key={e._id}
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={`http://localhost:62542/${e.image}`}
                                    data={e}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                )
                            }):(
                                <div className="wait">
                                    FAILED
                                </div>
                            )}
                        </Slider>
                    
                        <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/detail-produk/1'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        />
                    </div>
                    {/* END Section Serba 10rb */}
                </section>
                {/* END Section 4 */}

                {/* Section 5 */}
                <div className="section-5-pageBeranda" id="secGroup"  style={{
                        backgroundColor: `#fff`
                    }}>
                    {/* Judul */}
                    <JudulCard txtJudul={"Serba 15rb"} />
                    {/* END Judul */}
                    
                    {/* Section Serba 15rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                            {produkLimaBelasRibu && produkLimaBelasRibu.length > 0
                            ? produkLimaBelasRibu.map(e=>{
                                return(
                                    <BoxCard
                                    key={e._id}
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={`http://localhost:62542/${e.image}`}
                                    data={e}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                )
                            }):(
                                <div className="tes">FAILED</div>
                            )}
                        </Slider>
                    
                        <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/detail-produk/1'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        />
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
                        <img src={imgPromo} alt="" className="img-promo"/>

                        <p className="time-promo">
                            Berakhir Pada :
                            <br/>
                            Jam: 08.00 Detik: 05
                        </p>
                    </div>
                    {/* end container promo akhir pekan */}
                </div>
                {/* END Section 6 */}
            </div>
        </>
    )
}

export default PageBeranda