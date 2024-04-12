import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import pic1 from './parallax/1.jpg';
import pic2 from "./parallax/2.jpg";
import pic3 from "./parallax/3.jpg";
import pic4 from "./parallax/4.jpg";
import pic5 from "./parallax/5.jpg";
import pic6 from "./parallax/6.jpg";
import pic7 from "./parallax/7.jpg";

const ImageOnScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: pic1,
      alt: "pic",
      scale: scale1,
      styles: {
        top: "-30vh",
        left: "5vw",
        width: "35vw",
        height: "30vh",
      },
    },
    {
      src: pic2,
      alt: "pic",
      scale: scale2,
      styles: {
        top: "22.5vh",
        left: "25vw",
        width: "15vw",
        height: "15vh",
      },
    },
    {
      src: pic6,
      alt: "pic",
      scale: scale3,
      styles: {
        top: "-10vh",
        left: "-25vw",
        width: "20vw",
        height: "45vh",
      },
    },
    {
      src: pic3,
      alt: "pic",
      scale: scale4,
      styles: {
        left: "27.5vw",
        width: "25vw",
        height: "25vh",
      },
    },
    {
      src: pic4,
      alt: "pic",
      scale: scale2,
      styles: {
        top: "27.5vh",
        left: "5vw",
        width: "20vw",
        height: "25vh",
      },
    },
    {
      src: pic5,
      alt: "pic",
      scale: scale1,
      styles: {
        top: "27.5vh",
        left: "-22.5vw",
        width: "30vw",
        height: "25vh",
      },
    },
    {
      src: pic7,
      alt: "pic",
      scale: scale,
      styles: {
        width: "25vw",
        height: "25vh",
      },
    },
  ];

  return (
    <>
        <ContainerRef ref={container}>
      <StickyContainer>
        {pictures.map(({ src, alt, scale, styles }, index) => {
          return (
            <Element style={{ scale: scale }} key={index}>
              <ImageContainer index={index} style={styles}>
                <img src={src} alt={alt} />
              </ImageContainer>
            </Element>
          );
        })}
      </StickyContainer>
    </ContainerRef>
    <Spacer/>
    </>

  );
};

const Spacer = styled.div`
  height: 100vh;
  background-color: black;
`

const ContainerRef = styled.div`
  height: 300vh;
  position: relative;
  background-color: black;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  
`;
const Element = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

export default ImageOnScroll;
