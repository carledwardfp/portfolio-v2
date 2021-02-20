import React from "react"
import Layout from "../layout/layout"
import "../../static/css/photos.modules.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"

const Photography = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 4000, maxWidth: 4000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const goDown = () => {
    const width = window.innerWidth > 1280 ? 100 : 80
    window.scrollBy(0, window.innerHeight - width)
  }

  return (
    <Layout>
      <div className="to-bottom">
        <FontAwesomeIcon icon={faChevronCircleDown} onClick={goDown} />
      </div>
      <section className="hero">
        <div>
          <h1>PHOTOGRAPHS</h1>
          <h2>
            by <span className="carl">carl</span>
            <span className="p">p</span>
            <span className="carl">.</span>
          </h2>
        </div>
      </section>
      <section className="photography">
        <div className="image-container">
          <div className="image-grid">
            {data.allFile.edges.map((image, key) => (
              <Img
                key={key}
                className="image-item"
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Photography
