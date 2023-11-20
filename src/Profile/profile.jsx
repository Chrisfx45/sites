import Nav from '../navbar/nav'
import photo from './image.jpg'
export default function Profile(){
    return (
        <>
        <Nav></Nav>
        <div className='pro'>
            <h4>Profile</h4>
            <div className='dis'>
            <div className='rs'>
                <img src={photo}/>
                <div className='skil'>
                <p>Programing Languages</p>
                <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Mathlab</li>
                    <li>C</li>
                    <li>C#</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li></li>
                </ul>
                </div>

            </div>

            <div className='ls'>
                <div className='lang'>
                <br/>
                <p>Languages</p><br/>

                <div className='kont'>
                <p>Japanese</p>
                <p>Indonesian</p>
                <p>English</p>
                </div>
                </div>
                <div className='ed'>
                    <br/>
                    <p className='edu'>Education</p>
                    <p className='edu2'>ISSE Degree : Ritsumeikan University</p>
                    <p className='edu2'>Science Course : SMAK 5 PENABUR</p>
                </div>
                <div className='oth'>
                <h5>Other Skills and Hobbies:</h5>
                <div className='hob'>
                <p>Data analysis</p>
                <p>Drawing</p>
                <p>Guitar</p>
                <p>Karaoke</p>
                <p>Voice Acting</p>
                <p>Game Development</p>
                </div>
            </div>
            </div>


        </div>
        </div>

        </>
    )
}