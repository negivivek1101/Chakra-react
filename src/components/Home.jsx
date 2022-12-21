import React from "react";
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  texttransfrom: "uppercase",
  p: "4",
  size: "2xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} padding={16}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px"}
          m={"auto"}
        >
          Services
        </Heading>
        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img6} h={["40", "300"]} filter={"hue-rotate(-130deg)"} />
          <Text
            letterSpacing={"wider"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={"100vh"}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        React app built using chakra ui
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
      <Image src={img2} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Music Production is cool
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
      <Image src={img3} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Keep it going up
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
      <Image src={img4} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        MERN stack is better than MEAN
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
      <Image src={img5} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Web dev responsive
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
