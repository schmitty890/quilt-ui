import React from "react"
import { GridItem } from "@chakra-ui/react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"

const CarouselOfQuilts = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 7000,
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
          <StaticImage
            src="../images/one.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/two.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/three.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/four.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/five.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/six.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/seven.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <StaticImage
            src="../images/test.jpeg"
            alt="A dinosaur"
            placeholder="blurred"
            width={200}
            height={200}
            loading="eager"
          />
        </GridItem>
      </Slider>
    </GridItem>
  )
}

export default CarouselOfQuilts
