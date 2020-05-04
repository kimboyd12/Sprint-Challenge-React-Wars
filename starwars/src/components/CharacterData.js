import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

function CharacterData() {

    const [person, setPerson] = useState([]);
    

    useEffect(() => {
        axios
            .get('https://swapi.py4e.com/api/people/')
            .then(response => {
                console.log(response.data.results);
                setPerson(response.data.results);
            })
            .catch(error => {
                console.log(error, "Oh no! Error!!");
            })}, []);

            return (
                <div>
                    {person.map(data => (
                        <Character data={data} />
                    ))}
                </div>
            );
}

export default CharacterData;