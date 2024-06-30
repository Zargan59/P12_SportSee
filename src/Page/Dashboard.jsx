"useclient"
import {USER_ACTIVITY,USER_PERFORMANCE , USER_MAIN_DATA, USER_AVERAGE_SESSIONS} from "../Mock/Data.js"
import { GetUserActivity, GetUserInfo, GetUserPerformance, GetUserSession } from "../Mock/API.js"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Error from "./Error.jsx"
import NavBarHorizontal from "../Component/NavBar/NavBarHorizontal"
import NavBarVertical from "../Component/NavBar/NavBarVertical"

import DailyActivity from "../Component/Graphics/DailyActivity.jsx"
import AverageSession from "../Component/Graphics/AverageSession"
import RadarGraph from "../Component/Graphics/Radar"
import Score from "../Component/Graphics/Score"

import NutritionInfos from "../Component/Nutrition/NutritionInfos.jsx"

/**
 * HomePage
 * @returns {JSX}
 */

function App() {
    const userId =  useParams()
    const[dataUser, setDataUser] = useState([])
    const [dataUserPerformance, setUserPerformance] = useState([])
    const [dataUserActivity, setUserActivity] = useState([])
    const [dataUserSession, setUserSession] = useState([])

    const  callUserInfo = async ()=>{
        const userInfo = await GetUserInfo(userId.userId) 
        setDataUser(userInfo)
    }
    
    const callUserPerformance = async ()=>{
        const userPerformance = await GetUserPerformance(userId.userId)
        setUserPerformance(userPerformance)
    }
    const callUserActivity = async ()=>{
        const userActivity = await GetUserActivity(userId.userId)
        setUserActivity(userActivity)
    }
    const callUserAverageSession = async ()=>{
        const userAverageSession = await GetUserSession(userId.userId)
        setUserSession(userAverageSession)
    }

    useEffect(()=>{
        callUserInfo()
        callUserPerformance()
        callUserActivity()
        callUserAverageSession()
    },[])        
    if(dataUser==undefined){
        return(
            <div>
                <Error />
            </div>
        )
    }
    else{
        if(dataUser.length !==0 && dataUserPerformance.length !==0 && dataUserActivity.length !==0 && dataUserSession.length !==0 ){
        
            return (
              <div >
                <NavBarHorizontal />
                      <main>
                      <NavBarVertical />
          
                      <div className="userContent">
                          <div className="helloUser">
                              <h1>Hello <span className="username"> {dataUser.userInfos.firstName} </span> </h1>
                              <p className="congratMessage">Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
                          </div>
          
                          <div className="graphicContent">
                              <div className="Activity_graphicContent">
                                  <DailyActivity data={dataUserActivity.sessions} />
                                  <div className="bottom_main_grapicContent">
                                      <AverageSession data={dataUserSession.sessions} />
                                      <RadarGraph data = {dataUserPerformance.data} kind={dataUserPerformance.kind} />
                                      <Score data = {dataUser.todayScore || dataUser.score} />
                                  </div>
                              </div>
                              <div className="right_graphicContent">
                                  <NutritionInfos data={dataUser} />
                              </div>
                          </div>
                          </div>
                      </main>
          
              </div>
            );
        }
    }
    }


export default App;
