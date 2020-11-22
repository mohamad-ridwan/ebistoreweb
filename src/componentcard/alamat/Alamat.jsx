import React from 'react'
import { Link } from 'react-router-dom'
import './Alamat.scss'

const Alamat = (props)=>{
    return(
        <>
        <div className="container-alamat">
            <p className="txt-alamat">
                {props.data.jalan}, {props.data.desa},
                <br/>
                {props.data.kecamatan}, {props.data.kota},
                <br/>
                {props.data.provinsi}, {props.data.kodePos}
            </p>
            {/* Box Edit and delete */}
            <div className="box-edit-and-delete">
                <Link to='/pagealamat' className="btnEdit btnGroup"
                // onClick={()=> props.update(props.data)}
                >
                    <p className="edit nmGroup">
                        Edit
                    </p>
                    <i className="fas fa-edit" id="iconGroup"></i>
                </Link>
                <Link className="btnDelete btnGroup"
                onClick={()=> props.remove(props.data._id)}
                >
                    <p className="delete nmGroup">
                        Delete
                    </p>
                    <i className="fas fa-trash-alt" id="iconGroup"></i>
                </Link>     
            </div>
            {/* end Box edit and delete */}
        </div>
        </>
    )
}

export default Alamat