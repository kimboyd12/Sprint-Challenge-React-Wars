// Write your Character component here

import React from "react";
import styled from "styled-components";


const Card = styled.div`
    border: 3px solid black;
    border-radius: 10px;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 3%;
    background-color: lightgrey;
`

const Name = styled.h2`
    border: 1px solid black;
    width: 50%;
    margin: 0 auto;
    margin-top: 3%;
    border-radius: 50px;
    padding: 2%;
    background-color: #5c85d6;
    color: white;
`

const Info = styled.div`
    font-size: 1.2rem;

`

const Character = props => {
    console.log(props);
    return (
        <Card>
            <Name>{props.data.name}</Name>
            <Info>
            <p>Appears in: {props.data.films.length} films</p>
            <p>Birth Year: {props.data.birth_year}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Height: {props.data.height}cm</p>
            <p>Weight: {props.data.mass}kg</p>
            </Info>
        </Card>
    )
}

export default Character;