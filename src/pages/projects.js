import React from "react"
import Layout from "../layout/layout"
import "../../static/css/index.css"
import "../../static/css/projects.modules.css"
import Project from "../components/Project"

import { faCss3, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"

const projects = () => {
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
          <h1>PROJECTS</h1>
          <h2>
            by <span className="carl">carl</span>
            <span className="p">p</span>
            <span className="carl">.</span>
          </h2>
        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <div className="project-grid">
            <Project
              title="SIMPLE TODO APP"
              subtitle="Practice Project"
              type="PP"
              image={"/portfolio-v2/images/practice-project-todo.png"}
              summary="This is my first practice project. I tried to learn the basic functions of ReactJS by creating a simple to-do app where you can add and delete tasks."
              madeWith={[faReact, faCss3]}
            />
            <Project
              title="BTC / STOCK MARKET"
              subtitle="Practice Project"
              type="PP"
              image={"/portfolio-v2/images/practice-project-stockm.png"}
              summary="In this project, I have learned to map data from external API (free). I used asynchronous api calls with Axios and Chart JS for the visualization of data."
              madeWith={[faReact, "AXIOS", "ChartJS"]}
            />
            <Project
              title="WEATHER APP"
              subtitle="Practice Project"
              type="PP"
              image={"/portfolio-v2/images/practice-project-weather.png"}
              summary="I built a weather app where you just have to type in the name of the city you want to look up. I also used Axios to fetch the data from an external API (free)."
              madeWith={[faReact, "AXIOS"]}
            />
            <Project
              title="GITHUB CARD"
              subtitle="Practice Project"
              type="PP"
              image={"/portfolio-v2/images/practice-project-githubcard.png"}
              summary="Another project that uses external API (github) where you can search for a github user and it will show you his/her basic information."
              madeWith={[faReact, "AXIOS"]}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default projects
