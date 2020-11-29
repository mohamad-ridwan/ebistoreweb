import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import bgLogin from '../../../img/bgmakaroni2.jpg'
import google from '../../../img/google (1).png'

class Login extends Component{
    render(){
        return(
            <>
            <div className="wrapper-login">
                <section className="bg-login">
                    <img src={bgLogin} alt="" className="img-login"/>
                    <div className="bg-transparant">
                        <p className="wellcome">
                            wellcome
                        </p>
                        <div className="box-title">
                            <p className="title-login">
                                Login
                            </p>
                            <div className="garis-login">

                            </div>
                        </div>
                        

                        <form action="" className="form-login">
                            <div className="box-input email">
                                <i className="fas fa-envelope iconLeft"></i>
                                <input type="text" className="txt-input" placeholder="Masukkan Email"/>
                                <div className="garis-email">

                                </div>
                            </div>
                            <div className="box-input">
                                <i className="fas fa-key iconLeft"></i>
                                <input type="password" className="txt-input" placeholder="Masukkan Password"/>
                                <i className="fas fa-eye eye"></i>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="section-bawah">
                    <div className="btn-sign-login">
                        <button className="btn-group btn-sign">
                            SIGN UP
                        </button>
                        <Link to='/beranda' className="btn-group btn-login">
                            LOGIN
                        </Link>
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
                            <img src={google} alt="" className="icon-google"/>
                        </div>
                    </div>
                </section>
            </div>
            </>
        )
    }
}

export default Login