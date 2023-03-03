import './Style/Header.modules.scss';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import logo from "./Images/logo.webp"; 

import { BsFillSunFill, BsMoonFill } from "react-icons/bs"; 

import { Link } from "react-scroll";
import { ThemeContext } from '../../Common/Context/ThemeContext';

export function Header() {

	const context = useContext(ThemeContext);		
	
	const [isActive, setIsActive] = useState(false);
	  
	const handleClick = () => {
		setIsActive(!isActive);
	};

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	
	const handleScroll = () => {
		setScroll(window.pageYOffset);
	};

	const [scrollColor, setScrollColor] = useState(0);

	const [backgroundColorScroll, setBackgroundColor] = useState("transparent");

	const [ColorScroll, setColor] = useState("white");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollColor(window.pageYOffset);
			setBackgroundColor(scrollColor > 900 ? "var(--bg-color)" : "transparent");		
			setColor(scrollColor > 900 ? "var(--body-color)" : "white");
		});
	}, [scrollColor]);

	return (
	<>
		<header style={{ background: backgroundColorScroll }} className={`navigation ${scroll < 50 ? "" : "sticky"}`}>  
			<figure className='container-logo'>
				<img alt='Logo' src={ logo } className={`logo ${scroll < 10 ? "" : "sticky"}`}></img>
			</figure>
			
			<section className={`toggleArea ${scroll < 10 ? "" : "sticky"}`}>
				<BsFillSunFill className='sun' />
					<input type="checkbox" id="switch" class="toggle-control" />
					<label onClick={context.toggleThemeMode} for="switch"></label>
				<BsMoonFill className='moon' />
			</section>  

			<nav className="desktop">
				<ul style={{ color: ColorScroll }}>
					<li><Link activeClass="select" spy={true} to="Home"><NavLink to="">Inicio</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} to="About"><NavLink to="">Sobre</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} to="Skills"><NavLink to="">Skills</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} to="Courses"><NavLink to="">Formação</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link></li>					
					<li><Link activeClass="select" spy={true} to="Service"><NavLink to="">Serviços</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} to="Contact"><NavLink to="">Contato</NavLink></Link></li>
				</ul>
			</nav>
				
			<section className="mobile">
				<nav className="navbar">
					<ul className={`nav-menu ${isActive ? "active" : "nav-menu"}`}>
						<figure className='container-logo-mobile'>
							<img alt='Logo' src={ logo } className='logo-mobile'></img>
						</figure>
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="Home"><NavLink to="">Inicio</NavLink></Link>
						</li>
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="About"><NavLink to="">Sobre</NavLink></Link>
						</li>					
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="Skills"><NavLink to="/">Skills</NavLink></Link>
						</li>
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="Courses"><NavLink to="">Formação</NavLink></Link>
						</li>					
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link>
						</li>
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="Service"><NavLink to="">Serviços</NavLink></Link>
						</li>
						<li className="nav-item">
							<Link activeClass="select-mobile" spy={true} to="Contact"><NavLink to="">Contato</NavLink></Link>
						</li>
					</ul>
				
					<button onClick={handleClick}>
						<article className={`hamburger ${isActive ? "active" : "hamburger"}`}>
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</article>     
					</button>                                       
				</nav>
			</section>	
		</header>
	</>
	);
}