import React from 'react'
import './FormAlamat.scss'

const FormAlamat = ({
    title,
    valueName,
    fungsiAutoFocus,
    handle,
    placeholder,
    valueDefault
})=>{
    return(
        <>
        <label htmlFor="" className="labelGroup">
            {title}
        </label>
        <input type="text" value={valueDefault} name={valueName} className="inputGroup"
            placeholder={placeholder}
            autoFocus={fungsiAutoFocus}
            onChange={handle}
        />
        </>
    )
}

export default FormAlamat