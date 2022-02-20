import React from 'react'
import styled from "styled-components"

const ButtonHome = ({text}) => {
  return (
    <Btn>
        {text}

    </Btn>
  )
}

export default ButtonHome


const Btn = styled.button`
 font-size: 15px;
 padding: 0.7em 2.7em;
 letter-spacing: 0.06em;
 font-family: inherit;
 border-radius: 0.6em;
 cursor: pointer;
 overflow: hidden;
 transition: all 0.3s;
 line-height: 1.4em;
 border: 2px solid var(--primary-color);
 background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
 color: var(--primary-color);
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
}

&:hover {
 color: white;
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
}

&:before {
 content: "";
 left: -4em;
 width: 4em;
 height: 100%;
 top: 0;
 transition: transform .4s ease-in-out;
 background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
}

&:hover:before {
 transform: translateX(15em);


`