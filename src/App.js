import React, { useState } from "react";
import { Container, Hire } from "./style";
import Fade from "react-reveal/Fade";
// Component
import Card from "./components/Card";

// Images
import Image1 from "./assets/images/bowl1.png";
import Image2 from "./assets/images/bowl2.png";
import Image3 from "./assets/images/bowl3.png";

function App() {
  return (
    <Container>
      <Fade delay={200} top>
        <Card title="Fresh and Healthy Salad" calories="60" image={Image1} />
      </Fade>
      <Fade delay={600} top>
        <Card title="Delicious  Pancake" calories="110" image={Image2} />
      </Fade>
      <Fade delay={800} top>
        <Card title="Healthy Fruit Smoothie" calories="150" image={Image3} />
      </Fade>
    </Container>
  );
}

export default App;
