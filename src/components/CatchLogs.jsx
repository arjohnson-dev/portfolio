import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Anchor,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import Card from "./Card";
import catchLogsIcon from "../assets/catchlogs-icon.png";
import journalViewImage from "../assets/journal-view.png";
import mapViewImage from "../assets/map-view.png";
import mapViewAltImage from "../assets/map-view-alt.png";

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

const localScreenshots = [
  { src: journalViewImage, alt: "Catch Logs journal view" },
  { src: mapViewImage, alt: "Catch Logs map view" },
  { src: mapViewAltImage, alt: "Catch Logs alternate map view" },
];

const screenshots =
  localScreenshots.length > 0 ? localScreenshots : fallbackScreenshots;
const showcaseScreenshots = screenshots.slice(0, 3);

export default function CatchLogs() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedShot =
    selectedIndex === null ? null : showcaseScreenshots[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (
        (currentIndex - 1 + showcaseScreenshots.length) %
        showcaseScreenshots.length
      );
    });
  };

  const showNext = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex + 1) % showcaseScreenshots.length;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Anchor
          href="https://catch-logs.app/"
          target="_blank"
          rel="noreferrer"
          className="company-link catchlogs-link"
          style={{ alignSelf: "flex-start" }}
        >
          <Group gap="xs" align="center" wrap="nowrap">
            <Image
              src={catchLogsIcon}
              alt="Catch Logs icon"
              fit="contain"
              loading="lazy"
              style={{
                width: "var(--logo-size)",
                height: "var(--logo-size)",
              }}
            />
            <Text span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Catch Logs
            </Text>
            <IconChevronRight size={18} />
          </Group>
        </Anchor>

        <Text className="text-muted" style={{ maxWidth: "70ch" }}>
          Catch Logs gives anglers a fast, focused way to document every outing,
          including catch details, location, tackle, time, and conditions.
          Entries are easy to review later so patterns stand out across seasons,
          helping with better decisions on when and how to fish. The platform is
          built as a private journal, rather than a social sharing space.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {showcaseScreenshots.map((shot, index) => (
          <Card key={shot.alt} p={0} radius="md" style={{ overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
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

      {selectedShot &&
        createPortal(
          <div
            className="catchlogs-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={selectedShot.alt}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="catchlogs-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="catchlogs-modal-nav catchlogs-modal-nav--left"
                type="button"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                <IconChevronLeft size={20} stroke={2.2} aria-hidden="true" />
              </button>
              <button
                className="catchlogs-modal-close"
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close expanded image"
              >
                <IconX size={18} stroke={2.2} aria-hidden="true" />
              </button>
              <img
                className="catchlogs-modal-image"
                src={selectedShot.src}
                alt={selectedShot.alt}
              />
              <button
                className="catchlogs-modal-nav catchlogs-modal-nav--right"
                type="button"
                onClick={showNext}
                aria-label="Next image"
              >
                <IconChevronRight size={20} stroke={2.2} aria-hidden="true" />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </Stack>
  );
}
