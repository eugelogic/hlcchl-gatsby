import React from 'react'
import '../style.css'
import './page-title.scss'

const PageTitle = ({ children }) => (
<div className="page-title-bar">

    <div className="page-title-bar__container">

        <h1>{children}</h1>

    </div>

</div>
)

export default PageTitle
