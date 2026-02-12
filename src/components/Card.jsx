import { Paper, useMantineTheme } from "@mantine/core";

export default function Card({
  children,
  className = "",
  style,
  ...paperProps
}) {
  const theme = useMantineTheme();
  const classes = ["surface-dark", className].filter(Boolean).join(" ");
  const baseHex = theme.colors?.colors?.[9] || "#000000";
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseHex);
  const rgb = match
    ? `${parseInt(match[1], 16)}, ${parseInt(match[2], 16)}, ${parseInt(match[3], 16)}`
    : "0, 0, 0";
  const backgroundColor = `rgba(${rgb}, 0.80)`;
  const mergedStyle = { backgroundColor, ...(style || {}) };

  return (
    <Paper {...paperProps} className={classes} style={mergedStyle}>
      {children}
    </Paper>
  );
}
