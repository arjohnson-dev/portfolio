import { Container, Title, Text, Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import Card from "../components/Card";

export default function Resume() {
  const handleDownloadResume = () => {
    // TODO: Replace with actual PDF download when resume is added
    console.log("Resume download - coming soon!");
  };

  return (
    <Container
      size="xl"
      className="page-container"
    >
      <Card
        shadow="xl"
        radius="lg"
        p={40}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-xl)",
          }}
        >
          <Title order={1} className="title-hero">
            Resume
          </Title>

          <Button
            leftSection={<IconDownload size={20} />}
            variant="filled"
            size="lg"
            onClick={handleDownloadResume}
            styles={{
              root: {
                backgroundColor: "var(--mantine-color-colors-5)",
                "&:hover": {
                  backgroundColor: "var(--mantine-color-colors-6)",
                },
              },
            }}
          >
            Download Resume (PDF)
          </Button>

          <Text size="xl" style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
            Coming Soon!
          </Text>
        </div>
      </Card>
    </Container>
  );
}
