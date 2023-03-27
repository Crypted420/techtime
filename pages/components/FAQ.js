import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import colors from "../../utils/colors";


const questions = [
    { question: 'is there a free trial available?', answer: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ' },
    { question: 'can i change my plan later?', answer: '' },
    { question: 'are the courses lifetime?', answer: '' },
    { question: 'do i get certified after taking courses?', answer: '' },
    { question: 'how do i reach out to mentors?', answer: '' },
    { question: 'do we get job ready after taking courses?', answer: '' },
];

function FAQ() {
    return (
        <Container>
            <div className="bg"></div>
            <div className="bg2"></div>
            <h1>frequently asked questions</h1>
            <p className='tile'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

            <QContainer>
                {
                    questions.map((q, index) => (
                        <div className="q" key={index}>
                            <h3>
                                <span style={{
                                    color: index == 0 ? colors.primary : colors.header
                                }}>{q.question}</span>
                                {
                                    index == 0 ?
                                        <AiOutlineMinus size={24} color={colors.primary} />
                                        : <AiOutlinePlus size={24} />

                                }
                            </h3>
                            <div className="answer">
                                {q.answer}
                            </div>
                        </div>

                    ))
                }
            </QContainer>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding-block: 5rem 5.188rem;
    background-repeat: no-repeat;
    position: relative;
    @media screen and (max-width: 1023px) {
        padding-top: 2.5rem;
        padding-bottom: 4.116rem;
    }
    .bg{
        width: 33.688rem;
        height: 62.438rem;
        position: absolute;
        background-image: url('/images/faq_bg1.svg');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat; 
        @media screen and (max-width: 1023px) {
            width: 10%;
            height: 70%;
    }
}
.bg2{
        width: 31.188rem;
        height: 23.813rem;
        position: absolute;
        background-image: url('/images/faq_bg2.svg');
        background-position: right;
        background-size: contain;
        background-repeat: no-repeat; 
        right: 0;
        @media screen and (max-width: 1023px) {
            width: 10%;
            height: 20%;
           top: 0;
        }
    }
    h1{
        font-size: 3.5rem;
        color: ${colors.header};
        line-height: 4.305rem;
        text-align: center; 
        font-weight : 700;
        font-family: 'ClashDisplay';
        text-transform: capitalize;
        @media screen and (max-width: 1023px) {
            font-size: 1.5rem;
            line-height: 1.813rem;
    }

    }
    p.tile{
        margin-top: 0.5rem;
        color: ${colors.text};
        font-weight: 500;
        line-height: 1.75rem;
        font-size: 1rem;
        width: 46.438rem;
        text-align: center;
        margin-inline: auto;
        text-transform: capitalize;
        @media screen and (max-width: 1023px) {
            margin-top: 0.207rem;
            font-size: 0.5rem;
            line-height: 1rem;
            width: 100%;
            padding-inline: 4.25rem;
    }
    }
`
const QContainer = styled.div`
    margin-top: 5.125rem;
    width: 64.813rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    position: relative;
    @media screen and (max-width: 1023px) {
        width: 100%;
        padding-inline: 1rem;
        margin-top: 1.5rem;
    }
    div.q{
        width: 100%;
        height: auto;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 2rem;
        @media screen and (max-width: 1023px) {
            padding-bottom: 0.759rem;
    }
        h3{
            display: flex;
            justify-content: space-between;
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: capitalize;
            svg{
                width: 0.569rem;
            }
            @media screen and (max-width: 1023px) {
                font-size: 0.875rem;
    }
        }
        .answer{
            margin-top: 1rem;
            color: ${colors.text};
            line-height: 1.625rem;
            text-transform: capitalize;
            @media screen and (max-width: 1023px) {
                margin-top: 0.375rem;
                font-size: 0.5rem;
                line-height: 1rem;
    }
        }
    }
`

export default FAQ