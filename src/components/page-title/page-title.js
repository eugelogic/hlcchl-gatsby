import React from 'react'
import './page-title.scss'

const PageTitle = ({ children }) => (
<div className="page-title-bar">

    <div className="page-title-bar__container">

        <h1>{children}</h1>

    </div>

</div>
)

export default PageTitle
