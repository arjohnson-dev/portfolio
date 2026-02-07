import { useState } from "react";
import { TextInput, Button, Stack, Text, Paper } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todoInput.value.trim();
    if (todo === "") {
      return;
    }
    setTodos([...todos, todo]);
    e.target.elements.todoInput.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          name="todoInput"
          placeholder="What needs to be done?"
          rightSection={
            <Button
              type="submit"
              variant="subtle"
              color="colors"
              size="xs"
              style={{ paddingInline: "var(--space-xs)" }}
            >
              <IconPlus size={16} />
            </Button>
          }
        />

        {todos.length < 1 && (
          <Text size="sm" className="text-muted">
            Nothing to do.
          </Text>
        )}

        <Stack gap="sm">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              text={todo}
              onClick={() => {
                const newTodos = todos.filter((t, i) => i !== index);
                setTodos(newTodos);
              }}
            />
          ))}
        </Stack>
      </Stack>
    </form>
  );
}

export default TodoList;
