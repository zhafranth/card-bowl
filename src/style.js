import styled from "styled-components";
import Bg from "./assets/images/bg.png";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(${Bg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 12vw;
`;

export const Hire = styled.a`
  position: absolute;
  bottom: 6vh;
  right: 0;
  left: 0;
  text-align: center;
  text-decoration: none;
`;
