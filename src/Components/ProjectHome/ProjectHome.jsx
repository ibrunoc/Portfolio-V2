import './Style/ProjectHome.modules.scss';
import { NavLink } from "react-router-dom";

import Blind from '../../Pages/Projects/Images/blind.webp';
import Governo from '../../Pages/Projects/Images/governo.webp';
import Hotel from '../../Pages/Projects/Images/hotel.webp';
import Instagram from '../../Pages/Projects/Images/Instagram.webp';
import Pizzaria from '../../Pages/Projects/Images/pizzaria.webp';
import Placeup from '../../Pages/Projects/Images/placeup.webp';
import Pokedex from '../../Pages/Projects/Images/pokedex.webp';
import Todolist from '../../Pages/Projects/Images/todolist.webp';
import Caoselheiro from '../../Pages/Projects/Images/caoselheiro.webp';

export function ProjectHome() {
    return (
        <>    
            <div id="Project"> 
                <main className="projects-home">
                    <section className="container">
                        <section className="section-title">
                            <h2 className="title">Projetos</h2>
                            <hr />
                            <p>Alguns dos projetos feito por mim, em grupo e individual.</p>                            
                        </section> 
                        <section className="projects-info">                                
                            <article className="project-container">                                    
                            <h2>Animal Space</h2>
                                <aside className="project">
                                    <figure className="project-image">
                                        <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Hotel} alt="hotel" /></a>
                                    </figure>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <a className="work-title" href="https://github.com/ibrunoc/Animal-Space" rel="noreferrer" target="_blank">Link do Projeto</a>
                                        </div>
                                    </div>
                                </aside> 
                            </article>
                            <article className="project-container">                                    
                                <h2>Governo de SP</h2>
                                <aside className="project">
                                    <figure className="project-image">
                                        <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Governo} alt="governo" /></a>
                                    </figure> 
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <a className="work-title" href="https://github.com/ibrunoc/Governo-de-SP" rel="noreferrer" target="_blank">Link do Projeto</a>
                                        </div>
                                    </div>                   
                                </aside> 
                            </article>
                            <article className="project-container">                                    
                                <h2>Água na Boca</h2>
                                <aside className="project">
                                    <figure className="project-image">
                                        <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Pizzaria} alt="pizzaria" /></a>
                                    </figure>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <a className="work-title" rel="noreferrer" href="https://github.com/ibrunoc/Agua-Na-Boca" target="_blank">Link do Projeto</a>
                                        </div>
                                    </div>   
                                </aside> 
                            </article>    
                            <article className='projects-info'>
                                <aside className="placeup-container">                                                                                    
                                <h2>PlaceUP</h2> 
                                    <aside className="project">
                                        <figure className="project-image">
                                            <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={800} src={Placeup} alt="instagram" /></a>
                                        </figure>
                                        <div className="work-overlay">
                                            <div className="work-content">
                                                <a className="work-title" rel="noreferrer" href="https://github.com/Place-UP" target="_blank">Link do Projeto</a>
                                            </div>
                                        </div>  
                                    </aside>
                                </aside>  
                                <article className='instagram-pokedex-container'>
                                    <aside className="instagram">                                            
                                        <h2>Clone do Instagram</h2>
                                        <aside className="project">
                                            <figure className="project-image">
                                                <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Instagram} alt="instagram" /></a>
                                            </figure>
                                            <div className="work-overlay">
                                                <div className="work-content">
                                                    <a className="work-title" href="https://github.com/ibrunoc/Clone_Instagram" rel="noreferrer" target="_blank">Link do Projeto</a>
                                                </div>
                                            </div>  
                                        </aside> 
                                    </aside>          
                                    <article className="pokedex">
                                        <h2>Pokedex</h2>
                                        <aside className="project">
                                            <figure className="project-image">
                                                <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={Pokedex} alt="Pokedex" /></a>
                                            </figure>
                                            <div className="work-overlay">
                                                <div className="work-content">
                                                    <a className="work-title" href="https://github.com/ibrunoc/Pokedex" rel="noreferrer" target="_blank">Link do Projeto</a>
                                                </div>
                                            </div>  
                                        </aside>  
                                    </article>   
                                </article>                                    
                            </article>    
                            <article className="project-container">                                    
                                <h2>ToDo List</h2>
                                <aside className="project">
                                    <figure className="project-image">
                                        <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Todolist } alt="Todolist" /></a>
                                    </figure>
                                    <aside className="work-overlay">
                                        <div className="work-content">
                                            <a className="work-title" rel="noreferrer" href="https://github.com/ibrunoc/ToDoList" target="_blank">Link do Projeto</a>
                                        </div>
                                    </aside>
                                </aside> 
                            </article>
                            <article className="project-container">                                    
                                <h2>Blind Vision</h2>
                                <article className="project">
                                    <figure className="project-image">
                                        <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Blind } alt="Blind" /></a>
                                    </figure>
                                    <aside className="work-overlay">
                                        <div className="work-content">
                                            <a className="work-title" href="https://github.com/ibrunoc/Blind-Vision" rel="noreferrer" target="_blank">Link do Projeto</a>
                                        </div>
                                    </aside>                   
                                </article> 
                            </article>
                            <article className="project-container">                                  
                                <h2>Caoselheiro</h2>
                                <aside className="project">
                                    <figure className="project-image">
                                        <a href="https://caoselheiro-ecoverse.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Caoselheiro } alt="Blind" /></a>
                                    </figure>
                                    <aside className="work-overlay">
                                        <div className="work-content">
                                            <a className="work-title" href="https://github.com/ibrunoc/ecoverse-caoselheiro" rel="noreferrer" target="_blank">Link do Projeto</a>
                                        </div>
                                    </aside>   
                                </aside> 
                            </article>  
                        </section>                     
                        <NavLink to="/Projects"><button className="main-btn">Mais Projetos</button></NavLink>    
                    </section> 
                </main>  
            </div>                             
        </>
    );
}