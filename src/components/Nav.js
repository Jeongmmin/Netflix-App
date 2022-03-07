import React , { useState, useEffect } from 'react'
import  "./Nav.css"

export default function Nav() {
const [show, handleshow] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            handleshow(true);
        } else {
            handleshow(false);
        }
    });
    return () => {
        window.removeEventListener("scroll", () => {});
    };
}, []);

    return (
        // show가 true일 때는 nav만 false 일 때는 nav__black도 적용
        <nav className={`nav ${show && "nav__black"}`}>     
            <img 
            alt="Netflix logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
            className='nav__logo'
            onClick={() => window.location.reload()}
            />
            <img 
            alt="User logged" 
            src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFL-R1hOKDGCh5tQpzoWopyEj-VC5e3k56E_Py8x7JOY-OPb75167pPMhn0ppi9FMdPTtkV6IVnjIwuo_NxSkPBA89A.png?r=2ca" 
            className='nav__avatar'
            />
        </nav>
    )
}

// https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS4qr2qS_61cEzX-cQUXECcBxPkrPy7pTtmZ66962mOS8fvto5jE5-3qAH49eOkAJ-pCdpD4fIBqJY8-WrnTYeteIMl7.webp?r=155 (빈센조 이미지)