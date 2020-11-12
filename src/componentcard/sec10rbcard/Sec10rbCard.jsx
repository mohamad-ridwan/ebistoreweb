import React, {Component} from 'react';
import ButtonCard from '../buttoncard/ButtonCard';
import Item10And15rbCard from '../item10and15rbcard/Item10And15rbCard';
import './Sec10rbCard.scss'
import img from '../../img/dua.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

const Sec10rbCard = ()=>{

  const [dataCard, setDataCard] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:4000/v1/customer/produk')
    .then(result=>{
      const resAPI = result.data;

      setDataCard(resAPI.card2)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

    return (
      <>
          <section className="section-10rb-card">
              {/* Col1 */}
              <div className="col1-sec-10rb-card">
                  {/* Row1 */}
                  <div className="row1-10rb-card">
                    {dataCard.map(e=>{
                      return(
                        <Item10And15rbCard
                          key={e._id} 
                          page="/"
                          img={img}
                          bckgCirc1="#ff0000d0"
                          bckgCirc2="#ff0000d0"
                          txtNew={e.labelInfo}
                          nameP={e.name}
                          totTerjual={`(${e.terjual}) Terjual`}
                          totStock={`Stock ${e.stock}`}
                          />
                      )
                    })}
                  </div>
                  {/* END Row1 */}

                  {/* Row2 */}
                  <div className="row2-10rb-card">
                  <Item10And15rbCard 
                  page="/"
                  img={img}
                  bckgCirc1="#ff0000d0"
                  bckgCirc2="#ff0000d0"
                  txtDisc="20%"
                  txtNew="New"
                  nameP="Makaroni Original"
                  star1="fas fa-star"
                  star2="fas fa-star"
                  star3="fas fa-star"
                  star4="fas fa-star"
                  totTerjual="(2) Terjual"
                  totStock="Stock (10)"
                  />
                  </div>
                  {/* END Row2 */}
              </div>
              {/* END Col1 */}
        
              {/* Col2 */}
              <div className="col2-sec-10rb-card">
                  {/* Row1 */}
                  <div className="row1-10rb-card">
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
                  {/* END Row1 */}

                  {/* Row2 */}
                  <div className="row2-10rb-card">
                  <Item10And15rbCard 
                  page="/"
                  img={img}
                  bckgCirc1="#ff0000d0"
                  txtDisc="15%"
                  nameP="Makaroni Original"
                  star1="fas fa-star"
                  star2="fas fa-star"
                  star3="fas fa-star"
                  totTerjual="(4) Terjual"
                  totStock="Stock (15)"
                  />
                  </div>
                  {/* END Row2 */}
              </div>
              {/* END Col2 */}

              {/* Col3 */}
              <div className="col3-sec-10rb-card">
                <ButtonCard 
                page="/pagefavorit"
                height="7vh"
                width="100%"
                background="#fff"
                brRadius="8px"
                jsContent="center"
                algItems="center"
                bxShdw="0 2px 3px -1px rgba(0,0,0,0.3)"
                margin="0 0 2px 0"
                ftSize="13px"
                color="#152238"
                fWeight="500"
                txtBtn="View All"
                />
              </div>
              {/* END Col3 */}
          </section>
      </>
    );
  }


export default Sec10rbCard;