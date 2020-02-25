import React from "react";
import styled, { css } from "styled-components";

/* Para crear un styled component hacemos uso de styled.{el elemento que va a representar el componente} */
export const Button = styled.button`
  color: red;
  background-color: yellow;
  border-radius: 0.4em;
  font-size: 30px;
  transition: ease all 0.4s;
  &:hover {
    background-color: green;
  }
  &:focus {
    outline: none;
  }
`;

/* Podemos hacer que otro componente herede el estido del primer componete */
export const OtherButton = styled(Button)`
  color: white;
  background-color: tomato;
`;
