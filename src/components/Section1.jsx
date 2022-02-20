import React from 'react'
import styled from "styled-components"
import img1 from 'assets/1.png'
import img2 from 'assets/2.png'
import img3 from 'assets/3.png'

const Section1 = () => {

    const links = [
        {
            images: img1,
            title: "Speed Optimization",
        },
        {
            images: img2,
            title: "SEO and Backlinks",
        },
        {
            images: img3,
            title: "Content Marketing",
        },
    ];

    return (
        <Section id="section1">
            <div className="seo">
                <h3>How does it <span className="highlight"> works</span></h3>
                <p>One theme that serves as
                    an easy-to-use operational toolkit
                    that meets customer's needs.</p>
            </div>
            <div className="grid">
                {links.map(({ images, title }) => {
                    return (
                        <div className="blog" key={title}>
                            <img src={images} alt="Blog Images" />
                            <div className="data">
                                <h3>{title}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                                </p>
                                <a href="#">Readmore</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

export default Section1


const Section = styled.div`
    background-image: url("Animated Shape.svg");
    background-repeat: no-repeat;
    margin: 4rem 11rem;
    display:flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    .seo{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        text-align: center;
        h3{
            font-size:2.2vw;
            .highlight{
                color: var(--primary-color);
            }
        }
        p{
            justify-content: justify;
            font-weight: medium;
            font-size:1vw;
        }
    }
    .grid{
        display: flex;
        gap: 3rem;
        margin: 3rem 0;
        .blog{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width:30%;
            }
            .data{
                padding:1rem;
                gap: 1rem;
                display:flex;
                flex-direction: column;
                font-size: 0.9rem;
                font-weight: 100;
                margin-top: 1rem;
                h3{
                    text-align: center;
                }
                p{
                    text-align: center;
                    font-size:1vw;
                }
                a{
                    text-align: center;
                    color: white;
                    text-decoration: none;
                    &:hover{
                        color: var(--primary-color);
                    }
                }
            }
        }
    }

    @media screen and (min-width:280px) and (max-width:1080px){
        margin: 2rem 1rem;
        .seo{
            h3{
                font-size:1.4rem;
            }
            p{
                font-size:0.8rem;
            }
        }
        .grid{
            display:flex;
            flex-direction:column;
            gap: 2rem;
            .blog{
                .data{
                    p{
                        font-size:0.8rem;
                    }
                }
            }
        }
  }
    }

`