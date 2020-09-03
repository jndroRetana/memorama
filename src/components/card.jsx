import styled, { keyframes } from "styled-components";
import React, { useState } from "react";

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
  width: 130px;
  height: 160px;
  background-color: red;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const Card = ({ image, idCard, keyCard }) => {
  const [myClic, setMyClic] = useState([]);

  const handleClick = () => {
    const list = [];
    list.push({ id: idCard, key: keyCard });
    myClic.push(list);
    console.log(myClic);
  };

  return <CardStyle image={image} onClick={handleClick} myClic={myClic} />;
};

export default Card;
