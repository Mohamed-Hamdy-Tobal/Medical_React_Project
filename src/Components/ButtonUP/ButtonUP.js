import React, { useState, useEffect } from 'react';
import './ButtonUP.css'

const ButtonUP = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    

    return (
        <>
            <button onClick={scrollToTop}  className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} type="button"><i class="fa fa-chevron-up"></i></button>
        </>
    )
}

export default ButtonUP
