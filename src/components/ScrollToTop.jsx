import React, {useState} from 'react'
import styled from "styled-components"
import { AiOutlineArrowUp } from "react-icons/ai"


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 90 ? setVisible(true) : setVisible(false);
  })
  return (
    <Div>
      <a href="#" className={`${visible ? " " : "none"}`}>
        <AiOutlineArrowUp/>
      </a>
    </Div>
  )
}

export default ScrollToTop



const Div = styled.div`
  a {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: 0.4s ease-in-out;
    svg{
      font-size: 1.3rem;
      color: black;
    }
  }
  .none{
    opacity: 0;
    visibility: hidden;
  }
  @media screen and (min-width: 280px) and (max-width:1080px) {
    display: none;
  }
`;