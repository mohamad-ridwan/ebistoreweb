import React from 'react'
import './DetailCard.scss'
import imgProduk from '../../img/satu.jpeg'
import Slider from 'react-slick'
import { Link, NavLink } from 'react-router-dom'
import BtnCard from '../btncard/BtnCard'
import indomaret from '../../img/indomaret.svg'
import Spinner from '../spinner/Spinner'
import PopUp from '../popup/PopUp'
import jne from '../../img/jne.jpg'

const DetailCard = (props) => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200
    }

    if (props.loading) {
        return <Spinner titleLoad={'Loading...'} />
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
                            {props.price}
                        </p>
                        <p className="name-produk marginGroup">
                            {props.name}
                        </p>
                        <p className="stock-produk labelGroup marginGroup">
                            {props.stock}
                        </p>
                    </div>

                    <p className="paragraph paragrapGroup">
                        {props.deskripsi}
                    </p>

                    {/* For Page Transaksi */}
                    <div className="box-input-total" style={{
                        display: `${props.displayInputTotalOrder}`
                    }}>
                        <button className="btn-minus"
                            onClick={props.minus}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                        <input type="number" className="input-angka" value={props.valueInput} onChange={props.changeTotalShop}
                        />
                        <button className="btn-plus"
                            style={{
                                color: `${props.colorPlus}`,
                                border: `${props.borderPlus}`
                            }}
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

                            <div className="wrapp-popUp-isi-alamat"
                                style={{
                                    display: `${props.displayPopUpIsiAlamat}`
                                }}
                            >
                                <p className="popUp-isi-alamat">
                                    Mohon isi alamat terlebih dahulu untuk melanjutkan pembayaran!
                                </p>
                            </div>


                            <p className="title-alamat">
                                Alamat
                            </p>

                            <div className="container-btn-goAlamat" style={{
                                display: `${props.displayGoAlamat}`
                            }} ref={props.myRef} id='#kampret'>
                                <p className="ket-non-alamat fontGroup">
                                    Kamu Belum Memiliki Alamat!
                                    <br />
                                    Isi Alamat kamu terlebih dahulu untuk melanjutkan pembayaran!
                                </p>
                                <BtnCard
                                    // display={props.displayBtnTransaksis}
                                    heightBtn={'40px'}
                                    widthBtn={'100%'}
                                    btnName={'Isi Alamat'}
                                    marginBtn={'5px 0'}
                                    bdrRadius={"10px"}
                                    bgColor={"#fff"}
                                    colorP={"#ffa835"}
                                    fontWeight={"bold"}
                                    bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                                    goTo={props.goAlamat}
                                // goTo={() => props.buy(props.data._id)}
                                />
                            </div>


                            <div className="container-alamat" style={{
                                display: `${props.displayContAlamat}`
                            }}
                            >
                                <button className="btn-edit-alamat"
                                    onClick={props.editAlamat}
                                >
                                    Edit Alamat
                                </button>
                                <p className="nama-penerima fontGroup">
                                    {props.namaPenerima}
                                </p>
                                <p className="nomer-telpon fontGroup">
                                    {props.nomerHp}
                                </p>
                                <p className="txt-alamat">
                                    {props.alamat}
                                    <br />
                                    {props.kota}
                                    <br />
                                    {props.kodePos}
                                    <br />
                                </p>
                            </div>

                            <p className="pengiriman fontGroup">
                                Pengiriman • {props.nameKurir}
                            </p>

                            <img src={props.imgLogoKurir} alt="" className="img-jasaKurir" />

                            <p className="durasi fontGroup">
                                {props.durasiPengiriman}
                            </p>

                            <p className="price-pengiriman fontGroup"
                                onClick={props.showJasa}
                            >
                                Rp{props.ongkir} <i className="fas fa-angle-down"></i>
                            </p>

                            {/* <div className="box-jasa-transaksi">
                                <img src={indomaret} alt="" className="logo-jasa" />

                                <p className="txt-name-jasa">
                                    • Indomaret
                                </p>
                            </div> */}

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
                                    // link={'#'}
                                    goTo={props.nextTransaksi}
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