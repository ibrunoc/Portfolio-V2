import './Style/Scroll.modules.scss';
import React, { useEffect, useState } from "react";

import { MdArrowUpward } from "react-icons/md";

export const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () =>
        window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <MdArrowUpward className='arrow' />
      </a>
    </div>
  ) : null;
};