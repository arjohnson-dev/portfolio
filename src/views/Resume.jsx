import { Container, Text, Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Card from "../components/Card";

const RESUME_PDF = "/AndrewJohnson_Resume.pdf";

export default function Resume() {
  return (
    <Container size="xl" className="page-container">
      <Card shadow="xl" radius="lg" p={40}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-xl)",
          }}
        >
          <div style={{ width: "100%", maxWidth: 1000 }}>
            <iframe
              src={RESUME_PDF}
              title="Andrew Johnson Resume"
              style={{
                width: "100%",
                height: "80vh",
                minHeight: "600px",
                borderRadius: "12px",
                background: "white",
              }}
            />
          </div>

          <Text size="sm" c="dimmed" style={{ textAlign: "center" }}>
            If the embedded PDF doesn't load, use "Open in New Tab".
          </Text>

          <Button
            component="a"
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            leftSection={<IconExternalLink size={20} />}
          >
            Open in New Tab
          </Button>
        </div>
      </Card>
    </Container>
  );
}
