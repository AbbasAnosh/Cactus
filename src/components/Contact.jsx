import React from 'react'
import styled from "styled-components"
import ReadMoreBtn from './ReadMoreBtn'


const Contact = () => {
    return (
        <Section>
            <div className="section" id="contact">
                <div>
                    <h2>Do you have any <span className="highlight"> projects </span>? <br />
                        <span className="highlight">Contact</span> us
                    </h2>
                </div>
                <div className="btn">
                    <a href="#"><ReadMoreBtn text="contact us" /></a>
                </div>
            </div>
        </Section>
    )
}

export default Contact


const Section = styled.div`
    background-image: url("Animated Shape.svg");
    background-repeat: no-repeat;
    display:flex;
    padding: 6rem 4rem;
    flex-direction: center;
    align-items: center;
    justify-content: center;    
    .section{
        display:flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        padding: 4rem 4rem; 
        background-color: rgba(0,0,0,0.3);
        border-radius:6px;
        h2{
            font-size:1.8rem;
            letter-spacing:0.1rem;
            .highlight{
                color: var(--primary-color);
            }
        }
        
    }
    
  @media screen and (min-width: 280px) and (max-width:1080px) {
     .section{
    
         h2{
             font-size: 1.2rem;
         }
     }
    }
`