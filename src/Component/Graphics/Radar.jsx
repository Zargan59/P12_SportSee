import "../../Style/main.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

/**
 * Show the Radar activities of the user by using rechart
 * 
 * @param {number} dataUserPerformance.value 
 * @param {number} dataUserPerformance.kind 
 * @returns {JSX}
 */

export default function RadarChartPerformance({data,kind}){
    //Pour chaque données dans data
    data.forEach(element => {
        if(data[element.kind-1]){
            data[element.kind-1].kind = kind[element.kind]
        }
    });

    return(
        <div className="radarContent graphContent">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} outerRadius="75%" cx="50%" cy="50%">
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{fill:"white", fontSize:"12", fontWeight:'500'}} tickSize={10} />
                    <PolarRadiusAxis axisLine={false} tick={false} />
                    <Radar name="id" dataKey="value" stroke="#FF0101" fill="#FF0101" radialLines={false} fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}