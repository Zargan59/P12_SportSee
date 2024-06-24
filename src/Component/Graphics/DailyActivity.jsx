import '../../Style/main.css'
import { BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function DailyActivity({data}){
    const redColor = '#E60000'
    const blackColor = "#282D30"

    const CustomTooltip = ({active, payload, label})=>{
        if(active && payload && payload.length){

            return (
                <div className="custom-tooltip">
                  <p >{`${payload[0].value}kg`}</p>
                  <p>{`${payload[1].value}Kcal`}  </p>
                </div>
              );
        }
    }
    return(
        <div className="dailyActivity_Content">
            <h2 className='dailyActivity_Title'>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart  data={data}>
                    <CartesianGrid vertical={false} strokeDasharray="3" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} />
                    <XAxis dataKey="calories" tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />}  />
                    <YAxis dataKey="kilogram" allowDecimals={false} tickLine={false} axisLine={false} orientation='right' domain={["dataMin - 1", "dataMax + 1"]} />
                    <YAxis dataKey="calories"  hide yAxisId="calorie" />
                    <Legend align='right' verticalAlign='top' height={50} iconType='circle'  />    
                    <Bar name="Poids (kg)" dataKey="kilogram" width={7} fill={blackColor} barSize={7} radius={[10,10,0,0]}  />
                    <Bar name="Calories brûlées(kCal)" dataKey="calories" fill={redColor} barSize={7} radius={[10,10,0,0]} yAxisId="calorie" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}