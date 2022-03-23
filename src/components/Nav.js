import React , { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  "./Nav.css"

export default function Nav() {
const [show, handleShow] = useState(false);
const [searchValue, setSearchValue] = useState("")
const navigate = useNavigate();


useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    });
    return () => {
        window.removeEventListener("scroll", () => {});
    };
}, []);

const handleChange= (e) => {
    // search Input의 value를 입력할 때 마다 navigate에 자동으로 입력되게 설정
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
}

    return (
        // show가 true일 때는 nav만 false 일 때는 nav__black도 적용
        <nav className={`nav ${show && "nav__black"}`}>     
            <img 
            alt="Netflix logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
            className='nav__logo'
            onClick={() => (window.location.href = "/Netflix-App/")}
            />

            <input 
                value={searchValue} 
                onChange={handleChange}
                className="nav__input"
                type="text"
                placeholder='영화를 검색해 주세요 👀'
            />

            <img 
            alt="User logged" 
            src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFL-R1hOKDGCh5tQpzoWopyEj-VC5e3k56E_Py8x7JOY-OPb75167pPMhn0ppi9FMdPTtkV6IVnjIwuo_NxSkPBA89A.png?r=2ca" 
            className='nav__avatar'
            />
        </nav>
    )
}
