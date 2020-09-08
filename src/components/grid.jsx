import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Card from "./card";
import { arrayCharacter, key, order } from "../utils/characters";
import { changeCard } from "../utils/changeCard";

const GridStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: repeat(5, 120px);
  row-gap: 30px;
  column-gap: 30px;
  justify-items: center;
  align-content: center;
  .changeImage {
    background-image: url("https://pm1.narvii.com/6608/b3c292545e2509d23892ceaf6fb778aa2d9f88f7_hq.jpg");
  }
`;

const Grid = () => {
  const [image, setMyImg] = useState([]);
  const [reviewCard, setReviewCard] = useState([]);
  const [refernece, setReference] = useState([]);
  const [count, setCount] = useState(1);
  const handleCheck = (infoCard, inReview) => {
    changeCard(
      infoCard,
      inReview,
      reviewCard,
      refernece,
      setReference,
      setReviewCard,
      count,
      setCount
    );
  };

  const callApi = async () => {
    const characters = arrayCharacter(15);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characters}`
    );
    const data = await response.json();
    const join = await order(data, 29);
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
    callApi();
  }, []);

  return (
    <GridStyle>
      {image.map(({ key, id, img }) => (
        <Card
          reviewCard={handleCheck}
          key={key}
          image={img}
          idCard={id}
          keyCard={key}
        />
      ))}
    </GridStyle>
  );
};

export default Grid;
