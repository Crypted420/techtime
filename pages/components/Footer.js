import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsYoutube, BsInstagram, BsDiscord } from "react-icons/bs";
import styled from "styled-components";
import colors from "../utils/colors";

function Footer() {
    return (
        <Container>
            <Logo>
                <h1>Tech Time</h1>
                <p>Reach out to us on any of our social media networks</p>
                <div className="icons">
                    <FaFacebook color="#2A2A2B" size={24} />
                    <BsTwitter color="#2A2A2B" size={24} />
                    <BsYoutube color="#2A2A2B" size={24} />
                    <BsInstagram color="#2A2A2B" size={24} />
                    <BsDiscord color="#2A2A2B" size={24} />
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
                    <input type="email" name="email" placeholder="nft123@gmail.com" />
                    <button>Send Message</button>
                </div>
            </Subscribe>
        </Container>
    );
}
const Container = styled.footer`
  width: 100%;
  height: auto;
  background-color: #000f24;
  padding-top: 10.375rem;
  padding-bottom: 21.688rem;
  padding-inline: 7.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: white;
  column-gap: 86px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    padding-inline: 1rem;
    padding-top: 2.5rem;
    row-gap: 2rem;
    padding-bottom: 10.25rem;
  }
  h1 {
    font-size: 2rem;
    @media screen and (max-width: 1023px) {
      font-size: 1.5rem;
      line-height: 2.696rem;
    }
  }
`;
const Logo = styled.section`
  h1 {
    font-family: "Amazing Kids";
    @media screen and (max-width: 1023px) {
      font-size: 2.269rem;
    }
  }
  p {
    margin-top: 1.625rem;
    font-weight: 400;
    font-size: 1rem;
    @media screen and (max-width: 1023px) {
      padding-right: 8.188rem;
      margin-top: 1.5rem;
      font-size: 1rem;
      line-height: 1.313rem;
    }
  }
  .icons {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 1023px) {
      margin-top: 1.5rem;
      justify-content: flex-start;
    }
    svg {
      margin-inline: 0.5rem;
      @media screen and (max-width: 1023px) {
        margin-inline: 1rem;
      }
    }
  }
`;
const Links = styled.section`
  h1 {
    font-family: "ClashDisplay";
    padding-bottom: 2rem;
    @media screen and (max-width: 1023px) {
      padding-bottom: 1.5rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }
`;
const Community = styled.section`
  h1 {
    font-family: "ClashDisplay";
    padding-bottom: 2rem;
    @media screen and (max-width: 1023px) {
      padding-bottom: 1.5rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }
`;
const Subscribe = styled.section`
  h1 {
    font-family: "ClashDisplay";
    padding-bottom: 2rem;
    @media screen and (max-width: 1023px) {
      padding-bottom: 1.5rem;
    }
  }
  .form--container {
    display: flex;
    input {
      height: 2.875rem;
      border: 1px solid ${colors.primary};
      text-indent: 1rem;
      color: #424141;
      background-color: #2a2a2b;
      font-size: 0.875rem;
      @media screen and (max-width: 1023px) {
        width: 70%;
      }
    }
    button {
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
`;
export default Footer;
