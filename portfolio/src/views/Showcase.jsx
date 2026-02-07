import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Group,
  Tabs,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import Card from "../components/Card";
import TodoList from "../components/TodoList";
import AuthPortal from "../components/AuthPortal";

export default function Showcase() {
  const theme = useMantineTheme();
  const [activeTab, setActiveTab] = useState("auth");

  return (
    <Container
      size="xl"
      className="page-container"
    >
      <Card shadow="xl" radius="lg" p={40}>
        <Group
          justify="space-between"
          align="center"
          style={{ marginBottom: "var(--space-xl)" }}
        >
          <div>
            <Title
              order={1}
              className="title-hero"
              style={{ marginBottom: "var(--space-2xs)" }}
            >
              Showcase
            </Title>
            <Text className="text-muted">
              A curated set of projects—some live, some in progress.
            </Text>
          </div>
        </Group>

        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={setActiveTab}
          keepMounted={false}
          classNames={{
            list: "showcase-tabs__list",
            tab: "showcase-tabs__tab",
            tabLabel: "showcase-tabs__label",
            panel: "showcase-tabs__panel",
          }}
          styles={{
            root: { width: "100%" },
            list: {
              minWidth: "var(--tabs-sidebar)",
              padding: "var(--space-lg)",
            },
            panel: { paddingLeft: "var(--space-lg)", width: "100%" },
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="auth">Auth Portal</Tabs.Tab>
            <Tabs.Tab value="todo">To-Do List</Tabs.Tab>
            <Tabs.Tab value="saas">SaaS Dashboard</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="todo">
            <Card
              p="xl"
              radius="md"
            >
              <TodoList />
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="auth">
            <AuthPortal />
          </Tabs.Panel>

          <Tabs.Panel value="saas">
            <Card
              className="card-outline"
              p="xl"
              radius="md"
            >
              <Stack gap="sm">
                <Title order={3} style={{ margin: 0 }}>
                  SaaS Dashboard
                </Title>
                <Text size="sm" className="text-muted">
                  Coming soon.
                </Text>
              </Stack>
            </Card>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </Container>
  );
}
