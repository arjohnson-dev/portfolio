import { useState } from "react";
import { Container, Title, Text, Group, Tabs, Stack } from "@mantine/core";
import Card from "../components/Card";
import TodoList from "../components/TodoList";
import CatchLogs from "../components/CatchLogs";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("catch-logs");

  return (
    <Container size="xl" className="page-container">
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
            <Tabs.Tab value="catch-logs">Catch Logs</Tabs.Tab>
            <Tabs.Tab value="todo">To-Do List</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="catch-logs">
            <Card p="xl" radius="md">
              <CatchLogs />
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="todo">
            <Card p="xl" radius="md">
              <TodoList />
            </Card>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </Container>
  );
}
