import React from 'react'
import {LaunchProfileQuery, Maybe} from '../../generated/graphql'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './styles.css'

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
 bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
interface Props{
    data: LaunchProfileQuery
}
const MissionInfo:React.FC<Props> = ({data}) => {
   
    const classes = useStyles();
    let linkLength: number = data.launch?.links?.flickr_images?.length as number 
    let image:string = data.launch?.links?.flickr_images && linkLength > 0 ? data.launch?.links?.flickr_images[0] as string : '../../res/spacexlogo.png' 
    return (
        <div className="missionCard">   
            <Typography variant="h4" className="mainTitle" component="h2">
                Launch Details
            </Typography>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {data.launch?.mission_name} 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {data.launch?.details}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Launch Year : {data.launch?.launch_year} <br/>
                        Launch Site : {data.launch?.launch_site?.site_name} <br/>
                        Rocket Name : {data.launch?.rocket?.rocket_name} <br/>
                        Rocket Type : {data.launch?.rocket?.rocket_type} 
                    </Typography>
                    <Typography variant="body2" component="p" className={data.launch?.launch_success ? 'Success': 'Failed'}>
                        Status : {data.launch?.launch_success ? 'Successful': 'Failed'}
                    </Typography>
                </CardContent>
                {
                    linkLength > 0  ? (
                        <CardMedia
                        className={classes.media}
                        image={image}
                        title="Paella dish"
                        />
                    ) : (
                    <div className="imageInfo">
                        <Typography variant="body2" component="p" >
                            No image available
                        </Typography>
                    </div>
                    )
                }
                
                
                
                
            </Card>
        </div>
    )
}

export default MissionInfo;