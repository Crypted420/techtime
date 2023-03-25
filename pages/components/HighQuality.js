import React from 'react'
import { GiSpeaker } from 'react-icons/gi'
import { MdOutlineSettingsInputAntenna, MdOutlineReplay, MdDescription } from 'react-icons/md'
import styled from 'styled-components'
import colors from '../utils/colors'

const badges = [
    { fadedBg: '#3FA96A33', color: '#3FA96A', text: 'Audio Classes', },
    { fadedBg: '#F79E8E33', color: '#F79E8E', text: 'Live Classes', },
    { fadedBg: '#9269CD33', color: '#9269CD', text: 'Recorded Classes', },
    { fadedBg: '#5978CF33', color: '#5978CF', text: '50+ Notes', },
]

function HighQuality() {
    return (
        <Container>
            <div className="wave"></div>
            <Content>
                <div className="header--container">
                    <h1>high quality video, audio & live classes</h1>
                    <div className="crown"></div>
                </div>
                <p className='desc'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <button>View Courses</button>
                <div className="badges--container">
                    {
                        badges.map((badge, index) => (
                            <div className="badge" key={badge.text}>
                                <div className="icon" style={{
                                    backgroundColor: badge.fadedBg
                                }}>
                                    {
                                        index == 0 ? <GiSpeaker color={badge.color} /> : index == 1 ? <MdOutlineSettingsInputAntenna color={badge.color} /> : index == 2 ? <MdOutlineReplay color={badge.color} /> : <MdDescription color={badge.color} />
                                    }
                                </div>
                                <p>
                                    {badge.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </Content>
            <Album></Album>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #F8F9FC;
    position: relative;
    padding-bottom: 2.188rem;
    .wave{
        width: 6.375rem;
        height: 0.938rem;
        background: url('/images/high_quality_wave.svg') no-repeat;
        background-size: contain;
        background-position: center right;
        position: absolute;
        top: 1.5rem;
        right: 0;
    }
    `

const Content = styled.div`
    width: 50%;
    height: auto;
    padding-top: 9.25rem;
    padding-left: 10.375rem;
    align-self: center;
    .header--container{
        position: relative;
        h1{
            font-family: 'ClashDisplay';
            text-transform: capitalize;
            font-size: 3.5rem;
            line-height: 70px;
            color: ${colors.header}
        }
        .crown{
            position: absolute;
            width: 100px;
            height: 100px;
            background-image: url('/images/crown.svg');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top left;
            top: -30%;
            left: -15%;
        }
    }
    p.desc{
        font-size: 1rem;
        line-height: 28px;
        color: ${colors.text};
        margin-top: 2rem;
        text-transform: capitalize;
    }
    button{
        padding-inline: 2rem;
        padding-block: 1rem;
        background-color: ${colors.primary};
        border-radius: 4px;
        color: white;
        font-weight: 700;
        margin-top: 2rem;
        border: 0;
    }
    .badges--container{
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 1.5rem;
        .badge{
            padding-block: 1.563rem;
            padding-inline-end: 1.5rem;
            padding-left: 1.5rem;
            display: flex;
            align-items: center;
            border-radius: 4px;
            background-color: white;
            .icon{
                padding: 0.5rem;
                border-radius: inherit;
                display: flex;
                place-items: center;
            }
            p{
                padding-left: 1rem;
            }
        }
    }
`

const Album = styled.div`
    width: 50%;
    height: 50rem;
    align-self: flex-end;
    background-image: url('/images/high_quality.svg');
    background-size: 100% 38.875rem;
    background-repeat: no-repeat;
    background-position: 0.5rem bottom;
`
export default HighQuality