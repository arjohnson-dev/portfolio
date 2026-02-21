import { Container, Text, Stack, Anchor, Image } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";
import Card from "../components/Card";
import headshot from "../assets/headshot_1.jpeg";

export default function Contact() {
  const githubUrl = "https://github.com/arjohnson-dev/portfolio";
  const linkedinUrl =
    "https://www.linkedin.com/in/andrewjohnsonsoftwareengineer/";
  const upworkUrl = "https://www.upwork.com/freelancers/~REPLACE_WITH_YOUR_ID";

  const contactButtons = [
    {
      label: "Email",
      href: "mailto:arjohnson.dev@gmail.com",
      icon: <IconMail size={20} />,
    },
    { label: "GitHub", href: githubUrl, icon: <IconBrandGithub size={20} /> },
    {
      label: "LinkedIn",
      href: linkedinUrl,
      icon: <IconBrandLinkedin size={20} />,
    },
    { label: "Upwork", href: upworkUrl, icon: <IconBriefcase size={20} /> },
  ];

  return (
    <Container size="sm" className="page-container">
      <Card
        shadow="xl"
        radius="var(--radius-xl)"
        p={{ base: "lg", sm: "xl" }}
        className="contact-hub-card"
      >
        <Stack align="center" gap="md">
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

          <Stack align="center" gap={4}>
            <Text className="contact-hub-name">Andrew Johnson</Text>
            <Text className="contact-hub-tagline">Software Engineer</Text>
          </Stack>

          <Stack w="100%" gap="sm" className="contact-hub-links">
            {contactButtons.map((item) => (
              <Anchor
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="contact-hub-button"
              >
                <span className="contact-hub-button__icon">{item.icon}</span>
                <span className="contact-hub-button__label">{item.label}</span>
              </Anchor>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}
