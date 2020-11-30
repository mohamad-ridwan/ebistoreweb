import React from 'react'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './SemuaProduk.scss'
import img from '../../../img/satu.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const SemuaProduk = ()=>{

    const [semuaProduk, setSemuaProduk] = useState([]);

    const GetSemuaProduk = ()=>{
        Axios.get('http://localhost:62542/v2/makaroni/getlimaribu?perPage=8')
        .then(result=>{
            const resAPI = result.data

            setSemuaProduk(resAPI.dataLimaRibu)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
    }

    useEffect(()=>{
        GetSemuaProduk();
    }, [])

    return(
        <>
            <div className="wrapper-semua-produk">
                <NavbarPageCard
                    linkPage={'/'}
                    titlePageNav={'Semua'}
                />

                {/* Categori navbar */}
                <div className="categori-nav">
                    <p className="title-ktg">
                        Kategori
                    </p>

                    <Slider {...settings} className="slider-allP">
                        <Link className="btn-kategori">
                            Semua Harga
                        </Link>
                        <Link className="btn-kategori">
                            Serba 5rb
                        </Link>
                        <Link className="btn-kategori">
                            Serba 10rb
                        </Link>
                        <Link className="btn-kategori">
                            Serba 15rb
                        </Link>
                    </Slider>
                </div>
                {/* END Categori Navbar */}

                <div className="container-all-card">
                    {semuaProduk && semuaProduk.length > 0
                        ? semuaProduk.map(e=>{
                            return(
                                <BoxCard
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(48%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                data={e}
                                displayBtnBuy={"none"}
                                bdrRadius={"20px"}
                                mrginWrapp={"0px 0px 15px 0"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                                bxShadow={"0 1px 10px -3px rgba(0,0,0,0.1)"}
                                />
                            )
                        }) :(
                            <div className="wait">FAILED</div>
                        )}
                </div>
            </div>
        </>
    )
}

export default SemuaProduk