import "../../Style/main.css"
import Icone from "../Icone/Icone"
import Meditation from "../../Asset/IconContent/Meditate.png"
import Swimming from "../../Asset/IconContent/Swim.png"
import Biking from "../../Asset/IconContent/Biking.png"
import Muscu from "../../Asset/IconContent/Alter.png"

import { NavLink } from "react-router-dom"

export default function NavBarVertical(){
return(
    <div className="navBarVertical">
        <div className="iconeContent">
            <NavLink to='#'><Icone  url = {Meditation}  /></NavLink>
            <NavLink to='#'><Icone  url = {Swimming}  /></NavLink>
            <NavLink to='#'><Icone  url = {Biking}  /></NavLink>
            <NavLink to='#'><Icone  url = {Muscu}  /></NavLink>
        </div>
        <div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    </div>
)
}