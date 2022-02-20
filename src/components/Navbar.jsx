import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'



const Navbar = () => {

  const [navState, setNavState] = useState(false);

  return (
    <Nav>
      <div className="brand">
        <div className="logo">

          <h1><span>CAC</span>TUS</h1>

        </div>
        <div className="toggle">
          {navState ? (
            <GiHamburgerMenu onClick={() => setNavState(false)} />) : (<GiHamburgerMenu onClick={() => setNavState(true)} />)}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#section1'>About</a>
          </li>
          <li>
            <a href='#section2'>Blog</a>
          </li>
          <li>
            <a href='#section3'>Services</a>
          </li>
          <li>
            <a href='#Slider'>Testimonials</a>
          </li>
        </ul>
        <div className="login-btn">
          <a href='#contact'><button class="button"> contact us</button></a>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar



const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;
  flex-wrap: wrap;
  .brand {
    display:flex;
    align-items: center;
    .logo{
      
      h1{
        text-decoration: none;
        font-weight: bold;
        font-size:2.8rem;
        letter-spacing:0.08rem;
        cursor: pointer;
        
        &:hover {
          text-shadow:0 0 10px #fed700, 0 0 25px #ae00ff  , 0 0 50px #fed700;
          transition-delay: 0.3s;
        }
        span{
          color:var(--primary-color);
        }
      }
    }
    .toggle {
      display: none;
      cursor: pointer;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;

    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li{
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        border-radius: 0.3rem;
        &:first-of-type, &:hover{
          background-color: var(--primary-color);
          a{
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
        }
      }
      .login-btn{
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        
            .button {
            --color: var(--primary-color);
            padding: 0.4em 1.3em;
            background-color: transparent;
            border-radius: .3em;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: .5s;
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 17px;
            border: 1px solid;
            font-family: inherit;
            text-transform: uppercase;
            font-weight:bold;
            letter-spacing: 0.1rem;
            color: var(--color);
            z-index: 1;
            }

            .button::before, .button::after {
            content: '';
            display: block;
            width: 50px;
            height: 50px;
            transform: translate(-50%, -50%);
            position: absolute;
            border-radius: 50%;
            z-index: -1;
            background-color: var(--color);
            transition: 1s ease;
            }

            .button::before {
            top: -1em;
            left: -1em;
            }

            .button::after {
            left: calc(100% + 1em);
            top: calc(100% + 1em);
            }

            .button:hover::before, .button:hover::after {
            height: 410px;
            width: 410px;
            }

            .button:hover {
            color: rgb(10, 25, 30);
            }

            .button:active {
            filter: brightness(.8);
            }



        }
      }
    
  }
@media screen and (min-width: 1080px) and (max-width:1400px) {
.links{
  .button{
    
      
    }
  }
}
}

@media screen and (min-width: 280px) and (max-width:1080px) {
  position: relative;
  margin: 0;
  z-index: 1;
  .brand{
    padding: 2rem 1rem;
    justify-content: space-between;
    width: 100%;
    z-index: 2;
    background-color: var(--background-color);
    .toggle{
      display:block;
      svg{
        font-size:2rem;
      }
    }
  }
  .links{
    position: absolute;
    background-color: black;
    margin-top: 5rem;
    width: 100vw;
    padding: 5rem 0;
    transition: 0.4s ease-in-out;
    gap: 2rem;
    flex-direction: column;
   
    ul{
      flex-direction: column;
      gap: 1rem;
    }
   
  }
  .show{
    top: 0;
  }
  .hide{
    top: -600px;
  }
  .login-btn{
    display: flex;
    flex-direction: column;
    .button{
     width: 100%;
    } 
  }
 
  
}

`;

