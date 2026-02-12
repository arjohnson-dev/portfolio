import { useState } from "react";
import {
  Anchor,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Card from "./Card";
import catchLogsIcon from "../assets/catchlogs-icon.png";

const fallbackScreenshots = [
  {
    src: "https://s.wordpress.com/mshots/v1/https://catch-logs.app/journal?w=1200",
    alt: "Catch Logs journal view",
  },
  {
    src: "https://s.wordpress.com/mshots/v1/https://catch-logs.app/stats?w=1200",
    alt: "Catch Logs stats view",
  },
  {
    src: "https://s.wordpress.com/mshots/v1/https://catch-logs.app/entries/new?w=1200",
    alt: "Catch Logs new entry view",
  },
];

const localScreenshotModules = import.meta.glob(
  [
    "../assets/catchlogs-*.{png,jpg,jpeg,webp}",
    "../assets/map-view.{png,jpg,jpeg,webp}",
    "../assets/edit-entry.{png,jpg,jpeg,webp}",
  ],
  { eager: true, import: "default" },
);

const localScreenshots = Object.entries(localScreenshotModules)
  .filter(([path]) => !path.endsWith("/catchlogs-icon.png"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], index) => ({
    src,
    alt: `Catch Logs screenshot ${index + 1}: ${path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")}`,
  }));

const screenshots =
  localScreenshots.length > 0 ? localScreenshots : fallbackScreenshots;
const showcaseScreenshots = screenshots.slice(0, 2);

export default function CatchLogs() {
  const [selectedShot, setSelectedShot] = useState(null);

  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Group gap="md" align="center">
          <Image
            src={catchLogsIcon}
            alt="Catch Logs icon"
            w={46}
            h={46}
            radius={0}
            fit="cover"
            style={{ aspectRatio: "1 / 1" }}
          />
          <Title order={3}>Catch Logs</Title>
        </Group>
        <Anchor href="https://catch-logs.app/" target="_blank" rel="noreferrer">
          catch-logs.app
        </Anchor>
        <Text className="text-muted" style={{ maxWidth: "70ch" }}>
          Catch Logs gives anglers a fast, focused way to document every outing,
          including catch details, location, tackle, time, and conditions.
          Entries are easy to review later so patterns stand out across seasons,
          helping with better decisions on when and how to fish. The platform is
          built as a private journal, rather than a social sharing space.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="md">
        {showcaseScreenshots.map((shot) => (
          <Card key={shot.alt} p={0} radius="md" style={{ overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => setSelectedShot(shot)}
              style={{
                width: "100%",
                display: "block",
                padding: 0,
                margin: 0,
                border: 0,
                background: "transparent",
                cursor: "zoom-in",
              }}
              aria-label={`Expand ${shot.alt}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                height={220}
                fit="cover"
                fallbackSrc={catchLogsIcon}
              />
            </button>
          </Card>
        ))}
      </SimpleGrid>

      {selectedShot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedShot.alt}
          onClick={() => setSelectedShot(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(94vw, 1200px)",
              maxHeight: "92vh",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedShot(null)}
              aria-label="Close expanded image"
              style={{
                border: 0,
                background: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                width: "36px",
                height: "36px",
                borderRadius: "999px",
                cursor: "pointer",
                position: "absolute",
                top: "-14px",
                right: "-14px",
                fontSize: "22px",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
            <img
              src={selectedShot.src}
              alt={selectedShot.alt}
              style={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45)",
                background: "#000",
              }}
            />
          </div>
        </div>
      )}
    </Stack>
  );
}
