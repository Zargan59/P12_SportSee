import { NavLink } from "react-router-dom"
import Logo from "../../Asset/Logo.png"
import "../../Style/main.css"

export default function NavBarHorizontal(){
    return(
        <div className="navBarHorizontal">
            <NavLink to = '#'><img src= {Logo} alt="logo de SportSee" /></NavLink>
            <ul>
               <NavLink to="#"><li>Accueil</li></NavLink> 
               <NavLink to="#"><li> Profil</li></NavLink> 
               <NavLink to="#"><li>Réglage</li></NavLink> 
               <NavLink to="#"><li>Communauté</li></NavLink> 
            </ul>
        </div>
    )
}