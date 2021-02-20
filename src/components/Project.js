import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { lightBlue } from "@material-ui/core/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%!important",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  icons: {
    backgroundColor: lightBlue[500],
  },
  madeWith: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
}))

export default function Project(props) {
  const classes = useStyles()

  return (
    <a href={props.link} target="_blank" rel="noreferrer">
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{props.type}</Avatar>}
            title={props.title}
            subheader={props.subtitle}
          />
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Todo App (practice project)"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.summary}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Made with:
            </Typography>
          </CardContent>
          <CardContent className={classes.madeWith}>
            {props.madeWith.map((icon, key) => {
              if (typeof icon === "string") {
                return (
                  <CardHeader
                    key={key}
                    className="noMargin"
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        className={classes.icons}
                        style={{ fontSize: 10 }}
                      >
                        {icon}
                      </Avatar>
                    }
                  />
                )
              }
              return (
                <CardHeader
                  key={key}
                  className="noMargin"
                  avatar={
                    <Avatar aria-label="recipe" className={classes.icons}>
                      <FontAwesomeIcon icon={icon} />
                    </Avatar>
                  }
                />
              )
            })}
          </CardContent>
        </Card>

    </a>
  )
}
