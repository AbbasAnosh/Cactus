import React from 'react'
import styled from 'styled-components';
import ReadMoreBtn from './ReadMoreBtn';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

const Footer = () => {

  const links = [
   
    {
      title: "Our Guidelines",
      links: [
        "Terms",
        "Privacy Policy",
        "Cookie Policy",
        "Discover",
      ],
    },
    {
      title: "Our address",
      links: [
        "+92 799749108",
        "abbasalianosh@gmail.com",
        `Bahrestan 8, Kabul, Afghanistan`,
      ],
    },
  ];

  return (
    <Foot>
      <div className="upper_footer" id="upper-footer">
        <div className="brand">
        <div className="logo">
          <h1><span>CAC</span>TUS</h1>
        </div>
          <p>
          Don’t miss any updates of our new templates and extensions.!
          </p>
          <div className="mail_container">
            <input type="email" placeholder='Enter Email' />
            <a href="#"><ReadMoreBtn text={"Read More"}/></a>
          </div>
        </div>
        {links.map(({ title, links }) => {
          return (
            <div className="links" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={links}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="lower_footer" id="lower-footer">
        <span>@ 2022 CACTUS</span>
        <ul>
          <li><BsFacebook/></li>
          <li><BsTwitter/></li>
          <li><BsInstagram/></li>
          <li><BsLinkedin/></li>
        </ul>
      </div>
    </Foot>
  )
}

export default Footer



const Foot = styled.div`

  border-top: 0.02rem solid var(--primary-color);
  background-image: url("Animated Shape.svg");
background-repeat: no-repeat
  margin: 5rem 0 1rem 0;
  .upper_footer{
    display:grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 3rem;
    margin: 2rem 5rem;
    padding-top: 3rem;
    .brand{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      .logo{
          h1{
            span{
              color: var(--primary-color)
            }
          }
      }
      .mail_container{
        display:flex;
        gap: 1rem;
        align-items: center;
        a{
          text-decoration: none;
        }
        input{
          border-radius:0.3rem;
          border: none;
          padding: 0.9rem 1rem;
          &:focus{
            outline: none;
          }
          }
          Button{
            display:flex;
            gap: 0.5rem;
            padding: 0.8rem 1rem;
            
        }
      }
    } 
    .links{
      display:flex;
      flex-direction: column;
      gap: 1rem;
      h3{
        color: var(--primary-color);
      }
      ul{
        display:flex;
        flex-direction: column;
        gap: 0.8rem;
        li{
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover{
            color: var(--primary-color);
          }
        }

      }
    }
  }
  .lower_footer{
    border-top: 0.02rem solid var(--primary-color);
    margin: 0 5rem;
    display: flex;
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin-top: 1rem;
    justify-content: space-between;
  }
  ul{
    display: flex;
    list-style-type: none;
    gap: 3rem;
  }
  li{
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
      color: var(--primary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px) {
    margin: 2rem 1rem;
    .upper_footer{
      margin: 2rem 1rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      .brand{
        .mail_container{
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .links{
        list-style-type: none;
      }
    }
    .lower_footer{
      margin: 2rem 1rem;
      flex-direction: column-reverse;
      gap: 1.5rem;
      ul{
        flex-direction: row;
        gap: 1rem;
      }
  }
  }
`