import React from 'react'
import { RiCastFill } from 'react-icons/ri'
import { FaMoneyBill } from 'react-icons/fa'
import { BsClockFill, BsPeopleFill } from 'react-icons/bs'
import styled from 'styled-components'
import colors from '../utils/colors'

const badges = [
    { color: '#4C7FBD', title: 'experienced mentors', text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ' },
    { color: '#AECD5E', title: 'one-on-one meetings', text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ' },
    { color: '#ED6BA6', title: 'one-on-one meetings', text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ' },
    { color: '#EA6B45', title: 'affordable prices', text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ' },
]

function Portofolio() {
    return (
        <Container>
            <div className="wave"></div>
            <div className="circle"></div>
            <Content>
                <h1>this is why we are best from others</h1>
                <p>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <div className="image">
                </div>
            </Content>

            <Badges>
                {
                    badges.map((badge, index) => (
                        <div className="badge" key={index}>
                            <div className="icon" style={{
                                background: `${badge.color}`
                            }}>
                                {
                                    index == 0 ? <RiCastFill color='white' /> : index == 2 ? <BsClockFill color='white' /> : index == 3 ? <BsPeopleFill color='white' /> : <FaMoneyBill color='white' />
                                }
                            </div>
                            <h3>
                                {badge.title}
                            </h3>
                            <p className="text">
                                {badge.text}
                            </p>
                        </div>

                    ))
                }
            </Badges>


        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 4.063rem;
    .wave{
        width: 4.688rem;
        height: 1.125rem;
        background: url("/images/portfolio_wave.svg") no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        right: 20%;
    }
    .circle{
        width: 1.625rem;
        height: 1.625rem;
        background: url("/images/portfolio_circle.svg") no-repeat;
        background-size: contain;
        position: absolute;
        bottom: 0;
        right: 5%;
    }
`

const Content = styled.div`
    width: 50%;
    height: auto;
    padding-left: 7.5rem;
    padding-top: 5rem;
    text-transform: capitalize;
    h1{
        font-family: 'ClashDisplay';
        font-size: 3.5rem;
        line-height: 4.375rem;
        color: ${colors.header};
    }
    p{
        margin-top: 1rem;
        color: ${colors.text};
        font-size:1rem;
        line-height: 28px;
    }
    .image{
        width: 100%;
        height: 25rem;
        border-radius: 1.31rem;
        background-image: url('/images/portfolio_img.jpeg');
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        margin-top: 2rem;
    }
`

const Badges = styled.div`
    width: 50%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    align-content: center;
    padding-inline: 2rem;
    padding-block: 8.719rem;
    gap: 1.5rem;
    .badge{
        padding: 1.5rem;
        background-color: white;
        border-radius: 8px;
        text-transform: capitalize;
        position: relative;
        .icon{
            width: 3rem;
            display: flex;
            place-content: center;
            padding: 0.75rem;
            border-radius: 4px;
        }
        h3{
            font-weight: 700;
            margin-top: 1.5rem;

        }
        p{
            line-height: 1.75rem;
            color: ${colors.text};
            margin-top: 0.25rem;
        }
    }
`
export default Portofolio