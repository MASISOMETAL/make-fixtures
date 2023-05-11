import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/Colors';

const Container = styled.section`
    background-color: inherit;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;
const Article = styled.article`
    background-color: #fff;
    //padding: 1.8%;
    margin: 2%;
    //border: 0.2rem solid ${COLORS.secondary};
    display: flex;
    flex-flow: column nowrap;
    flex: 1 0 40%;
    min-width: 24rem;
    max-width: 37rem;

    @media (max-width: 500px){
        flex: 1 0 auto;
        width: 100%;
        min-width: 1rem;
    }
`;
const Box1 = styled.div`
    background-color: ${COLORS.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid #000;
    padding: 1% 0;
`;
const Box2 = styled.div`
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid #000;
    padding: 1% 0;
`;
const Box3 = styled.div`
    background-color: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
`;
const H2Title = styled.h2`
    font-size: 32px;
    background-color: inherit;
`;
const H2Fechas = styled.h2`
    background-color: inherit;

    @media (max-width: 500px){
        font-size: 22px;
    }
`;
const H3Partidos = styled.h3`
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 10%;

    @media (max-width: 500px){
        font-size: 14px;
    }
`;

const Fechas = ({ dataFixture }) => {
    return (
        <Container>
            <Box3>
                <H2Title>Fechas</H2Title>
            </Box3>
            {dataFixture.map((item, index) =>
                <Article key={index}>
                    <Box1>
                        <H2Fechas>Fecha {index + 1}</H2Fechas>
                    </Box1>
                    {item.map((item, index) =>
                        <Box2 key={index}>
                            <H3Partidos>{item[0]}</H3Partidos>
                            <H3Partidos> vs </H3Partidos>
                            <H3Partidos>{item[1]}</H3Partidos>
                        </Box2>
                    )}
                </Article>
            )}
        </Container>
    )
}

export default Fechas