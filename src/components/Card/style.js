import styled from "styled-components/macro";

export const Card = styled.div`
  position: relative;
  width: 266px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1);
  transition: transform 0.2s ease;
  &.close {
    transform: scale(1.2);
    transition: transform 0.2s ease;
  }
`;

export const Produk = styled.img`
  position: relative;
  z-index: 2;
  filter: drop-shadow(0px 23px 13px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  &.close {
    filter: none;
    animation-name: spin;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
export const Title = styled.h2`
  transform: translateY(-200px);
  margin-top: 2rem;
  margin-bottom: 0;
  transition: transform 0.4s ease;
`;
export const Calories = styled.p`
  color: #969696;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  transform: translateY(-200px);
  transition: transform 0.2s ease;
`;
export const MetaContent = styled.div`
  width: 100%;
  position: absolute;
  bottom: 15px;
  right: 0;
  left: 0;
  padding: 0 30px;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const MetaWrapper = styled.div`
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  background-color: #fff;
  width: 0%;
  height: 0px;
  border-radius: 15px;
  position: absolute;
  top: 120px;
  bottom: 0;
  z-index: 1;
  padding: 60px 30px 30px 30px;
  box-sizing: border-box;
  text-align: center;
  transition: visibility 1s, opacity 1s, width 0.7s, height 0.8s linear;
  animation-direction: reverse;
  &.open {
    height: 274px;
    width: 100%;
    visibility: visible;
    opacity: 1;
    transition: visibility 0.1s, opacity 0.1s, width 0.2s, height 0.4s linear;
    ${Title} {
      transform: translateY(0px);
      transition: transform 0.6s ease-in;
    }
    ${Calories} {
      transform: translate(0px);
      transition: transform 0.6s ease-in;
    }
    ${MetaContent} {
      visibility: visible;
      opacity: 1;
      transform: all 0.2s ease;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Border = styled.div`
  border-bottom: 2px solid #efefef;
  margin: 1rem 0;
`;
export const MetaTitle = styled.h5`
  margin: 0;
  color: #969696;
  font-size: 12px;
  font-weight: 300;
`;
export const MetaDesc = styled.p`
  margin: 0;
  font-weight: 600;
  color: #000;
  font-size: 12px;
`;
