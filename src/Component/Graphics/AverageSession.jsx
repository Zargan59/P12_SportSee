"use client"
import "../../Style/main.css"
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer, CartesianGrid, Rectangle  } from "recharts"

/**
 * Show the avergage session of the user by using rechart
 * 
 * @param {string} dataUserSession.day
 * @param {array} dataUserSession.sessionLength
 * 
 * @returns {JSX}
 */


export default function AverageSession({data}){
    let NewDaysTab= data 
    NewDaysTab.unshift(data[0])

    NewDaysTab.push(data[data.length-1])
    const Days = ["L","L","M","M","J","V","S","D"]
    const formattedData = NewDaysTab.map((session, index) => ({
        day: Days[index],
        sessionLength: session.sessionLength,
      }))
    const CustomCursor = (props) =>{
        const {points} = props
        const {x,y} = points[0]
        return(
            <Rectangle fill="#000" opacity="10%" x={x} y={y} width={1500} height={10000} />
        )
    }

 
    const CustomTooltip = ({active, payload})=>{
        if(active && payload && payload.length){
            return (
                <div className="custom-tooltip custom-tooltip_Session">
                    <p>{payload[0].payload.sessionLength} min </p>
                </div>
              );
        }
    }

    return(
        <div className="sessionDuration graphContent">
            <h2>Durée moyenne des sessions</h2>
            <div className="averageContent">
                <ResponsiveContainer  width="100%" height="100%" >

                <LineChart data={formattedData} outerRadius="75%" margin={{
                     top: 0,
                     right:0,
                     left:0,
                     bottom: 0
                }}>
                    <CartesianGrid  stroke="transparent"/>
                    <XAxis height="60" dataKey="day" padding={{ left: 0, right: 0 }} axisLine={false} tickLine={false} tick={{fill: 'white', opacity:"0.5"}}  />
                    <YAxis dataKey="sessionLength"  hide domain={["dataMin -30", "dataMax +30"]} tickLine={false}/>
                    <Tooltip  content={<CustomTooltip />}  cursor={<CustomCursor/>} />
                    <Line y={80}   stroke="white" opacity={0.5} strokeWidth="2" dataKey='sessionLength' type="monotone" dot={false} activeDot={{fill:"white" ,stroke: 'white', strokeWidth: 2, r: 6 }} />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}