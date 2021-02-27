import React from 'react'
import {useLaunchListQuery} from '../../generated/graphql'
import LoaderProgress from '../ProgressBar/LoaderProgress';
import MissionList from './MissionList';
import './styles.css'

const MissionContainer = () => {

    const { data, error, loading} = useLaunchListQuery();
    
    if(loading){
        return (<div><LoaderProgress/></div>)
    }

    if(error || !data){
        return (<div><h1>Error :(</h1></div>)
    }
   console.log(data)
    return (
        <div className="missionCard">
            <MissionList data={data} />
        </div>
    )
  
}

export default MissionContainer;