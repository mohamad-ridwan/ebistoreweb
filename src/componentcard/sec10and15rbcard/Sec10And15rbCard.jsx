import React from 'react';
import ButtonCard from '../buttoncard/ButtonCard';
import Item10And15rbCard from '../item10and15rbcard/Item10And15rbCard';
import './Sec10And15rbCard.scss'

export default function Sec10And15rbCard() {
  return (
    <>
        <section className="section-10-and-15rb-card">
            {/* Col1 */}
            <div className="col1-sec-10-15rb-card">
                {/* Row1 */}
                <div className="row1-10-15rb-card">
                <Item10And15rbCard/>
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-10-15rb-card">
                <Item10And15rbCard/>
                </div>
                {/* END Row2 */}
            </div>
            {/* END Col1 */}
      
            {/* Col2 */}
            <div className="col2-sec-10-15rb-card">
                {/* Row1 */}
                <div className="row1-10-15rb-card">
                <Item10And15rbCard/>
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-10-15rb-card">
                <Item10And15rbCard/>
                </div>
                {/* END Row2 */}
            </div>
            {/* END Col2 */}

            {/* Col3 */}
            <div className="col3-sec-10-15rb-card">
              <ButtonCard 
              page="/pagefavorit"
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
  );
}
