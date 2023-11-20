import portraits from "./mcafe.jpg"
import portrait1 from "./menu.png"
import leaf from "./leaf.png"
import { Outlet, Link } from "react-router-dom";
import Nav from '../navbar/nav'
export default function Home(){
    return (
        <>
        <Nav></Nav>
        <div className="home">
        <a className="left"><img src={portraits} className="mc" alt="ManhattanCafe"/></a>
           
        <div className="right">
            <a className="aha"><img src={leaf} alt="leaf" /></a>
            <h1 className="top">Feeling Tired ? Start your morning with a coffee</h1>
            <a className="haha"><img src={portrait1} className= "menu" alt="menu"/></a>
            <ul>
                <li> <Link  to="/profile">Special Blend 1 ........................................................................ 1.60</Link></li>
                <li> <Link  to="/about">Special Blend 2 ........................................................................ 1.80</Link></li>
                <li> <Link  to="/contacts">Special Blend 3 ........................................................................ 1.90</Link></li>
                <li> Mystery blend ............................................................................. 1.50</li>
            </ul>              
            <p>Surprise Me!</p>
            <a className="aha"><img src={leaf} alt="leaf" /></a>
            

            </div>
        </div>

        </>
    )
}