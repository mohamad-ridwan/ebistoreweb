import React from 'react'
import ButtonCard from '../buttoncard/ButtonCard'
import Item10And15rbCard from '../item10and15rbcard/Item10And15rbCard'
import './Sec15rbCard.scss'
import img from '../../img/avatarnew.jpg'

export default function Sec15rbCard() {
    return (
        <>
            <section className="section-15rb-card">
            {/* Col1 */}
            <div className="col1-sec-15rb-card">
                {/* Row1 */}
                <div className="row1-15rb-card">
                <Item10And15rbCard 
                page="/"
                img={img}
                bckgCirc1="#ff0000d0"
                bckgCirc2="#ff0000d0"
                txtDisc="15%"
                txtNew="New"
                nameP="Makaroni Original"
                star1="fas fa-star"
                star2="fas fa-star"
                star3="fas fa-star"
                star4="fas fa-star"
                star5="fas fa-star"
                totTerjual="(10) Terjual"
                totStock="Stock (10)"
                />
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-15rb-card">
                <Item10And15rbCard 
                page="/"
                img={img}
                bckgCirc2="#ff0000d0"
                txtNew="New"
                nameP="Makaroni Original"
                star1="fas fa-star"
                star2="fas fa-star"
                star3="fas fa-star"
                star4="fas fa-star"
                star5="fas fa-star"
                totTerjual="(10) Terjual"
                totStock="Stock (10)"
                />
                </div>
                {/* END Row2 */}
            </div>
            {/* END Col1 */}
      
            {/* Col2 */}
            <div className="col2-sec-15rb-card">
                {/* Row1 */}
                <div className="row1-15rb-card">
                <Item10And15rbCard 
                page="/"
                img={img}
                bckgCirc1="#ff0000d0"
                bckgCirc2="#ff0000d0"
                txtDisc="15%"
                txtNew="New"
                nameP="Makaroni Original"
                star1="fas fa-star"
                star2="fas fa-star"
                star3="fas fa-star"
                star4="fas fa-star"
                star5="fas fa-star"
                totTerjual="(10) Terjual"
                totStock="Stock (10)"
                />
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-15rb-card">
                <Item10And15rbCard 
                page="/"
                img={img}
                nameP="Makaroni Original"
                star1="fas fa-star"
                star2="fas fa-star"
                star3="fas fa-star"
                star4="fas fa-star"
                star5="fas fa-star"
                totTerjual="(20) Terjual"
                totStock="Stock (2)"
                />
                </div>
                {/* END Row2 */}
            </div>
            {/* END Col2 */}

            {/* Col3 */}
            <div className="col3-sec-15rb-card">
              <ButtonCard 
              page="/pagekeranjang"
              height="7vh"
              width="100%"
              background="#fff"
              brRadius="8px"
              jsContent="center"
              algItems="center"
              ftSize="13px"
              color="#152238"
              fWeight="500"
              txtBtn="View All"
              />
            </div>
            {/* END Col3 */}
        </section>
        </>
    )
}
