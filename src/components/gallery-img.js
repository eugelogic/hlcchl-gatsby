import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

function renderImage(file) {
  return <Img fluid={file.node.childImageSharp.fluid} />
}

const GalleryImg = function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) => {
        const image = images.edges.find(image => image.node.relativePath === props.src);
        if (!image) {
          return <div style={{ color: `red` }}>Cannot find image: {props.src}</div>;
        }
        return renderImage(image);
      }}
    />
  )
}

export default GalleryImg
