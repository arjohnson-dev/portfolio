import { useState } from "react";
import { Group, Text, ActionIcon, Checkbox } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

function Todo({ text, onClick }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Group justify="space-between" align="center" wrap="nowrap">
      <Group align="center" gap="sm" wrap="nowrap" style={{ flex: 1 }}>
        <Checkbox
          checked={isChecked}
          onChange={(e) => setIsChecked(e.currentTarget.checked)}
        />
        <Text
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            opacity: isChecked ? 0.6 : 1,
          }}
        >
          {text}
        </Text>
      </Group>
      <ActionIcon
        variant="subtle"
        color="red"
        onClick={onClick}
        aria-label="Remove todo"
      >
        <IconX size={16} />
      </ActionIcon>
    </Group>
  );
}

export default Todo;
