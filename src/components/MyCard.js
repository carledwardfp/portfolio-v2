import React from "react"
import "./MyCard.modules.css"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"

import Icon from "@material-ui/core/Icon"
import PersonIcon from "@material-ui/icons/Person"
import SchoolIcon from "@material-ui/icons/School"
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid"
import EmailIcon from "@material-ui/icons/Email"

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}))

export default function MyCard() {
  const classes = useStyles()

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={"/portfolio-v2/images/bg3.jpg"}
        title="Carl Edward"
      />
      <div className="about-info">
        <ul className="about-info-ul">
          <li className="about-info-li">
            <Icon aria-label="name">
              <PersonIcon />
            </Icon>
            <p>Carl Edward F. Pahuyo</p>
          </li>
          <li className="about-info-li">
            <Icon aria-label="school">
              <SchoolIcon />
            </Icon>
            <p>University of the Philippines - Manila</p>
          </li>
          <li className="about-info-li">
            <Icon aria-label="mobile">
              <PhoneAndroidIcon />
            </Icon>
            <p>+63 929-812-8912</p>
          </li>
          <li className="about-info-li">
            <Icon aria-label="email">
              <EmailIcon />
            </Icon>
            <p>official.carlpahuyo@gmail.com</p>
          </li>
        </ul>
      </div>
      <CardActions
        disableSpacing
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#e7e7e7",
        }}
      >
        <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="github">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
