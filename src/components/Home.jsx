import React from 'react';
import styled from 'styled-components';
// import ButtonHome from './ButtonHome'

const Home = () => {
  return (
    <Section id="home">
      <div className="text">

        <h1><span className="highlight">Search </span> Engine Optimization <span className="highlight"> &
          Markeeting </span>.
        </h1>
        <p>Simple is a simple template with a creative design that solves all your marketing and SEO queries.</p>
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
      <div className="image">
        <img src="marketing2.svg" alt="Social1" />
      </div>
    </Section>
  )
}

export default Home


const Section = styled.div`
  background-image: url("Animated Shape.svg");
  background-repeat: no-repeat;
  display:grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  height: 80vh;
  .image{
    img{
      width: 65%;
    }
  }
  .text{
    padding-left: 10rem;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .highlight{
      color: var(--primary-color);
    }
    h1{
      font-size:3.6vw;
    }
    p{
      font-size:1.5vw;
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
@media screen and (min-width: 280px) and (max-width: 1080px){
  display: flex;
  flex-direction:column-reverse;
  height:max-content;
  align-items:center;
  margin: 0 2rem;
  image{
    img{
      width:100%;

    }
  }
  .learn-more{
   
    
    
  }
  .text{
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size:1.9rem;
    }
    p{
      font-size:1.2rem;
    }
   
  }
}

`