import React from "react"
import "../../static/css/index.css"
import "../../static/css/home.modules.css"
import Layout from "../layout/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import MyCard from "../components/MyCard"
import Skills from "../components/Skills"

export default function Home() {
  const goDown = () => {
    const width = window.innerWidth > 1280 ? 100 : 80
    window.scrollBy(0, window.innerHeight  -  width)
  }

  return (
    <Layout>
      <div className="to-bottom">
        <FontAwesomeIcon icon={faChevronCircleDown} onClick={goDown} />
      </div>
      <section className="home">
        <div>
          <span>HELLO! I AM</span>
          <h1>CARL EDWARD</h1>
          <h2>WELCOME TO MY PORTFOLIO</h2>
        </div>
      </section>
      <section className="about">
        <div>
          <div className="title">
            <h2>about me</h2>
            <hr />
          </div>
          <div className="about-content">
            <MyCard image={"/portfolio-v2/images/bg3.JPG"} />
            <Skills />
          </div>
        </div>
      </section>
    </Layout>
  )
}