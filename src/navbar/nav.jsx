
import portrait from "./hutao.jpg"
import user_icon from "./icons/user.png"
import question_icon from "./icons/question.png"
import envelope_icon from "./icons/envelope.png"
import home_icon from "./icons/house.png"
import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";


export default function Nav(){
    const[open, setOpen] = useState(false);
    return(
        <>
        <div >
            <nav className="navigation">
                <h1><Link className="lol" to="/">My Website</Link></h1>
            <div className="menu-container">
                <div className="menu-triger" onClick={()=>{setOpen(!open)}}>
                    <img src= {portrait} alt="胡桃"></img>
                </div>
                <div className={`dropdown-menu ${open? 'active ':'inactive'}`}>
                    <h3> Chris<br/> <span>Website design</span></h3>
                    <ul>
                    <li className="dropdownItem">
                        <img src={home_icon}></img>
                        <Link  to="/">Home</Link>
                    </li>
                    <li className="dropdownItem">
                        <img src={user_icon}></img>
                        <Link to="/profile">My profile</Link>
                    </li>
                    <li className="dropdownItem">
                        <img src={question_icon}></img>
                        <Link to="/about">About</Link>
                    </li>
                    <li className="dropdownItem">
                        <img src={envelope_icon}></img>
                        <Link to="/contacts">Contacts</Link>
                    </li>

                    </ul>
                </div>
            </div>
            </nav>
        </div>
        </>
    )
}
