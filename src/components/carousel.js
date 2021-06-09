import React from "react"
import { GridItem, Text, Image } from "@chakra-ui/react"
// import {
//   FaNodeJs,
//   FaReact,
//   FaVuejs,
//   FaGulp,
//   FaHtml5,
//   FaCss3,
//   FaLess,
//   FaSass,
// } from "react-icons/fa"

// import {
//   SiMongodb,
//   SiMysql,
//   SiJsonwebtokens,
//   SiJavascript,
//   SiJquery,
//   SiBootstrap,
// } from "react-icons/si"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselOfQuilts = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <GridItem rowSpan={1} colSpan={{ base: 12 }} bg={{ base: "white" }} pb={10}>
      <Slider {...settings}>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Image
            src="https://via.placeholder.com/300x300"
            alt="placeholder alt text"
            alignContent="center"
          />
        </GridItem>
      </Slider>
    </GridItem>
  )
}

export default CarouselOfQuilts
