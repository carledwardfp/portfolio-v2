import React from "react"
import "./Skills.modules.css"

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>FRONT-END DEVELOPMENT</p>
      <div className="coding-language">
        <img src={"images/html.png"} alt="html" />
        <img src={"images/css.png"} alt="css" />
        <img src={"images/js.png"} alt="javascript" />
        <img className="react" src={"images/react.png"} alt="reactjs" />
      </div>

      <p>
        I am knowledgable in ReactJS and I use it primarily for JS. I also have
        basic knowledge of Bootstrap and JQuery
      </p>
      <div className="coding-language">
        <img src={"images/bootstrap.png"} alt="bootstrap" />
        <img src={"images/jquery.png"} alt="jquery" />
        <img src={"images/npm.jpg"} alt="npm" />
        <img src={"images/github.png"} alt="git/github" />
      </div>

      <p>
        I use NPM as my Javascript package manager and Git/Github for version
        control and source code management
      </p>

      <div className="coding-language">
        <img src={"images/python.png"} alt="python" />
        <img src={"images/cpp.png"} alt="cpp" />
        <img src={"images/java.png"} alt="java" />
        <img src={"images/mysql.png"} alt="mysql" />
      </div>

      <p>
        I have basic knowledge on <em>Back End Web Development</em> specifically
        Python and C++. I am currently learning Java and MySQL.
      </p>

      <div className="resume">
        <a
          href="https://drive.google.com/drive/folders/1iViiQamXqOBW5zQU4k_46A87j11BAuSc?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>DOWNLOAD RESUME</button>
        </a>
      </div>
    </div>
  )
}

export default Skills
