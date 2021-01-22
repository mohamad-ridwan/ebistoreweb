import React from 'react'
import BtnCard from '../btncard/BtnCard'
import './Verifikasi.scss'

const Verifikasi = ({ onSubmit, onChange, loading, displayPopUp, ketNama, btnName, placeholder, icon, value, type, classCaptcha, displayBtn, displayWrapp, bgColor, color }) => {
    return (
        <>
            <div className="wrapper-registrasi-nama"
                style={{
                    display: `${displayWrapp}`
                }}
            >
                <div className="box-input-nama">
                    <form onSubmit={onSubmit} className="form-inputNama">
                        <p className="ket-nama">
                            {ketNama}
                        </p>
                        <div className="column-input">
                            <i className={icon}></i>
                            <input type={type} className="input-nama" autoFocus name="username" placeholder={placeholder} value={value}
                                onChange={onChange}
                            />
                        </div>
                    </form>

                    <BtnCard
                        display={displayBtn}
                        heightBtn={'45px'}
                        widthBtn={'98%'}
                        btnName={btnName}
                        marginBtn={'20px 0px 20px 0px'}
                        bdrRadius={"100px"}
                        bgColor={bgColor}
                        colorP={color}
                        fontWeight={"bold"}
                        bxShadow={"0 3px 5px -1px rgba(0,0,0,0.2)"}
                        goTo={onSubmit}
                        loading={loading}
                    />

                    <div className={classCaptcha} id={classCaptcha}></div>

                    <div className="wrapp-popUp-regNama"
                        style={{
                            display: `${displayPopUp}`
                        }}
                    >
                        <p className="popUp-isi-alamat">
                            Minimal Nama 4 Huruf!
                                </p>
                    </div>

                    {/* <PopUp
                        transformPopUp={popUp ? 'translateY(0px)' : 'translateY(100px)'}
                        txtPopUp={'Makaroni berhasil di tambahkan ke keranjang!'} /> */}
                </div>
            </div>
        </>
    )
}

export default Verifikasi