import './Style/Error.modules.scss';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Loading from '../../Components/Loading/Loading';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimatedCursor from "react-animated-cursor";
import MouseParallax from '../../Common/Context/MouseParallax';

function Error() {
  
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
              <div>
                <section className="error-404">           
                  <MouseParallax />
                  <article className="container-erro"> 
                    <h2 className="text-404">404</h2>   
                      <div className='text-erro'>
                          <p>Ué? Parece que você se perdeu...</p>
                          <p>Volte para a página inicial!</p>
                          <button><Link to="/">Inicio</Link></button>
                      </div>
                  </article>
                </section>	           
              </div>   
          </div>         
        }         
      </>	    
    );
}

export default Error;

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