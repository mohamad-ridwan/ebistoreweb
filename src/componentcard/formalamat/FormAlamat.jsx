import React from 'react'
import './FormAlamat.scss'

const FormAlamat = ({
    title,
    valueName,
    fungsiAutoFocus,
    handle,
    placeholder,
    valueDefault,
    submit,
    type
}) => {
    return (
        <>
            <form onSubmit={submit} className="form-alamat">
                <label htmlFor="" className="labelGroup">
                    {title}
                </label>
                <input type={type} value={valueDefault} name={valueName} className="inputGroup"
                    placeholder={placeholder}
                    autoFocus={fungsiAutoFocus}
                    onChange={handle}
                />
            </form>
        </>
    )
}

export default FormAlamat