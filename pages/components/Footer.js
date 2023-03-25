import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter, BsYoutube, BsInstagram, BsDiscord } from 'react-icons/bs'
import styled from 'styled-components'
import colors from '../utils/colors'

function Footer() {
    return (
        <Container>
            <Logo>
                <h1>Tech Time</h1>
                <p>Reach out to us on any of our social media networks</p>
                <div className="icons">
                    <FaFacebook color='#2A2A2B' size={24} />
                    <BsTwitter color='#2A2A2B' size={24} />
                    <BsYoutube color='#2A2A2B' size={24} />
                    <BsInstagram color='#2A2A2B' size={24} />
                    <BsDiscord color='#2A2A2B' size={24} />
                </div>
            </Logo>
            <Links>
                <h1>Useful Links</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>Our Courses</p>
                <p>Testimonials</p>
                <p>Our Community</p>
            </Links>
            <Community>
                <h1>Community</h1>
                <p>Help Centers</p>
                <p>Partners</p>
                <p>Suggestion</p>
                <p>Blog</p>
                <p>Newsletter</p>
            </Community>
            <Subscribe>
                <h1>Subscribe</h1>
                <div className="form--container">
                    <input type="email" name="email" placeholder='nft123@gmail.com' />
                    <button>Send Message</button>
                </div>
            </Subscribe>
        </Container>
    )
}
const Container = styled.footer`
    width: 100%;
    height: auto;
    background-color: #000F24;
    padding-top: 10.375rem;
    padding-bottom: 21.688rem;
    padding-inline: 7.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: white;
    column-gap: 86px;
    h1{
        font-size: 2rem;
    }
`
const Logo = styled.section`
    h1{
       font-family : "Amazing Kids";
    }
    p{
        margin-top: 1.625rem;
        font-weight: 400;
        font-size: 1rem;
    }
    .icons{
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        svg{
            margin-inline: 0.5rem;
        }
    }
`
const Links = styled.section`
    h1{
        font-family: "ClashDisplay";
        padding-bottom: 2rem;
    }
    p{
        margin-bottom: 1rem;
    }
    `
const Community = styled.section`
    h1{
        font-family: "ClashDisplay";
        padding-bottom: 2rem;
    }
    p{
        margin-bottom: 1rem;
    }   
`
const Subscribe = styled.section`
    h1{
        font-family: "ClashDisplay";
        padding-bottom: 2rem;
    } 
    .form--container{
        display: flex;
        input{
            /* width: 16.438rem; */
            height:2.875rem;
            border: 1px solid ${colors.primary};
            text-indent: 1rem;
            color: #424141;
            background-color: #2A2A2B;
            font-size: 0.875rem;
        }
        button{
            width: 7.688rem;
            height: 2.875rem;
            background-color: ${colors.primary};
            border: 0;
            color: white;
            font-weight: 500;
            line-height: 1.181rem;
            font-size: 0.875rem;
        }
    }
`
export default Footer