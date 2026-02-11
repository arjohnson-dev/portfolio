import { Container, Text, Stack, Anchor, Group, Image } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Card from "../components/Card";
import headshot from "../assets/headshot_1.jpeg";

export default function Contact() {
  const githubUrl = "https://github.com/arjohnson-dev/portfolio";
  const linkedinUrl =
    "https://www.linkedin.com/in/andrewjohnsonsoftwareengineer/";

  return (
    <Container size="xl" className="page-container">
      <Card shadow="xl" radius="lg" p={40}>
        <Group
          align="center"
          justify="center"
          style={{ flexWrap: "wrap", gap: "var(--space-xl)" }}
        >
          <Image
            src={headshot}
            alt="Andrew Johnson"
            radius="md"
            fit="cover"
            style={{
              width: "var(--headshot-size)",
              height: "var(--headshot-size)",
              boxShadow: "var(--shadow-soft)",
            }}
          />

          <Stack align="flex-start" gap="md" style={{ textAlign: "left" }}>
            <Group gap="xs" align="center">
              <IconMail size={18} />
              <Text
                component="a"
                href="mailto:arjohnson.dev@gmail.com"
                style={{
                  fontSize: "1.1rem",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                arjohnson.dev@gmail.com
              </Text>
            </Group>

            <Anchor
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-xs)",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <IconBrandGithub size={18} />
              GitHub
            </Anchor>

            <Anchor
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-xs)",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <IconBrandLinkedin size={18} />
              LinkedIn
            </Anchor>
          </Stack>
        </Group>
      </Card>
    </Container>
  );
}
