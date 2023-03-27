import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const testimonies = [
    { comment: "", user: "", pic: "" }
]

function Testimonial() {
    return (
        <Container>
            <Header>
                <h1>What our clients are saying</h1>
                <p>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            </Header>
            <Comments>
                <div className="comments--container">
                    {
                        [1, 2, 3].map((e, index) => (

                            <div className="comment" key={index}>
                                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                                <div className="user">
                                    <div className="pic"></div>
                                    <div className="bio">
                                        <p>Bella Moon</p>
                                        <p>Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="dots--container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </Comments>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding-top: 1.875rem;
    padding-bottom: 1.934rem;
    @media screen and (min-width: 1024px){
        display: none;
    }
`
const Header = styled.div`
   h1{
       font-family: 'ClashDisplay';
        font-size: 1.5rem;
        text-align:center;
        padding-inline: 2.625rem;
        color: ${colors.header};
        text-transform: capitalize;
   } 
   p{
    margin-top:0.194rem;
    font-size: 8px;
    font-weight: 500;
    line-height: 1rem;
    padding-inline: 4.375rem;
    text-align: center;
    color: ${colors.text};
    text-transform: capitalize;

   }

   `
const Comments = styled.div`
    width: 100%;
    height: auto;
    margin-top:2rem;
    .comments--container{ 
        white-space: nowrap;
        overflow-x:auto;
        
        &::-webkit-scrollbar{
            display: none;
        }
        .comment{
            display: inline-block;
            padding-top:1.5rem;
            padding-inline: 1rem;
            width: 20.75rem;
            height: 12.563rem;
            background-color: white;
            border-radius: 16px;
            white-space: normal;
            margin-inline:1rem;
            scrollbar-width: 0;
            -ms-overflow-style: none;
            p{
                font-size: 0.625rem;
                color: ${colors.text};
                line-height: 0.844rem;
            }
        }
        .user{
            margin-top: 1rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .pic{
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-image: url("/images/testi_pic.svg");
                background-repeat: no-repeat;
                background-size: contain;
            }
            .bio{
                margin-left:0.12rem;
                p{
                    &:nth-child(1){
                        font-size: 0.625rem;
                        line-height: 0.844rem ;
                        color: black;
                        font-weight: 700;
                    }
                    &:nth-child(2){
                        font-size: 0.5rem;
                        color:${colors.text};
                        margin-top: 0.06rem;
                    }
                }
            }
        }
    }
    .dots--container{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:4px;
        margin-top: 1rem;
        .dot{
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: #AAC4e6;
            &:nth-child(2){
                background-color: ${colors.primary};
            }
        }
    }
`

export default Testimonial