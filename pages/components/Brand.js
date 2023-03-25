import React from 'react'
import styled from 'styled-components'

function Brand() {
    return (
        <Container>
            {/* <img src="/images/brands.svg" alt="" /> */}
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
    div{
        width: 70%;
        height: 100%;
        background-image: url("/images/brands.svg");
        background-repeat: no-repeat;
        background-size: contain; 
        background-position: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
`

export default Brand