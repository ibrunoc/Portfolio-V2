import './Shape.modules.scss';
import React, { useRef, useState, useEffect } from 'react';

import { AiFillHtml5  } from "react-icons/ai"; 
import { FaCss3Alt, FaReact, FaSass, FaJava, FaPython, FaBootstrap  } from "react-icons/fa"; 
import { SiPhp, SiJavascript, SiTypescript, SiAdobephotoshop  } from "react-icons/si"; 

const MouseParallax = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const moveX = (clientX - centerX) / 10;
      const moveY = (clientY - centerY) / 10;
      setX(moveX);
      setY(moveY);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    let rafId;
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const moveX = (clientX - centerX) / 10;
      const moveY = (clientY - centerY) / 10;
      setX(moveX);
      setY(moveY);
    };
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const layer = ref.current.querySelector('.parallax-layer');
      layer.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', onMouseMove);
    animate();
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [x, y]);

  return (
    <div ref={ref}>
      <div className="parallax-layer" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <AiFillHtml5 className="erro-shape html" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <FaCss3Alt className="erro-shape css" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <SiJavascript className="erro-shape javascript" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <FaPython className="erro-shape python" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <FaJava className="erro-shape java" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <SiTypescript className="erro-shape typescript" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <FaBootstrap className="erro-shape bootstrap" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <FaReact className="erro-shape react" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <SiPhp className="erro-shape php" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <SiAdobephotoshop className="erro-shape photoshop" style={{ transform: `translate(${x}px, ${y}px)` }} />
        <FaSass className="erro-shape sass" style={{ transform: `translate(${x}px, ${y}px)` }} />
    </div>
  );
};

export default MouseParallax;
