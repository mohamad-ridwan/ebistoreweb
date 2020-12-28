import React from 'react'
import { Link } from 'react-router-dom'
import './BoxWhite.scss'

const BoxWhite = (props) => {
    return (
        <>
            <Link to={props.page} className="box-white"
                style={{
                    padding: `${props.paddBox}`,
                    margin: `${props.margBox}`,
                    position: `${props.positionBox}`,
                    backgroundColor: `${props.bgColor}`,
                    boxShadow: `${props.bxShadow}`
                }}
                onClick={props.onClick}
            >
                <div className="btn-delete-card"
                    style={{
                        display: `${props.displayBtnDelete}`
                    }}
                >
                    <i class="far fa-trash-alt"
                        onClick={props.deleteProduct}
                    ></i>
                </div>
                <img src={props.img} alt="" className="img-card"
                    style={{
                        height: `${props.heightImg}`,
                        width: `${props.widthImg}`,
                        maxHeight: `${props.maxHeightImg}`
                    }}
                />

                <div className="box-deskripsi-food">
                    <p className="label-food">
                        {props.label}
                    </p>
                    <p className="name-food lineGroup" style={{
                        margin: `${props.marginName}`
                    }}>
                        {props.name}
                    </p>
                    <p className="price-food lineGroup"
                        style={{
                            margin: `${props.marginName}`
                        }}
                    >
                        {props.price}
                    </p>
                </div>

                {/* box total beli */}
                <div className="box-total-beli"
                    style={{
                        display: `${props.display}`
                    }}
                >
                    <p className="total-dibeli">
                        {props.titleTotalBeli}
                    </p>

                    <div className="input-total">
                        <button className="btn-mines btnGroup"
                            onClick={() => props.handleMinus()}
                        >
                            <i className="fas fa-minus" id="btnGroup"></i>
                        </button>
                        <input type="number" className="input-angka" value={props.inputAngka} />
                        <button className="btn-plus btnGroup"
                            onClick={() => props.handlePlus()}
                        >
                            <i className="fas fa-plus" id="btnGroup"></i>
                        </button>
                    </div>
                </div>
            </Link>

            <button className="btn-beli"
                style={{
                    display: `${props.displayBeli}`
                }}>
                {props.beli}
            </button>
        </>
    )
}

export default BoxWhite