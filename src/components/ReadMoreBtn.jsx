import React from 'react'
import styled from "styled-components"

const ReadMoreBtn = ({text}) => {
    return (
        <Btn>
        {text}
        </Btn>
    )
}

export default ReadMoreBtn

const Btn = styled.button`
--color: var(--primary-color);
 --color2: white;
 padding: 0.8em 1.75em;
 background-color: transparent;
 border-radius: 6px;
 border: .3px solid var(--color);
 transition: .5s;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 z-index: 1;
 font-weight: bold;
 font-size: 14px;
 letter-spacing:0.2rem;
 font-family: var(--font-family);
 text-transform: uppercase;
 color: var(--color);
}

&::after, &::before {
 content: '';
 display: block;
 height: 100%;
 width: 100%;
 transform: skew(90deg) translate(-50%, -50%);
 position: absolute;
 inset: 50%;
 left: 25%;
 z-index: -1;
 transition: .5s ease-out;
 background-color: var(--color);
}

&::before {
 top: -50%;
 left: -25%;
 transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

&:hover::before {
 transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

&:hover::after {
 transform: skew(45deg) translate(-50%, -50%);
}

&:hover {
 color: var(--color2);
}

&:active {
 filter: brightness(.7);
 transform: scale(.98);
}

`