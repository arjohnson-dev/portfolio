import { Anchor, Group, Image, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import aarieStylesImage from "../assets/Aarie Styles.png";
import salonFavicon from "../assets/salon-favicon.png";

export default function AariesSalon() {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Anchor
          href="https://aaries-salon.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="company-link"
          style={{ alignSelf: "flex-start" }}
        >
          <Group gap="xs" align="center" wrap="nowrap">
            <Image
              src={salonFavicon}
              alt="Aarie Styles Salon icon"
              fit="contain"
              loading="lazy"
              style={{
                width: "var(--logo-size)",
                height: "var(--logo-size)",
              }}
            />
            <Text span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Aarie Styles Salon
            </Text>
            <IconChevronRight size={18} />
          </Group>
        </Anchor>

        <Text className="text-muted">
          This project is a responsive business website developed for a local
          hair salon looking to modernize its online presence. The site was
          built using Vite, React, and JavaScript, with most styling handled
          through custom CSS to keep layout control flexible.
        </Text>

        <Text className="text-muted">
          The design direction was inspired by Meche Salon in Los Angeles, then
          adapted to fit the client&apos;s branding and needs. The primary focus
          was a clean, responsive interface that works well across desktop and
          mobile while keeping the experience straightforward for customers.
        </Text>

        <Text className="text-muted">
          The result is a simple, modern site that clearly presents services
          and contact information while establishing a more professional digital
          presence.
        </Text>

        <Image
          src={aarieStylesImage}
          alt="Aarie Styles Salon website showcase"
          radius="md"
          style={{ width: "100%" }}
        />
      </Stack>
    </Stack>
  );
}
