import React, { Component } from 'react'
import './KeranjangCard.scss'
import BoxWhite from '../boxwhite/BoxWhite'

class KeranjangCard extends Component {

    render() {
        return (
            <>
                <div className="wrapper-card-keranjang">
                    <BoxWhite
                        img={this.props.img}
                        name={this.props.name}
                        displayBeli={"none"}
                        price={this.props.price}
                        display={"none"}
                        heightImg={"100px"}
                        widthImg={"100px"}
                        margBox={"5px 0 0 0"}
                        paddBox={"10px"}
                        bgColor={"#fff"}
                        bxShadow={"0 5px 20px -6px rgba(0,0,0,0.1)"}
                        onClick={this.props.to}
                    />
                </div>
            </>
        )
    }
}


export default KeranjangCard