import {
  Container,
  Title,
  Text,
  Stack,
  Anchor,
  Group,
  Image,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Card from "../components/Card";

export default function WorkHistory() {
  const experiences = [
    {
      company: "Space Grid AI",
      url: "https://spacegrid.ai/",
      position: "Head of Product",
      location: "St. Petersburg, FL (Remote)",
      dates: "2024 - 2026",
      description: (
        <>
          Initially, I was brought on as <strong>Lead Unity Developer</strong>{" "}
          and later moved into <strong>Head of Product</strong>— I designed and
          developed the full system stack for Space Grid AI’s visual planning
          platform. Made using{" "}
          <strong>Unity, React, and Neon's serverless database service</strong>,
          the product allowed teams view their workspace as an{" "}
          <strong>interactive 3D environment</strong> and plan object placement
          —vessels, tenders, containers, forklifts, and more— across time; using
          a UI built around a calendar time slider.
          <br />
          <br />
          The core loop was centered around selecting a date/time and
          positioning objects; changes made in the past would override changes
          in the future. The focus was <strong>modernization</strong> for dated
          shipping yards and improved <strong>efficiency</strong> in daily
          planning.
        </>
      ),
    },
    {
      company: "ECS",
      url: "https://www.ecsorl.com/",
      position: "Software Engineer II",
      location: "Orlando, FL (Remote)",
      dates: "2022 - 2023",
      description: (
        <>
          Hired to help develop a <strong>mobile application</strong> for the{" "}
          <strong>U.S. Air Force</strong> and a{" "}
          <strong>VR training experience</strong>, that taught Military Working
          Dog handlers how to treat heat stroke and heat exhaustion. I
          <strong>researched canine behavior</strong> and worked closely with
          the art team to build a{" "}
          <strong>blended animation system within Unity</strong> that
          transitioned between healthy and sick states based on a computed
          condition index derived from metrics like temperature and hydration.
          The work deepened my understanding of what it means to be a strong
          engineer, and I would gladly collaborate with the team again.
        </>
      ),
    },
    {
      company: "Smokercraft",
      url: "https://smokercraft.com/",
      position: "Systems Developer",
      location: "New Paris, IN",
      dates: "2022",
      description: (
        <>
          Supported the largest name in aluminum fishing and pleasure boats
          across five brands, including Smokercraft, Starcraft, Sylvan,{" "}
          SunChaser, and Starweld. Here, I{" "}
          <strong>
            built and maintained data aggregation tools and Visual Basic
            applications
          </strong>{" "}
          for sales and accounting,{" "}
          <strong>
            improving operational visibility and day-to-day workflows
          </strong>
          . This role sharpened my ability to translate business needs into
          practical internal tools.
        </>
      ),
    },
    {
      company: "SSE Inc",
      url: "https://www.sseinc.com/",
      position: "Programmer",
      location: "Jacksonville, FL",
      dates: "2021 - 2022",
      description: (
        <>
          Partnered with <strong>Boeing</strong> engineers to build{" "}
          <strong>virtual maintenance trainers (VMT)</strong> for aircraft such
          as the <strong>F-15</strong> and <strong>P-8</strong>. Developed
          primarily in <strong>Unity</strong> and contributed{" "}
          <strong>C++</strong> to the simulation engine, grounding my game-dev
          background in <strong>real-world training applications</strong> and
          establishing a strong foundation in{" "}
          <strong>simulation engineering</strong>.
        </>
      ),
    },
  ];

  return (
    <Container size="xl" className="page-container">
      <Card shadow="xl" radius="lg" p={40}>
        <Title
          order={1}
          className="title-hero"
          style={{ marginBottom: "var(--space-2xl)", textAlign: "center" }}
        >
          Work History
        </Title>

        <Stack gap="var(--space-xl)">
          {experiences.map((exp, index) => (
            <Card key={index} p="xl" radius="md">
              <Anchor
                href={exp.url}
                target="_blank"
                rel="noreferrer"
                className="company-link"
              >
                <Group gap="xs" align="center" wrap="nowrap">
                  <Image
                    src={`https://www.google.com/s2/favicons?domain=${new URL(exp.url).hostname}&sz=64`}
                    alt={`${exp.company} logo`}
                    fit="contain"
                    loading="lazy"
                    style={{
                      width: "var(--logo-size)",
                      height: "var(--logo-size)",
                    }}
                  />
                  <Text span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                    {exp.company}
                  </Text>
                  <IconChevronRight size={18} />
                </Group>
              </Anchor>
              <Text
                size="lg"
                fw={500}
                style={{ marginBottom: "var(--space-2xs)" }}
              >
                {exp.position}
              </Text>
              <Text
                size="sm"
                className="text-muted"
                style={{ marginBottom: "var(--space-md)" }}
              >
                {exp.location} • {exp.dates}
              </Text>
              <Text size="md" style={{ lineHeight: 1.6 }}>
                {exp.description}
              </Text>
            </Card>
          ))}
        </Stack>
      </Card>
    </Container>
  );
}
