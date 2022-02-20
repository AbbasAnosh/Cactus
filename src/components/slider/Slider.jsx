import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import happy from "assets/happy.png"
import data from './data';
import styled from "styled-components"

// import './Slider.css';

function Slider() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <Section className="section" id="Slider">
            <div className="title">
                <h2>
                    <span>/</span>What our customers have to say
                </h2>
            </div>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <div className="back">
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <img className="happy" src={happy} alt="happy" />
                            </div>
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </Section>
    );
}

export default Slider;


const Section = styled.div`
        background-image: url("Animated Shape.svg");
        background-repeat: no-repeat
        padding-bottom: 2rem;
        margin-bottom: 4rem;
        .title {
            text-align: center;
            margin-bottom: 2rem;
        }
        .title h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 1.8rem;
            letter-spacing:0.2rem;
        }
        .title span {
            font-size: 1.5em;
            color: var(--primary-color);
            margin-right: 1rem;
            font-weight: 700;
        }
        .section-center {
            margin: 0 auto;
            margin-top: 4rem;
            width: 80vw;
            height: 450px;
            max-width: 800px;
            text-align: center;
            position: relative;
            display: flex;
            overflow: hidden;
            
            .back{
                padding: 2rem 4rem; 
                background-color: rgba(0,0,0,0.3);
                border-radius:6px;
               
                
            }
            &:hover{
                border-bottom: 3px solid var(--primary-color);
            }
            }
        }
        
        .person-img {
            border-radius: 50%;
            margin-bottom: 1rem;
            width: 150px;
            height: 150px;
            object-fit: cover;
            border: 4px solid var(--primary-color);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .happy{
            width: 10%;
        }
        article h4 {
            text-transform: uppercase;
            color: var(--primary-color);
            letter-spacing: 0.2rem;
            margin-bottom: 0.25rem;
        }
        .title {
            text-transform: capitalize;
            margin-bottom: 0.75rem;
            color: white;
            letter-spacing: 0.1rem;
            
        }
        .text {
            max-width: 25em;
            margin: 2rem auto;
            margin-top: 2rem;
            line-height: 2;
            color: white;
            letter-spacing: 0.1rem;
        }
        .icon {
            font-size: 3rem;
            margin-top: 1rem;
            color: hsl(21, 62%, 45%);
        }
        .prev,
        .next {
            position: absolute;
            top: 200px;
            transform: translateY(-50%);
            background: hsl(210, 22%, 49%);
            color: white;
            width: 1.25rem;
            height: 1.25rem;
            display: grid;
            place-items: center;
            border-color: transparent;
            font-size: 1rem;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: all 0.3s linear;
        }
        .prev:hover,
        .next:hover {
            background: var(--primary-color);
        }
        .prev {
            left: 0;
        }
        .next {
            right: 0;
        }
       
        article {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.3s linear;
        }
        article.activeSlide {
            opacity: 1;
            transform: translateX(0);
        }
        article.lastSlide {
            transform: translateX(-100%);
        }
        article.nextSlide {
            transform: translateX(100%);
        }

@media screen and (min-width: 280px) and (max-width:1080px) {
    
    .title{
        h2{
            font-size:1.5rem;
            margin-right:1rem;
            span{
                visibility: hidden;
            }
        }
    }
    .section-center{
        margin-top: 1rem;
            .back{
                padding: 4rem 0;
                h4{
                    font-size:0.9rem;
                }
                .title{
                    font-size: 0.9rem;
                }
                .text{
                    font-size: 0.7rem;
                }
                .happy{
                    width: 10%;
                }
                
        }
    }
    }
`