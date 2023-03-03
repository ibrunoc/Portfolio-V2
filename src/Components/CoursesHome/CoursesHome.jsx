import './Style/CoursesHome.modules.scss';
import { NavLink } from "react-router-dom";

export function CoursesHome() {
    return (
        <>
            <div id='Courses'>
                <main className="courses-zone-home" data-aos="slide-up">
                    <section className="container">
                        <article className="section-title">
                            <h2 className="title">Formação Acadêmica</h2>
                            <hr /> 
                            <p className='sub-title-courses'>Saiba mais sobre minha formação acadêmica, como cursos e faculdade que eu já fiz e faço.</p>
                            <NavLink to="/Courses"><button className='main-btn-2'>Veja Mais</button></NavLink>                            
                        </article>
                    </section>
                </main>
            </div>            
        </>
    );
}