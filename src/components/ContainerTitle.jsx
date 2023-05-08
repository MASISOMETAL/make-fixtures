import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/Colors';

const Container = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: ${COLORS.primary};
`;

const H1Title = styled.h1`
    font-size: 30px;
    background-color: inherit;
`;

const ContainerTitle = () => {
    return (
        <Container>
            <H1Title>Creacion de Fixture</H1Title>
        </Container>
    )
}

export default ContainerTitle