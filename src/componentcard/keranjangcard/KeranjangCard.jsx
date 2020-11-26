import React from 'react'
import './KeranjangCard.scss'

import img from '../../img/satu.jpeg'
import BoxWhite from '../boxwhite/BoxWhite'

const KeranjangCard = ()=>{
    return(
        <>
        <div className="wrapper-card-keranjang">
            <BoxWhite
                img={img}
                label={"Beli 2 Gratis 2"}
                name={"Makaroni Original"}
                price={"Rp 5.000"}
                beli={"Beli"}
                display={"none"}
                heightImg={"70px"}
                widthImg={"70px"}
                margBox={"30px 0 0 0"}
                paddBox={"10px"}
            />
        </div>
        </>
    )
}

export default KeranjangCard