import React from 'react'
import '../style.css'

const DOWBar = ({ children }) => (
    <div
        style={{
            textTransform: `uppercase`,
            color: `white`,
            backgroundColor: `#189960`,
            padding: 15,
        }}
    >

        <h3
            style={{
                fontSize: 20,
                fontWeight: `bold`,
                marginBottom: 0,
            }}
        >

            {children}

        </h3>

    </div>
)

export default DOWBar
