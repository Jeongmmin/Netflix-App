import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import "./Nav.css";

const NavWrapper = styled.div`
  display: flex;
  top: 0;
  height: 50px;
  padding: 0.5em 2em;
  position: fixed;
  width: 100%;
  z-index: 2;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${(props) => (props.show ? "black" : "none")};

  @media (max-width: 768px) {
    padding: 1em;
    height: 60px;
  }
`;

const Logo = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png");
  width: 100px;
  height: 25px;
  box-sizing: border-box;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    background-image: url("https://pngimg.com/uploads/netflix/netflix_PNG15.png");
    height: 35px;
  }
`;

const MenuWrapper = styled.div`
  /* width: 500px; */
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  background-image: url("https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFL-R1hOKDGCh5tQpzoWopyEj-VC5e3k56E_Py8x7JOY-OPb75167pPMhn0ppi9FMdPTtkV6IVnjIwuo_NxSkPBA89A.png?r=2ca");
  width: 35px;
  height: 35px;
  background-size: cover;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 4px;
  margin-right: 5px;
  width: 28px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-in;
  /* :before {
    content: "👀";
  } */
  :focus {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: white;
    width: auto;
    border: none;
    outline: none;
  }
`;

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.addEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    // search Input의 value를 입력할 때 마다 navigate에 자동으로 입력되게 설정
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    // show가 true일 때는 nav만 false 일 때는 nav__black도 적용
    <NavWrapper show={show}>
      <Logo onClick={() => (window.location.href = "/Netflix-App/")} />
      <MenuWrapper>
        <SearchInput
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="👀 영화를 검색해 주세요"
        ></SearchInput>
        <Avatar />
      </MenuWrapper>
    </NavWrapper>
  );
}
