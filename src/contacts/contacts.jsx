import ig from "./ig.png"
import linked from "./linked.png"
import px from "./px.png"
import wa from "./wa.png"
import Nav from '../navbar/nav'
import mail from './envelope.png'
export default function Contacts(){
    return(
        <>
        <Nav></Nav>
        <div className="con">
            <h2>Personal Contacts</h2><br/>
            <p>If you want to get in contacts with me,<br/> please contact me through one of these social media below</p>
            <ul><br/><br/>
                <li><img src={mail}/><a className="lol1">Email : christopher.fx45@gmail.com</a></li>
                <li><img src={wa}/><a className="lol1">WhatsApp : +62 812 9258 3010</a></li>
                <li><img src={ig}/><a className="lol1"href="https://www.instagram.com/fx_chris45/">Instagram: @fx_chris45</a></li>
                <li><img src={linked}/><a className="lol1"href="https://www.linkedin.com/in/christopher-darmawirya-0510bb220/">Linkedin : Christopher Darmawirya</a></li>
                <li><img src={px}/><a className="lol1"href="https://www.pixiv.net/en/users/78404771">Pixiv: @chestnut_45</a></li>
            </ul>
        
        </div>
        </>
    )

}