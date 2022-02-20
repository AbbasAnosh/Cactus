import React from 'react'
import styled from "styled-components"
import ReadMoreBtn from './ReadMoreBtn'

const Section3 = () => {
  return (
    <Section id="section3">
      <div className="post">
        <h2>Our <span className="highlight">Case</span> Studies</h2>
        <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
      </div>
      <div className="section">
        <div className="data1">
          <div className="image1">
            <img className="image__img" src="1.png" alt="" />
            <div className="img__overlay img__overlay__blur">
              <div className="image__title">Online Marketing</div>
              <a href="#"><ReadMoreBtn text={"Read More"}/></a>
            </div>
          </div>
          <div className="sub">
            <h3>Online Marketing</h3>
            <p>Seo, Marketing</p>
          </div>
        </div>
        <div className="data2">
          <div className="image2">
            <img className="image__img" src="2.png" alt="" />
            <div className="img__overlay img__overlay__blur">
              <div className="image__title">Web Development</div>
              <a href="#"><ReadMoreBtn text={"Read More"}/></a>
            </div>
          </div>
          <div className="sub">
            <h3>Web Development</h3>
            <p>Developing, Designing</p>
          </div>
        </div>
        <div className="data3">
          <div className="image3">
            <img className="image__img" src="3.png" alt="" />
            <div className="img__overlay img__overlay__blur">
              <div className="image__title">Web Designing</div>
              <a href="#"><ReadMoreBtn text={"Read More"}/></a>
            </div>
          </div>
          <div className="sub">
            <h3>Web Designing</h3>
            <p>Designing, Developing</p>
          </div>
        </div>
        <div className="data4">
          <div className="image4">
            <img className="image__img" src="4.png" alt="" />
            <div className="img__overlay img__overlay__blur">
              <div className="image__title">Software Development</div>
              <a href="#"><ReadMoreBtn text={"Read More"}/></a>
            </div>
          </div>
          <div className="sub">
            <h3>Software Development</h3>
            <p>Developing, Designing</p>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Section3


const Section = styled.div`
  background-image: url("Animated Shape.svg");
  background-repeat: no-repeat;
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .post{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    .highlight{
      color: var(--primary-color)
    }
    h2{
      font-size:2.5rem;
      
    }
    p{
      font-size:1.5rem;
    }
    
  }
  .section{
    display: flex;
    align-items: center;
    margin: 4rem 4rem;
    gap: 2rem;
    .data1{
      background-color: rgba(0,0,0,0.3);
      .image1{
        position: relative;
        width: 300px;
      }
      .image__img{
        display:block;
        width: 100%;
      }
      .img__overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition:opacity 0.2s;
        gap:1rem;
        &:hover{
          opacity: 1;
        }
        &:hover > * {
          transform: translateY(0);
        }
        .image__title{
          font-size:1rem;
          font-weight:bold
          letter-spacing:1rem;
        }
      }
      .img__overlay > * {
        transform: translateY(20px);
        transition:opacity 0.2s;
      }
    
      .img__overlay__blur{
        backdrop-filter: blur(5px);
      }
      .sub{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        padding: 1rem;
        h3{
          letter-spacing: 0.2rem;
        
        }
        p{
          letter-spacing: 0.
        }
      }
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover{
        border-color: var(--primary-color);
      }
    }
    
    .data2{
      background-color: rgba(0,0,0,0.3);;
      .image2{
        position: relative;
        width: 300px;
      }
      .image__img{
        display:block;
        width: 100%;
      }
      .img__overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition:opacity 0.2s;
        gap:1rem;
        &:hover{
          opacity: 1;
        }
        &:hover > * {
          transform: translateY(0);
        }
       
      }
      .img__overlay > * {
        transform: translateY(20px);
        transition:opacity 0.2s;
      }
    
      .img__overlay__blur{
        backdrop-filter: blur(5px);
      }
      .sub{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        padding: 1rem;
        h3{
          letter-spacing: 0.2rem;
    
        }
        p{
          letter-spacing: 0.1rem;
        }
      }
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover{
        border-color: var(--primary-color);
      }
    }
    .data3{
      background-color: rgba(0,0,0,0.3);;
      .image3{
        position: relative;
        width: 300px;
      }
      .image__img{
        display:block;
        width: 100%;
      }
      .img__overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition:opacity 0.2s;
        gap:1rem;
        &:hover{
          opacity: 1;
        }
        &:hover > * {
          transform: translateY(0);
        }
        .image__title{
          font-size:1rem;
          font-weight:bold
          letter-spacing:1rem;
        }
      }
      .img__overlay > * {
        transform: translateY(20px);
        transition:opacity 0.2s;
      }
    
      .img__overlay__blur{
        backdrop-filter: blur(5px);
      }
      .sub{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        padding: 1rem;
        h3{
          letter-spacing: 0.2rem;
        }
        p{
          letter-spacing: 0.1rem;
        }
      }
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover{
        border-color: var(--primary-color);
      }
    }
    .data4{
      background-color: rgba(0,0,0,0.3);;
      .image4{
        position: relative;
        width: 300px;
      }
      .image__img{
        display:block;
        width: 100%;
      }
      .img__overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition:opacity 0.2s;
        gap:1rem;
        &:hover{
          opacity: 1;
        }
        &:hover > * {
          transform: translateY(0);
        }
        .image__title{
          font-size:1rem;
          font-weight:bold
          letter-spacing:1rem;
        }
      }
      .img__overlay > * {
        transform: translateY(20px);
        transition:opacity 0.2s;
      }
    
      .img__overlay__blur{
        backdrop-filter: blur(5px);
      }
      .sub{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        padding: 1rem;
        h3{
          letter-spacing: 0.2rem;
        }
        p{
          letter-spacing: 0.1rem;
        }
      }
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover{
        border-color: var(--primary-color);
      }
    }
    
  }
  @media screen and (min-width: 1080px) and (max-width:1400px) {
    .section{
      display: flex;
      flex-direction: row;
      gap: 0.9rem;
    }
    }  

  @media screen and (min-width: 280px) and (max-width:1080px) {

    .section{
        display: flex;
        flex-direction: column;
        .sub{
          h3{
            font-size:1rem;
          }
          p{
            font-size:1rem;
          }
        }
      }
    }
    margin:2rem 1rem;
    .post{
      h2{
        font-size:2rem;
      }
      p{
        font-size:1.1rem;
      }
    }
  

  }


}


`