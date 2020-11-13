import React from 'react'
import { Link } from 'react-router-dom'
import './BoxCard.scss'

const BoxCard=({
    flxDirectWrapp,
    heightWrapp,
    widthWrapp,
    mrginWrapp,
    bdrRadius,
    displayNavBtn,
    iconShare,
    iconHeart,
    iconBasket,
    imgProduk,
    nama,
    price,
    txtHargaNormal,
    hargaNormal,
    stock,
    displayBtnBuy,
    btnBuy,
    fontNama,
    fontStock,
    paddContent,
    mrgnStock
})=>{
    return(
        <>
        <div className="wrapp-boxCard" style={{
            flexDirection: `${flxDirectWrapp}`,
            height: `${heightWrapp}`,
            width: `${widthWrapp}`,
            margin: `${mrginWrapp}`,
            borderRadius: `${bdrRadius}`
        }}>
            {/* Nav Button */}
            <div className="nav-btn-produk" style={{
                display: `${displayNavBtn}`,
            }}>
                <i className={iconShare}></i>
                <i className={iconHeart}></i>
                <i className={iconBasket}></i>
            </div>
            {/* end Nav Button */}

            <img src={imgProduk} alt="" className="img-produk"/>

            {/* Box Content Produk */}
            <div className="box-content-produk" style={{
                padding: `${paddContent}`
            }}>
                <p className="name-produk nameGroup" style={{
                    fontSize: `${fontNama}`,
                }}>
                    {nama}
                </p>
                <p className="harga-produk priceGroup" style={{
                    margin: `${mrgnStock}`,
                }}>
                    {price}
                </p>
                <p className="txt-harga-normal nameGroup">
                    {txtHargaNormal}
                </p>
                <p className="price-harga-normal priceGroup">
                    {hargaNormal}
                </p>
                <p className="stock nameGroup" style={{
                    fontSize: `${fontStock}`,
                    margin: `${mrgnStock}`,
                }}>
                    {stock}
                </p>

                {/* box buy */}
                <Link className="btn-buy-produk" style={{
                    display: `${displayBtnBuy}`
                }}>{btnBuy}</Link>
            </div>
            {/* end Box Content Produk */}
        </div>
        </>
    )
}

export default BoxCard