import Nav from '../navbar/nav'
import photo from './image.jpg'
export default function About(){
    return (
        <>
        <Nav></Nav>
        <div className='abt'>
            <a><img src={photo}/></a>
            <div className='abtright'>
                <h4>About Me</h4>
                <p>I am a fresh graduate who is looking for<br/>
                a job as a software development or doing data analysis. 

                </p><br/><br/>

                <p> I enjoy tackling difficult coding problems and try
                to implement them in my mini projects. I also enjoy learning
                many programming languages as it allows me to have more freedom
                as a developer.</p><br/>
                <p>When I am not coding, I usually train my brain's creative side by 
                    engaging in many arts activity.
                </p>
            </div>
        </div>
        </>
    )
}