import React from 'react'
import './DetailCard.scss'
import imgProduk from '../../img/satu.jpeg'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import BtnCard from '../btncard/BtnCard'
import indomaret from '../../img/indomaret.svg'
import Spinner from '../spinner/Spinner'

const DetailCard = (props) => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200
    }

    if (props.loading) {
        return <Spinner titleLoad={'Mohon Tunggu Sebentar'} />
    }

    return (
        <>
            <div className="wrapper-detail-card">

                <p className="title-nm-produk">
                    {props.name}
                </p>

                <div className="box-icon-detail" style={{
                    display: `${props.displayCart}`
                }}>
                    <i className="fas fa-shopping-cart cart" id="iconGroup"
                        onClick={props.toPageShopp}
                    ></i>
                </div>

                {/* <Slider {...settings} className={'slider-img-produk'}>
                
            </Slider> */}
                <img src={props.img} alt="" className="img-produk" />

                {/* deskripsi produk */}
                <div className="deskripsi-produk">
                    <div className="rowKiri">
                        {/* <p className="label-produk labelGroup">
                    {props.data.label}
                </p> */}
                        <p className="price-produk marginGroup">
                            Rp {props.price}
                        </p>
                        <p className="name-produk marginGroup">
                            {props.name}
                        </p>
                        <p className="stock-produk labelGroup marginGroup"
                            style={{
                                display: `${props.displayStock}`
                            }}
                        >
                            Stock ({props.stock})
                </p>
                    </div>

                    <p className="paragraph paragrapGroup">
                        {props.deskripsi}
                    </p>

                    {/* For Page Transaksi */}
                    <div className="box-input-total" style={{
                        display: `${props.displayInputTotalOrder}`
                    }}>
                        <button className="btn-minus btnGroup"
                            onClick={props.minus}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                        <input type="number" className="input-angka" value={props.valueInput} />
                        <button className="btn-plus btnGroup"
                            onClick={props.plus}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    {/* END For Page Transaksi */}

                    {/* For Page Transaksi */}
                    <div className="box-alamat-and-bayar" style={{
                        display: `${props.displayBoxAlamat}`
                    }}>
                        <div className="box-orange">
                            <p className="title-alamat">
                                Alamat
                            </p>

                            <p className="txt-alamat">
                                {props.alamat}
                                <br />
                                {props.kota}
                                <br />
                                {props.kodePos}
                                <br />
                                {props.namaPenerima}
                            </p>

                            <p className="pengiriman fontGroup">
                                Pengiriman Next Day
                            </p>

                            <p className="durasi fontGroup">
                                Durasi 1 hari • JNE
                            </p>

                            <p className="price-pengiriman fontGroup">
                                Rp2.000 <i className="fas fa-angle-down"></i>
                            </p>

                            <div className="box-jasa-transaksi">
                                <img src={indomaret} alt="" className="logo-jasa" />

                                <p className="txt-name-jasa">
                                    • Indomaret
                                </p>
                            </div>

                            <div className="garis-putih">

                            </div>

                            <div className="box-bayar">
                                <p className="total-belanja">
                                    Total bayar
                                    <br />
                                    {props.totalPrice}
                                </p>

                                <BtnCard
                                    display={props.displayBtnTransaksis}
                                    heightBtn={'45px'}
                                    widthBtn={'110px'}
                                    btnName={'Bayar'}
                                    marginBtn={'5px 0'}
                                    bdrRadius={"100px"}
                                    bgColor={"#fff"}
                                    colorP={"#ffa835"}
                                    fontWeight={"bold"}
                                    bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                                    link={"/transaksi/1"}
                                // goTo={() => props.buy(props.data._id)}
                                />
                            </div>
                        </div>
                    </div>
                    {/* END For page transaksi */}

                    <BtnCard
                        display={props.displayBtn}
                        heightBtn={'45px'}
                        widthBtn={'auto'}
                        btnName={'Beli'}
                        marginBtn={'5px 20px 20px 20px'}
                        bdrRadius={"100px"}
                        bgColor={"#ffa835"}
                        colorP={"#fff6eb"}
                        fontWeight={"bold"}
                        bxShadow={"0px 5px 15px -5px #ffa835"}
                        // link={"/transaksi/1"}
                        goTo={props.buy}
                    />
                </div>
                {/* end deskripsi produk */}
            </div>

        </>
    )
}

export default DetailCard