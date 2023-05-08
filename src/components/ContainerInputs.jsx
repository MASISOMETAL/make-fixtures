import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/Colors';

// ESTILOS

const Container = styled.section`
    display: flex;
    justify-content: center;
    //align-items: center;
    margin: 0.5rem;
    gap: 1%;
    position: relative;
    //background-color: #ff0000;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const ContainerCard1 = styled.article`
    background-color: #fff;
    border: 2px solid ${COLORS.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 2%;
    flex: 1 0 20%;

    @media (max-width: 500px) {
        margin: 1% 0;
    }
`;

const ContainerCard2 = styled(ContainerCard1)`
    flex: 1 0 60%;
    height: auto;
`;

const ContainerTitle = styled.div`
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerInput = styled.div`
    background-color: inherit;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //background-color: #00ff00;
    width: 100%;
    margin-top: 1rem;
`;

const ContainerInput2 = styled(ContainerInput)`
    //width: 80%;
`;

const Box = styled.div`
    background-color: inherit;
    border: 2px solid ${COLORS.secondary};
    padding: 3% 1%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: #ff0000; */
    flex: 1 0 auto;

    margin: 2%;
`;

const Box1 = styled(Box)`
    max-width: 16rem;
    min-width: 14rem;
`;

const H2Title = styled.h2`
    background-color: inherit;
`;

const Label = styled.label`
    background-color: inherit;
`;

const Input = styled.input`
    background-color: ${COLORS.background};
    height: 1.8rem;
`;

const Button = styled.button`
    padding: 1.5% 5%;
`;

const MsgError = styled.span`
    background-color: inherit;
    color: #ff0000;
    font-size: 13px;
`;

// FIN ESTILOS

const initialState = {
    status: false,
    errorMsg: ""
}

const ContainerInputs = () => {

    const [equipos, setEquipos] = useState([]);
    const [text, setText] = useState("");
    const [error, setError] = useState(initialState)

    const onHandleAddEquip = () => {
        for (const item of equipos) {
            if (item === text) {
                setError({
                    status: true,
                    errorMsg: "El Nombre ingresado ya existe."
                })
                return
            }
        }

        if (text.trim().length < 6) {
            setError({
                status: true,
                errorMsg: "El nombre debe contener al menos 6 caracteres."
            })
        } else {
            setEquipos([
                ...equipos,
                text
            ])
            setText("")
        }
    };

    const onHandleDelEquip = (e) => {
        let newEquipos = equipos.filter((item) => item !== e)
        setEquipos(newEquipos)
    }

    const onHandleChangeText = (e) => {
        setError(initialState)
        setText(e.target.value)
    }


    return (
        <Container>
            <ContainerCard1>
                <ContainerTitle>
                    <H2Title>Agrege un equipo</H2Title>
                </ContainerTitle>
                <ContainerInput2>
                    <Box>
                        <Label>Nombre de equipo: </Label>
                        <Input
                            type="text"
                            placeholder='Team Turtle'
                            onChange={onHandleChangeText}
                            value={text}
                        />
                        {error.status && <MsgError>{error.errorMsg}</MsgError>}
                        <Button onClick={onHandleAddEquip}>+</Button>

                    </Box>
                </ContainerInput2>
            </ContainerCard1>
            <ContainerCard2>
                <ContainerTitle>
                    <H2Title>Equipos agregados</H2Title>
                </ContainerTitle>
                <ContainerInput>
                    {equipos && (
                        equipos.map((item, index) =>
                            <Box1 key={index}>
                                <Label>{item}</Label>
                                <Button onClick={() => onHandleDelEquip(item)}>Quitar equipo</Button>
                            </Box1>
                        )
                    )}
                </ContainerInput>
            </ContainerCard2>
        </Container>
    )
}

export default ContainerInputs