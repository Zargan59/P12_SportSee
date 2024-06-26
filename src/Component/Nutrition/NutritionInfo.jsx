import "../../Style/main.css"

/**
 * 
 * @param {string} colors Hexadecimal code
 * @param {string} imageSource url of image
 * @param {number} Title  
 * @param {string} Description type of energy 
 * 
 * @returns {JSX}
 */

export default function NutrititonInfo({color,imageSource,Title,Description}){
    return(
        <div className="nutritionInfo_Content">
            <div style={{backgroundColor : `${color}1A`}} className="nutritionInfo_IconContent">
                <img src= {imageSource} className="nutritionInfo_Icon" />
            </div>
            <div className="nutritionInfo_DescritpionContent">
                <h2 className="title"> {Title} </h2>
                <p className="description"> {Description} </p>
            </div>
        </div>
    )
}