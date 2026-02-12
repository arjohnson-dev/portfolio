import { Container, Title, Group } from "@mantine/core";
import Card from "../components/Card";
import TodoList from "../components/TodoList";

export default function TodoShowcase() {
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
          <Title order={1} className="title-hero" style={{ marginBottom: 0 }}>
            To-Do List
          </Title>
        </Group>

        <div style={{ width: "100%" }}>
          <TodoList />
        </div>
      </Card>
    </Container>
  );
}
