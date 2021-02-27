import { Typography } from '@material-ui/core'
import React from 'react'
import {LaunchListQuery} from '../../generated/graphql'
import CardLayout from './CardLayout'

interface Props{
    data: LaunchListQuery
}
const MissionList:React.FC<Props> = ({data}) => {
   
    
    return (
        <div className="cardLayout"> 
            <div className="infoContainer">
                <Typography variant="h4" className="LaunchHeading" component="h2">
                    Launches
                </Typography>
                <div className="boxConatiner">
                    <div className="SuccessBox"></div>
                    <Typography variant="body2" className="LaunchInfo" component="p">
                        = Success
                    </Typography>  
                    <div className="FailureBox"></div>
                    <Typography variant="body2" className="LaunchInfo" component="p">
                        = Failure
                    </Typography>  
                </div>
            </div>
            {data.launches?.map((launch:any, index:number)=>{
            return (
                <>
                    {launch !== null ? <CardLayout key={index} launch={{flight_number:launch.flight_number, mission_id:launch.mission_id, mission_name:launch.mission_name, launch_success:launch.launch_success, launch_year:launch.launch_year, launch_date_utc:launch.launch_date_utc}}/> : ''}
                </>
                )
            })}
        </div>
    )
}

export default MissionList;