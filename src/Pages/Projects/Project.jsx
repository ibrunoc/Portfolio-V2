import './Style/Project.modules.scss';
import { useState, useEffect } from 'react';

import Loading from '../../Components/Loading/Loading';
import { HeaderProject } from '../../Components/Header/HeaderProject/HeaderProject';
import { Footer } from '../../Components/Footer/Footer';
import { Scroll } from '../../Components/ScrollTop/Scroll';

import Blind from './Images/blind.webp';
import Governo from './Images/governo.webp';
import Hotel from './Images/hotel.webp';
import Instagram from './Images/Instagram.webp';
import Pizzaria from './Images/pizzaria.webp';
import Placeup from './Images/placeup.webp';
import Pokedex from './Images/pokedex.webp';
import Todolist from './Images/todolist.webp';
import Caoselheiro from './Images/caoselheiro.webp';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimatedCursor from "react-animated-cursor";

function Projects() {

    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, [])

    return (
        <>
            {loading?      
                <Loading />:
                <div>
                    <AnimatedCursor innerSize={8} outerSize={35}  innerScale={1} outerScale={1.7} outerAlpha={0} hasBlendMode={true} outerStyle={{border: '3px solid var(--subtitleInvert-color)'}} innerStyle={{backgroundColor: 'var(--subtitleInvert-color)'}} />
                    <HeaderProject />
                        <main id='Project' className="projects-zone" data-aos="fade-up">
                            <section className="container">
                                <article className="section-title">
                                    <h2 className="title">Projetos</h2>
                                    <hr />
                                </article>

                                <section className="info-page-projects">
                                    <article className="container-projects" data-aos="fade-right">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>PlaceUP</h2>
                                                <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Placeup } alt="Placeup" /></a>                                                                                                                                                                                                                                                          
                                                <p>Meu TCC feito no PROA, a PlaceUP  uma plataforma online que auxilia o comerciamente a precificar e expor seus produtos, e disponibiliza uma vitrine online para que os clientes possam reservar seus produtos favoritos sem sair de casa!</p>
                                            </div>
                                        </aside>
                                    </article>  
                                    <article className="container-projects" data-aos="fade-left">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Animal Space</h2>
                                                <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Hotel } alt="hotel" /></a>                                                                                                                                                                                                                     
                                                <p>Um tema de projeto sortiado e feito no curso do Proa. Um hotel para animais.</p>
                                            </div>
                                        </aside>
                                    </article>
                                    <article className="container-projects" data-aos="fade-right">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Governo de SP</h2>
                                                <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Governo } alt="governo" /></a>                                                                                                                                                                            
                                                <p>Um projeto feito no Proa em grupo, escolher um site e recriar o site do zero e o design. O site que escolhemos para recriar o site do Governo de SP, já que o design não agradava.</p>
                                            </div>                    
                                        </aside>
                                    </article>
                                    <article className="container-projects" data-aos="fade-left">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Água na Boca</h2>
                                                <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Pizzaria } alt="Pizzaria" /></a>                                                                                                                                  
                                                <p>Uma landing page para uma pizzaria do meu bairro.</p>
                                            </div>
                                        </aside>
                                    </article>    
                                    <article className="container-projects" data-aos="fade-right">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Clone do Instagram</h2>
                                                <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Instagram }  alt="Instagram" /></a>                                                                                        
                                                <p>Este foi o um desafio no curso do Proa a criar um clone do Instagram de Maio de 2022.</p>
                                            </div>
                                        </aside> 
                                    </article>        
                                    <article className="container-projects" data-aos="fade-left">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Pokedex</h2>
                                                <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Pokedex } alt="Pokedex" /></a>
                                                <p>Esse é um projeto simples, onde eu criei uma pokedex com base no vídeo do Manual do Dev.</p>
                                            </div>
                                        </aside>
                                    </article>   
                                    <article className="container-projects" data-aos="fade-right">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>To Do List</h2>
                                                <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Todolist } alt="Todolist" /></a>                                            
                                                <p>Esse é um ToDoList simples que eu criei apenas para treinar.</p>
                                            </div>
                                        </aside>
                                    </article> 
                                    <article className="container-projects" data-aos="fade-left">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Blind Vision</h2>
                                                <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Blind } alt="Blind" /></a>                                                                                      
                                                <p>Esse foi um desafio feito no Proa onde era apenas criar uma ideia e um site básico.</p>
                                            </div>
                                        </aside>
                                    </article> 
                                    <article className="container-projects" data-aos="fade-up">
                                        <aside className="my-project">
                                            <div className="project-image">
                                                <h2>Caoselheiro</h2>
                                                <a href="https://caoselheiro-ecoverse.vercel.app/" rel="noreferrer" target="_blank"><img width={900} height={400} src={ Caoselheiro } alt="Blind" /></a>                                                                                      
                                                <p>Esse foi um desafio de um processo seletivo.</p>
                                            </div>
                                        </aside>
                                    </article> 
                                </section>              
                            </section> 
                        </main>       
                    <Footer />
                    <Scroll />   
                </div>
            } 
        </>	    
    );
}

export default Projects;

AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99,   
  
    offset: 120, 
    delay: 0, 
    duration: 1000, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
});