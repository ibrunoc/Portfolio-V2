import './Style/Skills.modules.scss';
import { useState } from 'react';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Skills() {

    const [isVisibleFront, setIsVisibleFront] = useState(false);    
    const [isActiveFront, setIsActiveFront] = useState(false);
  
    const toggleVisibilityFront = () => {
      setIsVisibleFront(!isVisibleFront);
      setIsActiveFront(!isActiveFront);
    };

    const [isVisibleBack, setIsVisibleBack] = useState(false);    
    const [isActiveBack, setIsActiveBack] = useState(false);

    const toggleVisibilityBack = () => {
        setIsVisibleBack(!isVisibleBack);
        setIsActiveBack(!isActiveBack);
    };

    
    const [isVisibleO, setIsVisibleO] = useState(false);    
    const [isActiveO, setIsActiveO] = useState(false);

    const toggleVisibilityO = () => {
        setIsVisibleO(!isVisibleO);
        setIsActiveO(!isActiveO);
    };

    const percentage = 90;
    const percentage2 = 80;
    const percentage3 = 50;
    const percentage4 = 60;
    const percentage5 = 45;
    const percentage6 = 35;    
    const percentage7 = 25;

    return (
        <>
            <div>
                <main id='Skills' className="skills-zone">            
                    <section className="section-title">
                        <h2 className="title">Skills</h2>
                        <hr />
                    </section>   

                    <section className="skills">
                        <article id="frontEnd" className='frontEnd'>                        
                            <button className="buttonSkills" onClick={toggleVisibilityFront}>   
                                <aside className={`hamburgerFront ${isActiveFront ? "active" : ""}`} onClick={toggleVisibilityFront}>                           					
                                    <span className="barSkills"></span>
                                    <span className="barSkills"></span>
                                </aside>   
                                <h1>Front-End</h1>
                            </button>  
                            {isVisibleFront &&
                                <aside className='circular-container'>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>HTML</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage2} text={`${percentage2}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>CSS</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage3} text={`${percentage3}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>SaSS</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage4} text={`${percentage4}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>JavaScript</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>JQuery</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>React.JS</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>Next.JS</h1>
                                        </div>
                                        <div className='circular'>
                                            <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                            <h1>BootStrap</h1>
                                        </div>
                                </aside>
                            }      
                        </article>
                    </section>                     

                    <section className="skills">
                        <article id="backEnd" className='backEnd'>
                            <button className="buttonSkills" onClick={toggleVisibilityBack}>   
                                <aside className={`hamburgerBack ${isActiveBack ? "active" : ""}`} onClick={toggleVisibilityBack}>                           	                           					
                                    <span className="barSkills"></span>
                                    <span className="barSkills"></span>
                                </aside>
                                <h1>Back-End</h1>
                            </button> 
                            {isVisibleBack &&
                                <aside className='circular-container'>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage3} text={`${percentage3}%`} counterClockwise styles={buildStyles({ textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>PHP</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Python</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Node.Js</h1>
                                    </div>   
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage7} text={`${percentage7}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>React Native</h1>
                                    </div>   
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>TypeScript</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Java</h1>
                                    </div>  
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>C#</h1>
                                    </div>                          
                                </aside> 
                            }          
                        </article>
                    </section> 

                    <section className="skills">
                        <article id="outros" className='outros'>
                        <button className="buttonSkills"onClick={toggleVisibilityO}>   
                                <aside className={`hamburgerO ${isActiveO ? "active" : ""}`} onClick={toggleVisibilityO}>  
                                    <span className="barSkills"></span>
                                    <span className="barSkills"></span>
                                </aside>                                
                                <h1>Designer, Animação, Desenho e Hardware</h1>	                                  
                            </button> 
                            {isVisibleO &&
                                <aside className='circular-container'>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>PhotoShop</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Paint Tool Sai</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Figma</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage4} text={`${percentage4}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Cinema 4D</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>3Ds Max</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>After Effects</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Montagem de PC</h1>
                                    </div>
                                </aside>
                            }      
                        </article>
                    </section>
                </main>
            </div>            
        </>
    );
}  