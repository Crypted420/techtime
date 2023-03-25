import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import styled from 'styled-components'
import colors from '../utils/colors'
import Header from './Header'

export default function Home() {
    return (
        <Container>
            <Header />

            <Hero>
                <div className='catch--phrase'>
                    <img src="/images/hero_arrow.svg" alt="" className='arrow' />
                    <h1>
                        Grow your skills to advance your career path
                    </h1>
                    <p>
                        build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                    </p>

                    <section className="btns--container">
                        <button className='btn1'>
                            <span>
                                Get Started Now
                            </span>
                            <FiArrowUpRight className='arrow' size={20} />
                        </button>
                        <button className='btn2'>
                            Enroll Now
                        </button>
                    </section>

                    <section className='previews--container'>
                        <div className="previewImage">
                            <img src="/images/previews.svg" alt="image" />
                        </div>
                        <p>
                            <span>255K</span>
                            <span>Previews</span>
                        </p>
                    </section>
                </div>
                <div className='image'>

                </div>
            </Hero>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${colors.primary};
`

const Hero = styled.section`
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow-y: visible;
    
    .arrow{
        position: absolute;
        right: 50%;
        bottom: 20%;
        transform: scale(0.8);
    }
    .catch--phrase{
        width: 40%;
        height: auto;
        padding-left: 7.5rem;
        padding-top: 6.05rem;
        padding-bottom: 12.188rem;
        background-image: url('/images/hero_dots.svg');
        background-size: contain;
        background-repeat: no-repeat;
        h1{
            font-family: 'ClashDisplay', sans-serif;
            font-size: 4rem;
            color: white;
            line-height: 82px;
        }
        p{
            color: #E7E7E7;
            font-size: 1rem;
            text-transform: capitalize;
            line-height: 26px;
        }
        .btns--container{
            width: 100%;
            display: flex;
            margin-top: 2rem;
            .btn1{
                padding-inline: 2rem;
                padding-block: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                border: 1px solid white;
                color: white;
                font-weight: 700;
                border-radius: 4px
            }
            .btn2{
                padding-inline: 2rem;
                padding-block: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                border: 1px solid white;
                color: ${colors.primary};
                border-radius: 4px;
                font-weight: 700;
                margin-left: 1.5rem;
                span{
                    padding-left: 0.2rem;
                }
            }
        }
        .previews--container{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            margin-top: 1.5rem;
            .previewImage{
                width: 224px;
                height: 64px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            p{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-left: 0.2rem;
                span{
                    display: block;
                    font-size: 1rem;
                    &:nth-child(1){ 
                        font-family: 'ClashDisplay';
                        font-size: 35px;
                        font-weight: 700;
                        color: white;
                    }
                }
            }
        }
    };
    .image{
        width: 60%;
        height: 55.5rem;
        align-self: flex-end;
        background-image: url('/images/hero_image.svg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
    }
`