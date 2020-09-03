import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Card from "./card";
import { arrayCharacter, key, order } from "../utils/characters";

const GridStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 130px);
  grid-template-rows: repeat(4, 160px);
  row-gap: 30px;
  column-gap: 30px;
  justify-items: center;
`;

const Grid = () => {
  const [image, setMyImg] = useState([]);

  const callApi = async () => {
    const characters = arrayCharacter();
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characters}`
    );
    const data = await response.json();
    const join = await order(data);
    const arrayKeys = key(join);
    const arrayData = [];
    for (let index = 0; index < join.length; index++) {
      const element = join[index];
      const value = {
        key: arrayKeys[index],
        id: element.id,
        img: element.image,
      };
      arrayData.push(value);
    }
    setMyImg(arrayData);
  };

  useEffect(() => {
    console.log("hola");
    callApi();
  }, []);
  return (
    <GridStyle>
      {image.map(({ key, id, img }) => (
        <Card key={key} image={img} idCard={id} keyCard={key} />
      ))}
    </GridStyle>
  );
};

export default Grid;
