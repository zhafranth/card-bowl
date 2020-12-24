import React, { useState } from "react";
import {
  Card,
  Produk,
  MetaWrapper,
  Title,
  Calories,
  MetaContent,
  TitleWrapper,
  Border,
  MetaTitle,
  MetaDesc,
  ContentMeta,
} from "./style";

export default function Index({ image, title, calories }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Card className={isOpen === false && "close"}>
      <Produk
        src={image}
        onClick={handleClick}
        className={isOpen === false && "close"}
      />
      <MetaWrapper className={isOpen && "open"}>
        <Title>{title}</Title>
        <Calories>{calories} Calories</Calories>
        <Border />
        <MetaContent>
          <TitleWrapper>
            <MetaTitle>Times</MetaTitle>
            <MetaTitle>Portion</MetaTitle>
          </TitleWrapper>
          <ContentMeta>
            <MetaDesc>5 mins</MetaDesc>
            <MetaDesc>3 persons</MetaDesc>
          </ContentMeta>
        </MetaContent>
      </MetaWrapper>
    </Card>
  );
}
