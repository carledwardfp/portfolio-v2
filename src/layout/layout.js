import React from "react"
import Header from "../components/Header"
import "../../static/css/index.css"

const Layout = props => {
  return (
    <div className="container">
      <Header />
      <div className="content">{props.children}</div>
    </div>
  )
}

export default Layout
