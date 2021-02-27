import React from 'react'
import {useLaunchProfileQuery} from '../../generated/graphql'
import MissionInfo from './MissionInfo'
import {useParams} from 'react-router-dom'
import LoaderProgress from '../ProgressBar/LoaderProgress'
const MissionInfoContainer = ()=>{
    const { id } = useParams();
    const { data, loading, error } = useLaunchProfileQuery({
          variables: {
            id: id
           },
         });

        if(loading){
            return (<div><h1><LoaderProgress/></h1></div>)
        }
    
        if(error || !data){
            return (<div><h1>Error :(</h1></div>)
        }

        return (
            <div>
                <MissionInfo data={data}/>
            </div>
        )
}

export default MissionInfoContainer