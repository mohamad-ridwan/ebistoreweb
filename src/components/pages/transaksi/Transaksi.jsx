import React from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import img from '../../../img/satu.jpeg'

const Transaksi = ()=>{
    return(
        <>
        <NavbarPageCard
            linkPage={'/detailproduk'}
            titlePageNav={'Transaksi'}
        />
        <div className="wrapp-transaksi">
            <img src={img} alt="" className="img-produk"/>

            <p className="label-produk margGroup">
                Beli 2 Gratis 2
            </p>
            <p className="name-produk margGroup">
                Makaroni Jagung Bakar
            </p>
            <p className="price-produk margGroup">
                Rp. 5.000
            </p>

            {/* box total beli */}
            <div className="box-total-beli">
                <p className="total-dibeli">
                    Total yang di beli :
                </p>

                <div className="input-total">
                    <button className="btn-mines btnGroup">
                        <i className="fas fa-minus" id="btnGroup"></i>
                    </button>
                    <input type="number" className="input-angka" placeholder="1"/>
                    <button className="btn-plus btnGroup">
                        <i className="fas fa-plus" id="btnGroup"></i>
                    </button>
                </div>
            </div>
            {/* end box total beli */}

        </div>
        </>
    )
}

export default Transaksi