import React from 'react'
import styled from 'styled-components'

function Brand() {
    return (
        <Container>
            <div></div>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 9.875rem;
    background-color: #CCDBF0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 7.5rem;
    @media screen and (max-width: 1023px) {
        height: 3.75rem;
        padding-inline: 1rem;
    }
    div{
        width: 100%;
        height: 100%;
        background-image: url("/images/brands.svg");
        background-repeat: no-repeat;
        background-size: contain; 
        background-position: center;
    }
`

export default Brand