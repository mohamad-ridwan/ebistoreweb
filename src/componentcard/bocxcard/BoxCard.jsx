import React from 'react'
import { Link } from 'react-router-dom'
import './BoxCard.scss'

const BoxCard = (props) => {
    return (
        <>
            <Link className="wrapp-boxCard" style={{
                flexDirection: `${props.flxDirectWrapp}`,
                height: `${props.heightWrapp}`,
                width: `${props.widthWrapp}`,
                margin: `${props.mrginWrapp}`,
                borderRadius: `${props.bdrRadius}`,
                textDecoration: 'none',
                outline: 'none',
                boxShadow: `${props.bxShadow}`
            }}
                onClick={() => props.detail(props.data._id)}
            >
                {/* Nav Button */}
                <div className="nav-btn-produk" style={{
                    display: `${props.displayNavBtn}`,
                }}>
                    <i className={props.iconShare}></i>
                    <i className={props.iconHeart}></i>
                    <i className={props.iconBasket}></i>
                </div>
                {/* end Nav Button */}

                <img src={props.image} alt="" className="img-produk" />

                {/* Box Content Produk */}
                <div className="box-content-produk" style={{
                    padding: `${props.paddContent}`
                }}>
                    <p className="label-produk priceGroup" style={{
                        fontSize: `${props.fontLabel}`
                    }}>
                        {/* {props.data.label} */}
                    </p>

                    <p className="harga-produk priceGroup" style={{
                        margin: `${props.mrgnStock}`,
                    }}>
                        Rp {props.data.price}
                    </p>

                    <p className="name-produk nameGroup" style={{
                        fontSize: `${props.fontNama}`,
                        margin: `${props.mrgnStock}`,
                    }}>
                        {props.data.name}
                    </p>
                    <p className="txt-harga-normal nameGroup">
                        {props.txtHargaNormal}
                    </p>
                    <p className="price-harga-normal priceGroup">
                        {props.hargaNormal}
                    </p>
                    <p className="stock nameGroup" style={{
                        fontSize: `${props.fontStock}`,
                        margin: `${props.mrgnStock}`,
                    }}>
                        Stock ({props.data.stock})
                </p>

                    {/* box buy */}
                    <Link className="btn-buy-produk" style={{
                        display: `${props.displayBtnBuy}`
                    }}>{props.btnBuy}</Link>
                </div>
                {/* end Box Content Produk */}
            </Link>
        </>
    )
}

export default BoxCard