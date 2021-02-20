import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import "./Header.modules.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faCamera,
  faFolderOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

const Header = () => {
  const [active, setActive] = useState(false)

  const header = () => {
    if (window.scrollY > 250) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", header)
  }, [])

  /* MATERIAL UI DRAWER */

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  })

  const classes = useStyles()
  const [state, setState] = useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const theme = createMuiTheme({
    typography: {
      fontFamily: "'Assistant', sans-serif",
    },
  })

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List theme={theme}>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItem>
        </Link>

        <Link to="/projects">
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faFolderOpen} />
            </ListItemIcon>
            <ListItemText primary="PROJECTS" />
          </ListItem>
        </Link>

        <Link to="/photography">
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCamera} />
            </ListItemIcon>
            <ListItemText primary="PHOTOGRAPHY" />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  const ANCHOR = "top"

  return (
    <header className={active ? "header active" : "header"}>
      <div className="header-container">
        <div className="logo">
          carl<span>p</span>.
        </div>

        <div className="menu">
          <FontAwesomeIcon icon={faBars} onClick={toggleDrawer(ANCHOR, true)} />

          <Drawer
            anchor={ANCHOR}
            open={state[ANCHOR]}
            onClose={toggleDrawer(ANCHOR, false)}
          >
            {list(ANCHOR)}
          </Drawer>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} />
                <span>PROJECTS</span>
              </Link>
            </li>
            <li>
              <Link to="/photography">
                <FontAwesomeIcon icon={faCamera} />
                <span>PHOTOS</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
