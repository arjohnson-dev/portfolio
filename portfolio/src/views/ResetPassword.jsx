import { useEffect, useState } from "react";
import { Container, Title, Text, Stack } from "@mantine/core";
import Card from "../components/Card";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setHasSession(Boolean(data?.session));
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    if (password.length < 8) {
      setFormError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setFormError(error.message);
    } else {
      setFormSuccess("Password updated. You can now sign in.");
      setTimeout(() => navigate("/showcase"), 800);
    }
    setSubmitting(false);
  };

  return (
    <Container size="xl" className="page-container">
      <Card shadow="xl" radius="lg" p={40}>
        <Stack gap="md">
          <Title order={1} className="title-hero">
            Reset Password
          </Title>
          {!hasSession && (
            <Text size="sm" className="text-muted">
              This link is invalid or expired. Please request a new reset link.
            </Text>
          )}
          {hasSession && (
            <form className="auth-form" onSubmit={handleSubmit}>
              {formError && (
                <Text size="xs" style={{ color: "#fecaca" }}>
                  {formError}
                </Text>
              )}
              {formSuccess && (
                <Text size="xs" style={{ color: "#bbf7d0" }}>
                  {formSuccess}
                </Text>
              )}
              <label className="auth-form__field">
                <input
                  className="auth-input"
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label className="auth-form__field">
                <input
                  className="auth-input"
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              <button className="auth-button" type="submit" disabled={submitting}>
                {submitting ? "Updating..." : "Update Password"}
              </button>
            </form>
          )}
        </Stack>
      </Card>
    </Container>
  );
}
