import { Container, Title, Text } from "@mantine/core";
import Card from "../components/Card";

export default function ComingSoon() {
  return (
    <Container size="xl" className="page-container page-container--loose">
      <Card
        shadow="xl"
        radius="lg"
        p={80}
        style={{
          textAlign: "center",
        }}
      >
        <Title
          order={1}
          className="title-hero-lg"
          style={{ marginBottom: "var(--space-xl)" }}
        >
          Coming Soon!
        </Title>
        <Text size="xl">
          This page is currently under construction. Check back soon!
        </Text>
      </Card>
    </Container>
  );
}
