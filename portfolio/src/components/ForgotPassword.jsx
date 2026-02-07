import { useState } from "react";
import { Text } from "@mantine/core";
import Card from "./Card";
import { supabase } from "../lib/supabase";

export default function ForgotPassword({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    setSubmitting(true);
    const redirectTo = `${window.location.origin}/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    if (error) {
      setFormError(error.message);
    } else {
      setFormSuccess(
        "Check your email for a reset link. The link will open the reset form."
      );
    }
    setSubmitting(false);
  };

  return (
    <Card className="card-outline auth-portal__card" radius="md">
      <div
        className="auth-portal__card-header"
        style={{ textAlign: "center", margin: 0, padding: 0 }}
      >
        <h2>Forgot Password</h2>
      </div>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button
          className="auth-button auth-button--save"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send reset link"}
        </button>
        <Text size="xs" className="text-muted">
          Remembered your password?{" "}
          <button className="auth-link" type="button" onClick={onSignIn}>
            Sign in here.
          </button>
        </Text>
      </form>
    </Card>
  );
}
