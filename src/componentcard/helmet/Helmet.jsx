import React from 'react'
import HelmetPage from 'react-helmet'

const Helmet = ({ titleHelmet, contentHelmet }) => {
    return (
        <>
            <HelmetPage>
                <title>{titleHelmet}</title>
                <meta name="description" content={contentHelmet} />
            </HelmetPage>
        </>
    )
}

export default Helmet