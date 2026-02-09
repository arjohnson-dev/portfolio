import { useRef } from "react";
import { Container, Group, Image, Text, Stack } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Autoplay from "embla-carousel-autoplay";
import headshot from "../assets/headshot.jpeg";
import lookingAway from "../assets/looking-away.jpeg";
import suki from "../assets/suki.jpeg";
import montserrat from "../assets/montserrat.jpeg";
import Card from "../components/Card";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const carouselImages = [
    { src: headshot, alt: "Andrew" },
    { src: montserrat, alt: "Mountains" },
    { src: suki, alt: "Suki" },
    { src: lookingAway, alt: "Outdoors" },
  ];

  return (
    <Container size="xl" className="page-container">
      <Card
        shadow="xl"
        radius="lg"
        p={40}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Group
          align="flex-start"
          gap="var(--space-2xl)"
          style={{ flexWrap: "wrap" }}
        >
          {/* Left: Carousel */}
          <div
            style={{
              flex: "1 1 400px",
              minWidth: "var(--content-min)",
              maxWidth: "var(--content-max)",
            }}
          >
            <Carousel
              withIndicators
              height="var(--carousel-height)"
              loop
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              styles={{
                control: {
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                },
                indicator: {
                  backgroundColor: "var(--mantine-color-colors-6)",
                  "&[data-active]": {
                    backgroundColor: "var(--mantine-color-colors-5)",
                  },
                },
              }}
            >
              {carouselImages.map((image, index) => (
                <Carousel.Slide key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    radius="md"
                    fit="cover"
                    h="100%"
                    style={{ boxShadow: "var(--shadow-image)" }}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>

          {/* Right: Content */}
          <Stack
            style={{ flex: "1 1 400px", minWidth: "var(--content-min)" }}
            gap="md"
            justify="flex-start"
          >
            <div style={{ textAlign: "right" }}>
              <h1
                style={{
                  marginTop: 0,
                  marginBottom: "var(--space-2xs)",
                }}
              >
                Andrew Johnson
              </h1>
              <h2 style={{ marginTop: 0 }}>Software Engineer</h2>
            </div>

            <Stack
              gap="sm"
              flex={1}
              style={{
                textAlign: "left",
              }}
            >
              <Text size="md" style={{ lineHeight: 1.8 }}>
                I graduated from{" "}
                <strong>
                  Full Sail University with a Bachelor of Science in Game
                  Development in 2021
                </strong>
                , and since then I've had the chance to build real-world
                training and simulation systems for organizations like{" "}
                <strong>NASA, Boeing, the Air Force, and the Army</strong>. More
                recently, I’ve supported <strong>ASSIST Maritime</strong> and{" "}
                <strong>Bardex</strong>—two powerhouses in the maritime
                industry—on projects that bring modern tooling and clarity to
                complex operations. Most of my time goes into building
                simulation systems, training tools, and virtual environments
                that help people learn and practice in realistic, immersive
                environments.
              </Text>
              <Text size="md" style={{ lineHeight: 1.7 }}>
                While I spend most of my days as a{" "}
                <strong>Unity Developer</strong> working with{" "}
                <strong>C# and Unity Engine</strong>, I wanted to showcase some
                of my other skills—so I built this portfolio site from scratch
                using <strong>React and Vite</strong> and deployed it on{" "}
                <strong>Vercel</strong>. The photos throughout are all my own.
              </Text>
              <Text size="md" style={{ lineHeight: 1.7 }}>
                When I'm not coding, you'll usually find me outdoors with my
                partner and our dog, Suki. We're always hiking some trail,
                hanging out by the lake, or just exploring somewhere new. I've
                found that getting outside and disconnecting for a while
                actually helps me come back to problems with a clear head and
                fresh ideas.
              </Text>
            </Stack>
          </Stack>
        </Group>
      </Card>
    </Container>
  );
}
