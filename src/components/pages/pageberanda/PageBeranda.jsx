import Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import JudulCard from '../../../componentcard/judulcard/JudulCard'
import img from '../../../img/enambelas.jpg'
import imgNew from '../../../img/delapanbelas.jpg'
import imgPromo from '../../../img/promo.jpg'
import './PageBeranda.scss'
import {Link, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter} from 'react-router-dom'
import bgMakaroni from '../../../img/bgmakaroni.jpg'
import avatar from '../../../img/avatarnew.jpg'

const PageBeranda = () => {

    // Create Modal Desc App
    let [modal, setModal] = useState(false)
    // END Create Modal Desc App
    
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

    const settings2= {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600
    }

    return (
        <>
            <div className="wrapper-pageBeranda">
                <section className="section1-pageBeranda">
                    <p className="title-home">
                        <i className="fas fa-home"></i>Beranda
                    </p>
                    <Link to='/pagekeranjang' className="box-icon iconCart">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link className="box-icon">
                    <i class="far fa-bell"></i>
                    </Link>
                </section>

                {/* Profil */}
                <section className="container-profil">
                    <p className="name-profil">
                        Ridwan
                    </p>

                    <Link>
                        <img src={avatar} alt="" className="img-profil"/>
                    </Link>
                </section>
                {/* END Profil */}

                <JudulCard
                    txtJudul={"New"}
                    page={'/semuaproduk'}
                    totProduk={"• 10 Makaroni"}
                />
                {/* Container New produk */}
                <section className="container-new-produk">

                    <Slider {...settings2} className="boxSlide">
                        <img src={imgNew} alt="" className="img-new-produk"/>
                        <img src={imgNew} alt="" className="img-new-produk"/>
                        <img src={imgNew} alt="" className="img-new-produk"/>
                        <img src={imgNew} alt="" className="img-new-produk"/>
                    </Slider>
                </section>
                {/* END Container new produk */}

                {/* Section 2 */}
                <section className="section-2-pageBeranda" id="secGroup">
                    {/* Judul */}
                        <JudulCard
                        txtJudul={"Semua Harga"}
                        page={'/semuaproduk'}
                     />
                    {/* END Judul */}

                    {/* Section Semua Harga */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                        </Slider>
                        
                        {/* <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/semuaproduk'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        /> */}
                    </div>
                    {/* END Section Semua Harga */}
                </section>
                {/* END Section 2 */}

                {/* Section 3 */}
                <section className="section-3-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul="Serba 5rb" />
                    {/* END Judul */}

                    {/* Section Serba 5rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                        </Slider>
                    
                        {/* <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/detail-produk/1'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        /> */}
                    </div>
                    {/* END Section Serba 5rb */}

                    {/* Btn View */}
                    {/* End Btn View */}
                </section>
                {/* END Section 3 */}

                {/* Section 4 */}
                <section className="section-4-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul="Serba 10rb" />
                    {/* END Judul */}

                    {/* Section Serba 10rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                        </Slider>
                    
                        {/* <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/detail-produk/1'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        /> */}
                    </div>
                    {/* END Section Serba 10rb */}
                </section>
                {/* END Section 4 */}

                {/* Section 5 */}
                <div className="section-5-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul={"Serba 15rb"} />
                    {/* END Judul */}
                    
                    {/* Section Serba 15rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                                    <BoxCard
                                    flxDirectWrapp={"column"}
                                    heightWrapp={"auto"}
                                    widthWrapp={"calc(90%)"}
                                    displayNavBtn={"none"}
                                    imgProduk={img}
                                    price={"5.000"}
                                    name={"Makaroni Original"}
                                    stock={"10"}
                                    displayBtnBuy={"none"}
                                    mrginWrapp={"10px auto"}
                                    paddContent={"0px 10px 10px 10px"}
                                    mrgnStock={"5px 0 0px 0"}
                                    detail={handleDetail}
                                    />
                        </Slider>
                    
                        {/* <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'150px'}
                        btnName={'Lihat Semua'}
                        marginBtn={'5px auto'}
                        link={'/detail-produk/1'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        /> */}
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