import React from 'react'
import { useState } from 'react'
import BoxCard from '../boxcard/BoxCard'
import avatarnew from '../../img/tiga.png'

import './CarouselCard.scss'

const CarouselCard = () => {

    // Create Database
    let [boxCard, setBoxCard] = useState([
        {
            id: 1,
            totLike: '10.',
            like: 'fas fa-thumbs-up',
            favorite: 'fas fa-heart',
            basket: 'fas fa-cart-plus',
            share: 'fas fa-ellipsis-h',
            discount: '50%',
            txtNew: 'new',
            carItem1: 'carousel-item active',
            carItem2: 'carousel-item',
            carItem3: 'carousel-item',
            carItem4: 'carousel-item',
            carItem5: 'carousel-item',
            image1: avatarnew,
            image2: 'test.jpg',
            image3: 'test.jpg',
            image4: 'test.jpg',
            image5: 'test.jpg',
            nameM: 'Makaroni Original',
            hargaM: 'Rp. 10.000',
            txtHargaNormal: 'Harga Normal',
            hargaNormal: 'Rp. 20.000',
            rate1: 'fas fa-star',
            rate2: 'fas fa-star',
            rate3: 'fas fa-star',
            rate4: 'fas fa-star',
            rate5: 'fas fa-star',
            ftSizRate: '12px',
            ketRate: '(20) Terjual',
            stock: 'Stock (500)',
            btnView: 'view',
            btnBuy: 'buy'
        }
    ])
    // END Create Database

    return (
        <>
            <div className="wrapper-carouselCard">
                {/* Btn Left */}
                <button className="btn-left-carouselCard" id="btnGroupCC">
                    <i className="fas fa-arrow-left"></i>
                </button>
                {/* END Btn Left */}

                {/* Btn Right */}
                <button className="btn-right-carouselCard" id="btnGroupCC">
                    <i className="fas fa-arrow-right"></i>
                </button>
                {/* END Btn Right */}

                {/* Body Card */}
                <div className="body-card-carouselCard">
                    <BoxCard boxCard={boxCard} />
                </div>
                {/* END Body Card */}
            </div>
        </>
    )
}

export default CarouselCard