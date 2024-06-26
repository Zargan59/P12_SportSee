import "../../Style/main.css"
import NutritionInfo from "./NutritionInfo"
import { GetUserInfo } from "../../Mock/API"
import Protein from "../../Asset/NutritionIcon/chicken.png"
import Calories from "../../Asset/NutritionIcon/energy.png"
import Glucide from "../../Asset/NutritionIcon/apple.png"
import Lipide from "../../Asset/NutritionIcon/cheeseburger.png"
import {USER_MAIN_DATA} from "../../Mock/Data"
import { useState,useEffect } from "react"

/**
 * @param {number} id 
 * @param {object} keyData 
 * @param {number} todayScore or score   
 * @param {object} userInfos 
 * 
 * @returns {JSX}
 */
const id = 18
const user = USER_MAIN_DATA.find((element)=>element.id == id)


export default function NutrititonInfos({data}){
    return(
        <div className="nutritionInfos_Content">
            <NutritionInfo color="#FF0000" imageSource={Calories} Title={`${data.keyData.calorieCount}Kcal`} Description="Calories"/>
            <NutritionInfo color="#4AB8FF" imageSource={Protein} Title={`${data.keyData.proteinCount}g`} Description="Proteines"/>
            <NutritionInfo color="#F9CE23" imageSource={Glucide} Title={`${data.keyData.carbohydrateCount}g`} Description="Glucides"/>
            <NutritionInfo color="#FD5181" imageSource={Lipide} Title={`${data.keyData.lipidCount}g`} Description="Lipides"/>
        </div>
    )
}