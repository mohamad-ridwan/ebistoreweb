import React from 'react'
import { useState } from 'react'

import './BtnNotifPromo.scss'

const BtnNotifPromo = () => {

    // Create Hide / View Modal
    let [hide, setHide] = useState(false)
    // END Create Hide / View Modal

    return (
        <>
            {/* Btn Notif Promo */}
            <button className="circ-btn-notifPromo" style={{
                animation: 'AbtnCircle 300ms ease-in-out 1'
            }} onClick={function () {
                setHide(!hide)
            }}>
                <i className="fas fa-bell" id="btn-notifPromo"></i>
            </button>
            {/* END Btn Notif Promo */}

            {/* Modal Notif Promo */}
            <div className="modal-notifPromo" style={{
                left: hide ? '8px' : '-180px',
                transition: '.4s'
            }}>
                {/* Column1 */}
                <div className="col1-notifPromo">
                    <p className="txt-notifPromo">
                        Saatnya beli dengan yang promo!!
                    </p>
                </div>
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-notifPromo">
                    <button className="btn-look-notifPromo">
                        Look!
                    </button>
                </div>
                {/* END Column2 */}
            </div>
            {/* END Modal Notif Promo */}
        </>
    )
}

export default BtnNotifPromo