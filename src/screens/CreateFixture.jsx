import React from 'react'
import styled from 'styled-components';
import { ContainerInputs, ContainerTitle } from '../components';
import { COLORS } from '../constants/Colors';

const Container = styled.section`

`;

const CreateFixture = () => {
    return (
        <Container>
            <ContainerTitle />
            <ContainerInputs />
        </Container>
    )
}

export default CreateFixture;