import Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import JudulCard from '../../../componentcard/judulcard/JudulCard'
import img from '../../../img/satu.jpeg'
import './PageBeranda.scss'

const PageBeranda = () => {

    // Create Modal Desc App
    let [modal, setModal] = useState(false)
    // END Create Modal Desc App

    // carousel react-slick
    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 400
    }

    return (
        <>
            <div className="wrapper-pageBeranda">
                {/* Section 1 */}
                <section className="section-1-pageBeranda">
                    {/* Btn Description App */}
                    <button type="button" className="descApp-pageBeranda" onClick={function () {
                        setModal(!modal)
                    }}>
                        {/* Row1 */}
                        <div className="row1-cont1-pageBeranda">
                            <p className="txt-btn-descApp-pageBeranda">
                                Klik Untuk Lihat Deskripsi Aplikasi
                            </p>
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-cont1-pageBeranda">
                            <i className="fas fa-sort-down" style={{
                                transform: modal ? 'rotate(180deg)' : 'rotate(0deg)',
                                marginTop: modal ? '6px' : '-6px',
                                transition: '.3s'
                            }}></i>
                        </div>
                        {/* END Row2 */}
                    </button>
                    {/* END Btn Description App */}

                    {/* Modal Description App */}
                    <div className="modalDesc-app-pageBeranda" style={{
                        display: modal ? 'flex' : 'none'
                    }}>
                        <p className="txtModal-descApp-pageBeranda">
                            Suka dengan jajanan yang ringan dan murah seperti makaroni?,
                            <br />
                            Di EbiStore ini telah menyediakan berbagai macam aneka makaroni yang di buat EbiStore!,
                            <br />
                            Penasaran? Scroll aja..
                        </p>
                    </div>
                    {/* END Modal Description App */}
                </section>
                {/* END Section 1 */}

                {/* Section 2 */}
                <section className="section-2-pageBeranda" id="secGroup">
                    {/* Judul */}
                        <JudulCard
                        txtJudul={"Semua Harga"}
                     />
                    {/* END Judul */}

                    {/* Section Semua Harga */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Panggang"}
                                price={"Rp. 2.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Original"}
                                price={"Rp. 3.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Barbeque"}
                                price={"Rp. 5.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Keju Mozarella"}
                                price={"Rp. 7.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Jagung Bakar"}
                                price={"Rp. 17.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Rumput Laut"}
                                price={"Rp. 13.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                        </Slider>
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
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Panggang"}
                                price={"Rp. 5.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Original"}
                                price={"Rp. 5.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Barbeque"}
                                price={"Rp. 5.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Keju Mozarella"}
                                price={"Rp. 5.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
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
                    <JudulCard txtJudul="Serba 10rb" />
                    {/* END Judul */}

                    {/* Section Serba 10rb */}
                    <div className="box-group">
                        <Slider {...settings} className="boxSlide">
                        <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Panggang"}
                                price={"Rp. 10.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Original"}
                                price={"Rp. 10.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Barbeque"}
                                price={"Rp. 10.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Keju Mozarella"}
                                price={"Rp. 10.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                        </Slider>
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
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Panggang"}
                                price={"Rp. 15.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Original"}
                                price={"Rp. 15.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Barbeque"}
                                price={"Rp. 15.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
                            <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(96%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                nama={"Makaroni Keju Mozarella"}
                                price={"Rp. 15.000"}
                                stock={"Stock (20)"}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                fontNama={"10pt"}
                                fontStock={"8pt"}
                                mrginWrapp={"2px auto"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                            />
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
                </div>
                {/* END Section 6 */}
            </div>
        </>
    )
}

export default PageBeranda