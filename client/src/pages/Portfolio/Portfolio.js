import React from 'react'
import './Portfolio.css'
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper' 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ratl from './assets/RATL.png'
import animal from './assets/GUARDIAN.png'
import adventure from './assets/ADVENTURE.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(150),
      height: theme.spacing(200),
      // background: "red"
    },
  },
  card: {
    display: "inline",
    position: "relative",
    height: 200,
    width: 200
  },
  media: {
    height: 200,
    width: 800,
    marginLeft: 200
  }
}));

const Portfolio = () => {
  const classes = useStyles();
return(
  
<Paper id="paper"variant="outlined" elevation={3}>
      <h1>Full Stack Portfolio</h1>
      <Card className={classes.card}>
      <CardActionArea> 
        <Button size="small" color="primary" >
          <a href="https://github.com/bnguyen78/RATL">Github</a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://glacial-reaches-79922.herokuapp.com/">Deployed Version</a>
        </Button>
        <CardMedia
          className={classes.media}
          component="img"
          image={ratl}
          title="RATL"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h1">
            RATL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h1" >
          Full stack application that leverages MERN stack. A career management application for job seekers that assists with potential employment opportunities.
          Manages and tracks the status of applications and scrapes Indeed.com for more opportunities.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
      <Button size="small" color="primary" >
          <a href="https://github.com/bnguyen78/guardian">Github</a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://agile-mesa-62002.herokuapp.com/">Deployed Version</a>
        </Button>
        <CardMedia
          className={classes.media}
          component="img"
          image={animal}
          title="Guardian"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Guardian
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h1">
          An application for animal shelters that allows for basic administrative/operational functions. 
                      Integration of front-end tech HTML/CSS/JS, Express and MySQL database.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
      <Button size="small" color="primary" >
          <a href="https://github.com/bnguyen78/adventure-time">Github</a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://bnguyen78.github.io/adventure-time/">Deployed Version</a>
        </Button>
        <CardMedia
          className={classes.media}
          component="img"
          image={adventure}
          title="Adventure Time"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Adventure Time
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h1">
          An application for travelers that leverages different APIs to help their travel needs. Utilizing Google API and Dark Skies API, travelers find restaurants, hotels, and things to do and plan around a budget accordingly.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>


      </Paper>

)
}

export default Portfolio