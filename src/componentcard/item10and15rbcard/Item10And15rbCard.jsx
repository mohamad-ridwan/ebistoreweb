import React from 'react';
import {Link} from 'react-router-dom'
import './Item10And15rbCard.scss'

export default function Item10And15rbCard({
  page,
  img,
  bckgCirc1,
  bckgCirc2,
  txtDisc,
  txtNew,
  nameP,
  star1,
  star2,
  star3,
  star4,
  star5,
  totTerjual,
  totStock
}) {
  return (
    <>
          <Link to={page} className="item-10-and-15rb-card">
              {/* Image */}
              <img src={img} alt="" className="img-10-and-15rb-card" style={{
                display: 'flex',
                height: '20vh',
                objectFit: 'center',
                objectPosition: 'center',
                background: '#fff'
              }}/>
              {/* END Image */}

              {/* Discount */}
              <div className="discount-10-15rb-card" id="discNewGroup" style={{
                background: `${bckgCirc1}`
              }}>
                <p className="txt-disc-card" id="txtDiscNewGroup">
                  {txtDisc}
                </p>
              </div>
              {/* END Discount */}

              {/* New */}
              <div className="new-10-15rb-card" id="discNewGroup" style={{
                background: `${bckgCirc2}`
              }}>
                <p className="txt-new-card" id="txtDiscNewGroup">
                  {txtNew}
                </p>
              </div>
              {/* END New */}

              {/* Column */}
              <div className="col-desk-item-10-and-15rb-card">
                  {/* Name Produk */}
                  <p className="name-p-10-15rb-card">
                    {nameP}
                  </p>
                  {/* END Name Produk */}

                  {/* Column Grade Produk */}
                  <div className="col-grade-p-card">
                    {/* Star */}
                    <i className={star1}></i>
                    <i className={star2}></i>
                    <i className={star3}></i>
                    <i className={star4}></i>
                    <i className={star5}></i>
                    {/* Star */}

                    {/* Total Grade */}
                    <p className="angk-terjual-card">
                      {totTerjual}
                    </p>
                    {/* END Total Grade */}
                  </div>
                  {/* END Column Grade Produk */}

                  {/* Stock */}
                  <p className="txt-stock-card">
                    {totStock}
                  </p>
                  {/* END Stock */}
              </div>
              {/* END Column */}
          </Link>
    </>
  );
}
