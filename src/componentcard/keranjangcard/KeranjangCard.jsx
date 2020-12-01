import React from 'react'
import './KeranjangCard.scss'

import img from '../../img/enambelas.jpg'
import BoxWhite from '../boxwhite/BoxWhite'

const KeranjangCard = ()=>{
    return(
        <>
        <div className="wrapper-card-keranjang">
            <BoxWhite
                img={img}
                name={"Makaroni Original"}
                displayBeli={"none"}
                price={"Rp 5.000"}
                display={"none"}
                heightImg={"100px"}
                widthImg={"100px"}
                margBox={"5px 0 0 0"}
                paddBox={"10px"}
                bgColor={"#fff"}
                bxShadow={"0 5px 20px -6px rgba(0,0,0,0.1)"}
            />
        </div>
        </>
    )
}

export default KeranjangCard