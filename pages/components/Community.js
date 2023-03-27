import React from 'react'
import styled from 'styled-components'
import colors from "../../utils/colors";

function Community() {
    return (
        <Container>
            <p className='tile'>JOIN THE COMMUNITY</p>
            <h1>are you  ready to connect with the future talent of the tech world</h1>
            <p className='tile2'>meet up with other techstars and grow together</p>
            <div className="image">

            </div>
            <button>
                Join the community
            </button>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: auto;
    background-color: ${colors.primary};
    padding-top: 45.75rem;
    padding-bottom: 6.125rem;
    text-align: center;
    color: white;
    @media screen and (max-width: 1023px) {
        padding-top: 2.5rem;
        padding-inline: 1rem;
        padding-bottom: 2.688rem;
    }
    .tile{
        letter-spacing: 10%;
        font-size: 1rem;
        line-height: 1.35rem;
        font-weight: 500;
        @media screen and (max-width: 1023px) {
            font-size: 0.5rem;
            line-height: 10.8px;
    }
    }
    h1{
        width: 75.188rem;
        font-size: 3.5rem;
        font-family: "ClashDisplay";
        line-height: 4.305rem;
        text-align: center;
        margin-top: 0.5rem;
        margin-inline: auto;
        text-transform:capitalize;
        @media screen and (max-width: 1023px) {
            padding-inline:2.875rem;
            margin-top: 0.25rem;
            font-size: 1.5rem;
            line-height: 1.845rem;
            margin: 0;
            width: 100%;
    }
    }
    .tile2{
        margin-top: 1rem;
        line-height: 1.35rem;
        font-weight: 500;
        text-align: center;
        text-transform:capitalize;
        @media screen and (max-width: 1023px) {
            margin-top:0.25rem;
            font-size: 0.5rem;
    }
    }
    .image{
        margin-top: 2rem;
        width: 61.438rem;
        height: 28.25rem;
        background: url("/images/community.svg") no-repeat;
        background-size: cover;
        background-position: center;
        margin-inline: auto;
        @media screen and (max-width: 1023px) {
            width: 100%;
            height: 11.313rem;
            margin-top: 1.5rem;
    }
    }
    button{
        padding-inline:2rem;
        padding-block:1rem;
        border-radius: 4px;
        background-color: white;
        color: ${colors.primary};
        margin-top: 3.55rem;
        border: 0;
        font-weight: 700;
        text-transform:capitalize;
        @media screen and (max-width: 1023px) {
            margin-top: 1.5rem;
            padding-block:0.5rem;
            padding-inline: 1rem;
            font-size:0.5rem;
        }

    }
`
export default Community