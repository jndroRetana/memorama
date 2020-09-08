import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { changeCard } from "../utils/changeCard";
export const Turn = keyframes`
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(180deg);
    background-color: blue;
  }
`;

const CardStyle = styled.div`
  width: 110px;
  height: 140px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const Card = ({ image, idCard, keyCard, reviewCard }) => {
  const [changeImage, setChangeImage] = useState("changeImage");
  const inReview = useRef();

  useEffect(() => {
    localStorage.removeItem("clicCard");
  }, []);

  const handleClick = (inReview) => {
    //changeCard(idCard, keyCard, setChangeImage, myFocus, setMyFocus);
    localStorage.setItem("infoCard", [idCard, keyCard]);
    reviewCard(localStorage.getItem("infoCard").split(","), inReview);
  };

  return (
    <CardStyle
      ref={inReview}
      className={changeImage}
      image={image}
      onClick={() => handleClick(inReview)}
    />
  );
};

export default Card;
