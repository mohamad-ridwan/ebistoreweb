import React from 'react'
import './DetailCard.scss'
import imgProduk from '../../img/satu.jpeg'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import BtnCard from '../btncard/BtnCard'

const DetailCard = (props)=>{

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200
    }

    return(
        <>
        <div className="wrapper-detail-card">

            <p className="title-nm-produk">
                {props.data.name}
            </p>

            <div className="box-icon-detail">
                <i className="fas fa-shopping-cart cart" id="iconGroup"
                    onClick={()=>props.toPageShopp(props.data._id)}
                ></i>
            </div>
            
            {/* <Slider {...settings} className={'slider-img-produk'}>
                
            </Slider> */}
            <img src={props.img} alt="" className="img-produk"/>

            {/* deskripsi produk */}
            <div className="deskripsi-produk">
                <div className="rowKiri">
                {/* <p className="label-produk labelGroup">
                    {props.data.label}
                </p> */}
                <p className="price-produk marginGroup">
                    Rp {props.data.price}
                </p>
                <p className="name-produk marginGroup">
                    {props.data.name}
                </p>
                <p className="stock-produk labelGroup marginGroup">
                    Stock ({props.data.stock})
                </p>           
                </div>

                <p className="paragraph paragrapGroup">
                    {props.data.deskripsi}
                </p>
                
                <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'auto'}
                        btnName={'Beli'}
                        marginBtn={'5px 20px'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        fontWeight={"bold"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        goTo={()=>props.buy(props.data._id)}
                    />
            </div>
            {/* end deskripsi produk */}
        </div>
        
        </>
    )
}

export default DetailCard