import './Style/About.modules.scss';

import { BsFillCalendarDateFill, BsFillEnvelopeFill, BsFillPhoneFill, BsFillMapFill } from 'react-icons/bs';

export function AboutMe() {
    return (
        <>
            <div id="About">
                <main  className="about-zone" data-aos="fade-up">
                    <section className="container">
                        <article className="section-title">
                            <h2 className="title">Sobre mim</h2>
                            <hr />                         
                        </article> 
                        
                        <article className="about-content">
                            <aside className='about' data-aos="fade-up">
                                <h5 class="about-title">Olá, tudo bem?</h5><br />
                                <p>Eu me chamo Bruno, tenho 20 anos e atualmente estou morando em Jandira-SP e estou em busca do meu primeiro emprego como desenvolvedor.</p>                                     <br />   
                                <p>Já finalizei o ensino médio. Fiz curso na Microlins e no Instituto PROA e faço cursos na área de TI na Danki Code e na Udemy, sou programador Full-Stack, mas estou focado no desenvolvimento Front-end e design, e estou fazendo faculdade de análise e desenvolvimento de sistema na Estácio.</p>                                    <br />    
                                <p>Tenho conhecimentos em programação web, de games e de aplicativos. Na área de design, sei fazer animações e editar vídeos, tenho conhecimento básico na área de banco de dados. </p>                                        <br />    
                                <p>Sou bastante esforçado e focado, dedicado, criativo, detalhista, e objetivo. Gosto sempre de aprender coisas novas e ampliar meus conhecimentos, principalmente quando o assunto é tecnologia que eu amo. Bom esse foi um “pequeno” resumo sobre mim e meus conhecimentos, muito obrigado!</p>
                            </aside>
                            
                            <aside className='information-about' data-aos="fade-up">
                                <ul>
                                    <li>
                                        <div className="info-icon">
                                            <BsFillCalendarDateFill className='aboutIcon' />
                                            <p><span>Data de nascimento:</span> 06 Abril 2002</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-icon">
                                            <BsFillEnvelopeFill className='aboutIcon' />
                                            <p><span>E-mail:</span> bruno.costa.c06@gmail.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-icon">                                                
                                            <BsFillPhoneFill className='aboutIcon' />
                                            <p><span>Telefone:</span> +55 (11)94388-4494</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-icon">                                                                             
                                            <BsFillMapFill className='aboutIcon' />
                                            <p><span>Endereço:</span> Jandira-SP</p>
                                        </div>
                                    </li>
                                </ul>
                            </aside>
                        </article> 
                    </section> 
                </main> 
            </div>            
        </>
    );
}