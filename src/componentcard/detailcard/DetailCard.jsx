import React from 'react'
import './DetailCard.scss'
import imgProduk from '../../img/satu.jpeg'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const DetailCard = (props)=>{

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200
    }

    return(
        <>
        <div className="wrapper-detail-card">
            <i className="fas fa-shopping-cart cart" id="iconGroup"
                onClick={()=>props.toPageShopp(props.data._id)}
            ></i>
            <i className="fas fa-heart love" id="iconGroup"></i>
            
            <Slider {...settings} className={'slider-img-produk'}>
                <img src={props.img} alt="" className="img-produk"/>
            </Slider>

            {/* deskripsi produk */}
            <div className="deskripsi-produk">
                <div className="rowKiri">
                <p className="label-produk labelGroup">
                    {props.data.label}
                </p>
                <p className="name-produk marginGroup">
                    {props.data.name}
                </p>
                <p className="price-produk marginGroup">
                    Rp {props.data.price}
                </p>
                <p className="stock-produk labelGroup marginGroup">
                    Stock ({props.data.stock})
                </p>           
                </div>
                <div className="rowKanan">
                <Link className={'btn-buy'}
                    onClick={()=>props.buy(props.data._id)}
                >
                    Beli
                </Link>
                </div>                
            </div>
            {/* end deskripsi produk */}

            {/* keterangan makaroni */}
            <div className="keterangan-makaroni">
                <p className="title titleGroup">
                    Deskripsi Makaroni
                </p>

                <p className="paragraph paragrapGroup">
                    {props.data.deskripsi}
                </p>

                <p className="komposisi titleGroup">
                    Komposisi
                </p>

                <p className="paragraph-komposisi paragrapGroup">
                    {props.data.komposisi}
                </p>
            </div>
            {/* end keterangan makaroni */}
        </div>
        
        </>
    )
}

export default DetailCard