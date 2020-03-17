import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
// import Form from '../../components/Form'
// import UserAPI from '../../utils/UserAPI'
// import UserContext from '../../utils/UserContext'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(150),
      height: theme.spacing(50),
    },
  }
}));


const Contact = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>

    
  <Paper id="paperContact"variant="outlined" elevation={3}>
    <h1>Contact Me</h1>
    <Typography><a href="https://www.linkedin.com/in/bryant-nguyen-695b0219a/"> Connect with me on LinkedIn! </a></Typography>
    <br />
    <br />
    <Typography>Email: Bryant_72002@yahoo.com</Typography>
    <br />
    <br />
    <Typography>GitHub: <a href="https://github.com/bnguyen78">https://github.com/bnguyen78</a></Typography>

    {/* <Form /> */}
    </Paper>
    </div>
  )
}

export default Contact