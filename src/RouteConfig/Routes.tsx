import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import MissionContainer from '../components/Mission/index';
import MissionInfoContainer from '../components/MissionInfo/index';

function RouteConfig() {
  return (
    <>
        <Router>
            <Routes>
                <Route  path="/" element={<MissionContainer />}/>   
                <Route  path="/:id" element={<MissionInfoContainer />}/>  
                <Route  path="*" element={<MissionContainer />}/>  
            </Routes>
            
        </Router>
    </>
  );
}

export default RouteConfig