import React from 'react'
import { Component } from 'react'
import './FormLogin.scss'
import bgLogin from '../../img/bgmakaroni2.jpg'
import google from '../../img/google (1).png'
import { Link, useHistory } from 'react-router-dom'
import BtnCard from '../btncard/BtnCard'
import { useState } from 'react'

const FormLogin = (props) => {

    // const histori = useHistory();

    // const handleHome = ()=>{
    //     histori.push('/beranda')
    // }

    let [show, setShow] = useState(false)

    return (
        <>
            <div className="wrapper-login">
                <section className="bg-login">
                    <Link to='/login' className="goLogin"
                        style={{
                            display: `${props.goLogin}`
                        }}
                    >
                        Go Login
                    </Link>
                    <img src={bgLogin} alt="" className="img-login" />
                    <div className="bg-transparant">
                        <p className="wellcome">
                            wellcome to ebistore
                        </p>
                        <div className="box-title">
                            <p className="title-login">
                                {props.title}
                            </p>
                            <div className="garis-login">

                            </div>
                        </div>


                        <form className="form-login">
                            <div className="box-input email"
                                style={{
                                    display: `${props.displayUser}`
                                }}
                            >
                                <i className="fas fa-user iconLeft"></i>
                                <input type="text" className="txt-input" placeholder="Masukkan Username" id={props.displayName}
                                    onChange={props.onChangeUsername}
                                    value={props.valueUsername}
                                />
                                <div className="garis-email">

                                </div>
                            </div>
                            <div className="box-input email">
                                <i className="fas fa-envelope iconLeft"></i>
                                <input type="text" id={props.email} className="txt-input" placeholder="Masukkan Email"
                                    onChange={props.onChangeEmail}
                                    value={props.valueEmail}
                                />
                                <div className="garis-email">

                                </div>
                            </div>
                            <form onSubmit={props.onSubmit} className="box-input">
                                <i className="fas fa-key iconLeft"></i>
                                <input type={show ? 'text' : 'password'} id={props.password} className="txt-input" placeholder="Masukkan Password"
                                    onChange={props.onChangePassword}
                                    value={props.valuePassword}
                                    onSubmit={props.onSubmit}
                                />
                                <i className={show ? 'fas fa-eye-slash eye' : 'fas fa-eye eye'}
                                    onClick={() => {
                                        setShow(!show)
                                    }}
                                ></i>
                            </form>
                        </form>
                    </div>
                </section>

                <section className="section-bawah">
                    <div className="btn-sign-login">
                        <BtnCard
                            display={props.btnRegister}
                            heightBtn={'40px'}
                            widthBtn={'130px'}
                            btnName={'SIGN UP'}
                            marginBtn={'0'}
                            bdrRadius={"500px"}
                            bgColor={"#faba67"}
                            link={props.linkRegister}
                            goTo={props.handleRegister}
                            loading={props.loading}
                        />

                        <BtnCard
                            display={props.btnLogin}
                            heightBtn={'40px'}
                            widthBtn={'130px'}
                            btnName={'LOGIN'}
                            marginBtn={'0 0 0 10px'}
                            bdrRadius={"500px"}
                            bgColor={"#fff"}
                            goTo={props.handleLogin}
                            loading={props.loadingLogin}
                            link={props.linkHome}
                            colorP={"#ffa835"}
                        />
                    </div>

                    <div className="column-or">
                        <div className="title-or">
                            <div className="garis-kiri">

                            </div>
                            <p className="txt-or">
                                OR
                            </p>
                            <div className="garis-kanan">

                            </div>
                        </div>

                        <div className="btn-icon-login">
                            <Link
                                style={{
                                    textDecoration: 'none'
                                }}
                                onClick={props.clickGoogle}
                            >
                                <img src={google} alt="" className="icon-google" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FormLogin