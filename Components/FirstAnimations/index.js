"use client";

import { useEffect, useRef, useState } from "react";

function FirstAnimations() {
  const divContainer = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      const scroll = window.pageYOffset / 5;
      const baseWidth = 50; // Sabit bir başlangıç genişliği
      const width = baseWidth + scroll; // Scroll ile genişlik artışı

      if (divContainer.current && !isVisible) {
        divContainer.current.style.width = width + '%';
      }
    };

    const handleScroll = () => {
      window.requestAnimationFrame(changeWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const handleVisibility = () => {
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
    
  };

  console.log(isVisible);

  return (
    <div className="py-40 flex justify-center pr-10">
      <div
      className={`divContainer ${isVisible ? 'grow' : ''}`}
      ref={divContainer} style={{width: '50%'}}
    >
      Div İçeriği
    </div>
    </div>
  )
}

export default FirstAnimations
