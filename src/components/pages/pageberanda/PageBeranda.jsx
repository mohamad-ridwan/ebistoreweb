import React from 'react'
import { useState } from 'react'
import CarouselCard from '../../../componentcard/carouselcard/CarouselCard'
import JudulCard from '../../../componentcard/judulcard/JudulCard'
import Sec10rbCard from '../../../componentcard/sec10rbcard/Sec10rbCard'
import Sec15rbCard from '../../../componentcard/sec15rbcard/Sec15rbCard'

import './PageBeranda.scss'

const PageBeranda = () => {

    // Create Modal Desc App
    let [modal, setModal] = useState(false)
    // END Create Modal Desc App


    return (
        <>
            <div className="wrapper-pageBeranda">
                {/* Section 1 */}
                <section className="section-1-pageBeranda">
                    {/* Btn Description App */}
                    <button type="button" className="descApp-pageBeranda" onClick={function () {
                        setModal(!modal)
                    }}>
                        {/* Row1 */}
                        <div className="row1-cont1-pageBeranda">
                            <p className="txt-btn-descApp-pageBeranda">
                                Klik Untuk Lihat Deskripsi Aplikasi
                            </p>
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-cont1-pageBeranda">
                            <i className="fas fa-sort-down" style={{
                                transform: modal ? 'rotate(180deg)' : 'rotate(0deg)',
                                marginTop: modal ? '6px' : '-6px',
                                transition: '.3s'
                            }}></i>
                        </div>
                        {/* END Row2 */}
                    </button>
                    {/* END Btn Description App */}

                    {/* Modal Description App */}
                    <div className="modalDesc-app-pageBeranda" style={{
                        display: modal ? 'flex' : 'none'
                    }}>
                        <p className="txtModal-descApp-pageBeranda">
                            Suka dengan jajanan yang ringan dan murah seperti makaroni?,
                            <br />
                            Di EbiStore ini telah menyediakan berbagai macam aneka makaroni yang di buat EbiStore!,
                            <br />
                            Penasaran? Scroll aja..
                        </p>
                    </div>
                    {/* END Modal Description App */}
                </section>
                {/* END Section 1 */}

                {/* Section 2 */}
                <section className="section-2-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul="Dengan Semua Harga" />
                    {/* END Judul */}

                    {/* Column Card Carousel */}
                    <CarouselCard />
                    {/* END Column Card Carousel */}
                </section>
                {/* END Section 2 */}

                {/* Section 3 */}
                <section className="section-3-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul="Serba 10rb" />
                    {/* END Judul */}

                    {/* Section Serba 10rb */}
                    <Sec10rbCard/>
                    {/* END Section Serba 10rb */}
                </section>
                {/* END Section 3 */}

                {/* Section 4 */}
                <section className="section-4-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul="Serba 15rb" />
                    {/* END Judul */}

                    {/* Section Serba 15rb */}
                    <Sec15rbCard/>
                    {/* END Section Serba 15rb */}
                </section>
                {/* END Section 4 */}

                {/* Section 5 */}
                <div className="section-5-pageBeranda" id="secGroup">
                    {/* Judul */}
                    <JudulCard txtJudul="Promo Akhir Pekan" />
                    {/* END Judul */}
                </div>
                {/* END Section 5 */}
            </div>
        </>
    )
}

export default PageBeranda