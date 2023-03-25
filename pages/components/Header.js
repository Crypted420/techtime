import React from 'react';
import styled from 'styled-components';

const links = ['Home', 'About Us', 'Courses', 'Testimonial', 'Community', 'Enroll now',]

function Header() {
    return (
        <Container>
            <Logo>
                <h1>Tech Time</h1>
            </Logo>
            <Links>
                {
                    links.map((item, index) => (
                        <a href="" key={index} style={
                            index == 5 ? ButtonStyle : index == 0 ? {
                                color: 'white'
                            } : {}
                        }>{item}</a>
                    ))
                }

            </Links>
        </Container>
    )
}

const Container = styled.header`
width: 100%;
height: 15%;
display: flex;
justify-content: space-between;
align-items: center;
padding-block: 2rem;
padding-inline: 7.5rem;
`
const Logo = styled.section`
width: 20%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
/* padding-left: 7.5rem; */
h1{
    font-size: 2.2rem;
    font-family: 'Amazing Kids';
    color: white;
}
`
const Links = styled.section`
width: auto;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
a{
    margin-inline: 1.5rem;
    color: #AAC4E6;
    letter-spacing: -0.2px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
}

`

const ButtonStyle = {
    color: "#004DB3",
    backgroundColor: "white",
    paddingBlock: "16px",
    paddingInline: "32px",
    borderRadius: "4px"
}


export default Header