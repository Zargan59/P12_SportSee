    import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "./Data"
    import { useEffect, useState } from "react";
    import Error from "../Page/Error"
    const BaseUrl = "http://localhost:3000/user/"

    /**
     * Call of API
     * @param {id} id 
     * @returns {data}
     */

    const APIDisable = ()=>{
        return(
            <Error />
        )
    }



   
    export async function GetUserInfo(id){
        try{
            const resp = await fetch(`${BaseUrl}${id} `)
            const data =await resp.json()
            return data.data
        }
        catch (error) {
            APIDisable()
        }
    }

    export async function GetUserPerformance(id){
        try{
            const resp = await fetch (`${BaseUrl}${id}/performance `)
            const data = await resp.json()
            return data.data
        }
        catch(error){
            APIDisable()
        }
    }

    export async function GetUserActivity(id){
        try{
            const resp = await fetch (`${BaseUrl}${id}/activity `)
            const data = await resp.json()
            return data.data
        }
        catch(error){
            APIDisable()
        }
    }

    export async function GetUserSession(id){
        try{
            const resp = await fetch (`${BaseUrl}${id}/average-sessions `)
            const data = await resp.json()
            return data.data
        }
        catch(error){
            APIDisable()
        }
    }

    /* 
    
    http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
    http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
    http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
    http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

    
    */
    
    

