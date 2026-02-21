import { Group, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";

export default function Toolbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="toolbar-vignette" aria-hidden="true" />
      <div className="toolbar-shell">
        <Card
          className="surface-dark--tight toolbar-card"
          shadow={undefined}
          radius="var(--radius-lg)"
          style={{
            padding: "var(--toolbar-padding-y) var(--toolbar-padding-x)",
            boxShadow: "var(--shadow-elevated)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Group
            className="toolbar-nav"
            justify="center"
            align="center"
            gap="var(--toolbar-gap)"
            wrap="nowrap"
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Text size="md" className="toolbar-item" data-active={isActive("/")}>
                Home
              </Text>
            </Link>
            <Link
              to="/work-history"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text
                size="md"
                className="toolbar-item"
                data-active={isActive("/work-history")}
              >
                Career
              </Text>
            </Link>
            <Link
              to="/showcase"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text
                size="md"
                className="toolbar-item"
                data-active={isActive("/showcase")}
              >
                Showcase
              </Text>
            </Link>
            <Link
              to="/resume"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text
                size="md"
                className="toolbar-item"
                data-active={isActive("/resume")}
              >
                Resume
              </Text>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text
                size="md"
                className="toolbar-item"
                data-active={isActive("/contact")}
              >
                Contact
              </Text>
            </Link>
          </Group>
        </Card>
      </div>
    </>
  );
}
