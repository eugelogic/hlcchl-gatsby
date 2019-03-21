import React from 'react'

import GalleryImg from '../components/gallery-img/gallery-img'
import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const GalleryPage = () => (
  <LayoutPage pageTitle="Gallery">
    <SEO title="Gallery" />

    <h2 className="center">Anja’s memorial mosaic</h2>

    <div className="three-col-gallery-grid">
        <GalleryImg src={`Anjas-Mosaic-Memorial-01.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-02.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-03.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-04.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-05.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-06.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-07.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-08.jpg`} layout="three-col-gallery-image-wrapper"/>
        <GalleryImg src={`Anjas-Mosaic-Memorial-09.jpg`} layout="three-col-gallery-image-wrapper"/>
    </div>

  </LayoutPage>
)

export default GalleryPage
