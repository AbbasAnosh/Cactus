import React from 'react'
import styled from "styled-components"


const BuySell = () => {
  return (
    <Section id="section2">
      <div className="row">
        <div className="col" id="Section1">
          <img src="agency.svg" alt="buySell" />
          <div className="text">
            <h2>
              We Offer a  <span>Full Range</span> of
              <span> Digital Marketing</span> Services!
            </h2>
            <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.
              Fusce egeabus consectetuer turpis, suspendisse.
            </p>
            <h5>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer</h5>
          </div>
        </div>
        <div className="col" id="Section2">
          <div className="text">
            <h2>
              Leading <span> Digital Agency </span>
              for <span> Business </span>Solutions.
            </h2>
            <p>Power-packed with impressive features and well-optimized,
              this template is designed to provide the best performance in all circumstances.
            </p>
            <h5>Its smart features make it a powerful stand-alone website building tool.</h5>
            <div className="button">
              <a href="#">
                <button class="learn-more" type="button">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <div>
                    <span class="button-text">Get Started</span>
                  </div>
                </button>
              </a>
            </div>

          </div>
          <img src="online connection.svg" alt="buySell" />
        </div>
      </div>
    </Section>
  )
}

export default BuySell



const Section = styled.div`
  background-image: url("Animated Shape.svg");
  background-repeat: no-repeat;
  margin: 9rem 10rem;
  .row{
    display:flex;
    flex-direction: column;
    gap: 11rem;
    .col{
      display:flex;
      justify-content: center;
      align-items:center;
      gap: 3rem;
      img{
        height:60vh;
        width: 70%;
      }
      h2{
        font-size:3rem;
        span{
          color: var(--primary-color);
        }
      }
      .text{
        display:flex;
        flex-direction: column;
        gap: 1rem;
        p{
          font-size:1rem;
        }
        h5{
          font-size:1.2rem;
          margin-bottom: 2rem;
        }
        
         
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: var(--font-family);
  letter-spacing: 0.1rem;
 }
 
 button.learn-more {
  width: 12rem;
  height: auto;
  
 }
 
 button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  border-radius: 1.625rem;
 }
 
 button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
 }
 
 button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
 }
 
 button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
 }
 
 button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: var(--primary-color);
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
 }
 
 
 button:hover .circle {
  width: 100%;
 }
 
 button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
 }
 
 button:hover .button-text {
  color: #fff;
 }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px) {
    margin: 2rem 1rem;
    .row{
      gap:2rem;
      .col{
        flex-direction: column;
        text-align: center;
        img{
          height: 10rem;
        }
        h2{
          font-size:1.5rem;
        }
        &:nth-of-type(2){
          flex-direction: column-reverse;
        }
      }
    }

  }
`