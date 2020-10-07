import React from 'react'
import { Link } from 'react-router-dom'

import './BoxCard.scss'

const BoxCard = ({ boxCard }) => {

    return (
        <>
            {boxCard.map((e) => {
                return (
                    <div className="container-boxCard" id={e.id}>
                        {/* Content1 */}
                        <main className="content1-boxCard">
                            {/* Row1 */}
                            <div className="row1-c1-boxCard">
                                {/* Btn Like */}
                                <a href="#" className="btnLike-tools-boxCard" id="btnTsGroup">
                                    <p className="totLike-boxCard">{e.totLike}</p>
                                    <i className={e.like} id="iconTsGroup"></i>
                                </a>
                                {/* END Btn Like */}

                                {/* Btn Favorite */}
                                <a href="#" className="btnFavorite-tools-boxCard" id="btnTsGroup">
                                    <i className={e.favorite} id="iconTsGroup"></i>
                                </a>
                                {/* END Btn Favorite */}

                                {/* Btn Basket */}
                                <a href="#" className="btnBasket-tools-boxCard" id="btnTsGroup">
                                    <i className={e.basket} id="iconTsGroup"></i>
                                </a>
                                {/* END Btn Basket */}
                            </div>
                            {/* END Row1 */}

                            {/* Row2 */}
                            <div className="row2-c1-boxCard">
                                {/* Btn Share */}
                                <a href="#" className="btnShare-tools-boxCard" id="btnTsGroup">
                                    <i className={e.share}></i>
                                </a>
                                {/* END Btn Share */}
                            </div>
                            {/* END Row2 */}
                        </main>
                        {/* END Conent1 */}

                        {/* Content2 */}
                        <main className="content2-boxCard">
                            {/* Circ Disc */}
                            <div className="circ-disc-c2-boxCard" id="circGroup">
                                <p className="txt-disc-boxCard" id="circTxtGroup">
                                    {e.discount}
                                </p>
                            </div>
                            {/* END Circ Disc */}

                            {/* Circ New */}
                            <div className="circ-new-c2-boxCard" id="circGroup">
                                <p className="txt-new-boxCard" id="circTxtGroup">
                                    {e.txtNew}
                                </p>
                            </div>
                            {/* END Circ New */}

                            {/* Image Product Carousel */}
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className={e.carItem1}>
                                        <img src={e.image1} className="img-boxCard" alt="..." />
                                    </div>

                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                            {/* END Image Product Carousel */}
                        </main>
                        {/* END Content2 */}

                        {/* Content3 */}
                        <main className="content3-boxCard">
                            {/* Col1 */}
                            <div className="col1-content3-boxCard">
                                {/* Nama Makanan */}
                                <p className="txt-nameM-boxCard" id="col1-group">
                                    {e.nameM}
                                </p>
                                {/* END Nama Makanan */}

                                {/* Harga Makanan */}
                                <p className="txt-hargaM-boxCard" id="col1-group">
                                    {e.hargaM}
                                </p>
                                {/* END Harga Makanan */}

                                {/* Txt Harga Normal */}
                                <p className="txt-hargaNormal-boxCard" id="col1-group">
                                    {e.txtHargaNormal}
                                </p>
                                {/* END Txt Harga Normal */}

                                {/* Harga Normal */}
                                <p className="hargaNormal-boxCard" id="col1-group">
                                    {e.hargaNormal}
                                </p>
                                {/* END Harga Normal */}
                            </div>
                            {/* END Col1 */}

                            {/* Col2 */}
                            <div className="col2-content3-boxCard">
                                {/* Column Rate */}
                                <div className="colRate-content3-boxCard">
                                    {/* Rate */}
                                    <i className={e.rate1} id="iRate-boxCard" style={{
                                        fontSize: `${e.ftSizRate}`
                                    }}>

                                    </i>

                                    <i className={e.rate2} id="iRate-boxCard" style={{
                                        fontSize: `${e.ftSizRate}`
                                    }}>

                                    </i>

                                    <i className={e.rate3} id="iRate-boxCard" style={{
                                        fontSize: `${e.ftSizRate}`
                                    }}>

                                    </i>

                                    <i className={e.rate4} id="iRate-boxCard" style={{
                                        fontSize: `${e.ftSizRate}`
                                    }}>

                                    </i>

                                    <i className={e.rate5} id="iRate-boxCard" style={{
                                        fontSize: `${e.ftSizRate}`
                                    }}>

                                    </i>
                                    {/* END Rate */}

                                    {/* ketRate */}
                                    <p className="ketRate-boxCard">
                                        {e.ketRate}
                                    </p>
                                    {/* END ketRate */}
                                </div>
                                {/* END Column Rate */}

                                {/* Column Stock */}
                                <div className="colStock-content3-boxCard">
                                    {/* Stock */}
                                    <p className="stock-boxCard">
                                        {e.stock}
                                    </p>
                                    {/* END Stock */}
                                </div>
                                {/* END Column Stock */}
                            </div>
                            {/* END Col2 */}

                            {/* Btn View AND Buy */}
                            <div className="cont-btn-view-buy-boxCard">
                                {/* Btn View */}
                                <Link href="#" className="btnView-boxCard" id="btnVB-boxCard">{e.btnView}</Link>
                                {/* END Btn View */}

                                {/* Btn Buy */}
                                <Link href="#" className="btnBuy-boxCard" id="btnVB-boxCard">{e.btnBuy}</Link>
                                {/* END Btn Buy */}
                            </div>
                            {/* END Btn View AND Buy */}
                        </main>
                        {/* END Content3 */}
                    </div>
                )
            })}
        </>
    )
}

export default BoxCard