import './Style/Footer.modules.scss';

import { TfiEmail } from "react-icons/tfi"; 
import { BsPhone, BsLinkedin } from "react-icons/bs"; 
import { ImGithub } from "react-icons/im"; 
import { SlLocationPin } from "react-icons/sl"; 

export function Footer() { 
    return (
        <>
            <div id="Contact">                    
                <main className="contact-zone" data-aos="fade-up"> 
                    <section className="container">
                        <article className="section-title">
                            <h2 className="title">Entre em contato</h2>
                            <hr />
                        </article> 

                        <article className="boxesInfo">
                            <aside className="boxContainer" data-aos="fade-up-right">
                                <div className="contact-box">
                                    <div className="contact-info">
                                        <SlLocationPin className='Location' />                                      
                                        <h6 className="contact-title">Endereço</h6>
                                        <p>Rua Maria Tereza , Jardim Novo Horizonte, Jandira-SP, Brasil</p>
                                    </div>
                                </div>
                            </aside>
                            <aside className="boxContainer" data-aos="fade-up">
                                <div className="contact-box">
                                    <div className="contact-info">
                                        <BsPhone className='Phone' />
                                        <h6 className="contact-title">Telefone</h6>
                                        <p>+55 (11) 94388-4494</p>
                                    </div>
                                </div>
                            </aside>
                            <aside className="boxContainer" data-aos="fade-up">
                                <div className="contact-box">
                                    <div className="contact-info">
                                        <TfiEmail className='Email' />
                                        <h6 className="contact-title">E-mail</h6>
                                        <p>bruno.costa.c06@gmail.com</p>
                                    </div>
                                </div>
                            </aside>
                        </article>
                    </section>
                </main>
            
                <footer id="footer" className="footer-zone" data-aos="zoom-in">                            
                    <section className="footer-widget">
                        <article className="footer-content">
                            <p>Entre em contato <br/>
                            Estarei a disposição caso tenha alguma dúvida e deseje saber mais!</p>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/ibrunoc/"><ImGithub className='github-footer'/></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='linkedin-footer' /></a></li>
                            </ul>
                        </article>
                    </section>

                    <section className="footer-copyright">
                        <div className="copyright-text text-center pt-20">
                            <p>Bruno C. Todos os direitos reservados || Copyright © 2023.</p>
                        </div>
                    </section>                                
                </footer>
            </div>        
        </>
    );
}
