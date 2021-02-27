import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Maybe } from 'graphql/jsutils/Maybe';
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'

type Launch = {
  flight_number:number | null | undefined
  mission_id:Maybe<String>[] | null | undefined
  mission_name:Maybe<String> | null | undefined
  launch_success:boolean | null | undefined
  launch_year:number | null | undefined
  launch_date_utc: Maybe<String> | null | undefined
}

interface Props{
    launch: Launch
}
const useStyles = makeStyles(theme=>({
  root: {
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]: {
      width:'90%',
    },
    [theme.breakpoints.up('sm')]:{
      width:'70%',
    }
  },
  success: {
    color:'green'
  },
  fail: {
    color:'#e50000'
  },
  missionTopic: {
    display:'flex'
  },
  pos:{
    marginTop: 10
  },
  detailButton:{
    color: '#005288 !important',
    borderColor:  '#005288 !important'
  }
}));

const  CardLayout:React.FC<Props> = ({launch})=> {
  const classes = useStyles();
  let navigate= useNavigate()

  const openInfo=(id: string)=>{
     navigate(id)
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6} sm={6}>
            <Typography variant="h5" component="h2">
              {`${launch.flight_number}. Mission: `}
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} sm={6}>
            <Typography className={launch.launch_success ? classes.success : classes.fail} variant="h5" component="h2">
              {launch.mission_name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <Typography className={classes.pos} variant="body2" component="p">
              Date: {moment(`${launch.launch_date_utc}`).format("MMMM Do YYYY")}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button  variant="outlined" className={classes.detailButton} size="small" onClick={()=>openInfo(`${launch.flight_number}`)}>Details</Button>
      </CardActions>
    </Card>
  );
}
export default CardLayout;