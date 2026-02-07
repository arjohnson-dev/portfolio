import { useState } from "react";
import { Text } from "@mantine/core";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Card from "./Card";
import { supabase } from "../lib/supabase";

export default function SignIn({ onRegister, onForgot }) {
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setFormError(error.message);
    }
    setSubmitting(false);
  };

  return (
    <Card className="card-outline auth-portal__card" radius="md">
      <div
        className="auth-portal__card-header"
        style={{ textAlign: "center", margin: 0, padding: 0 }}
      >
        <h2>Sign In</h2>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        {formError && (
          <Text size="xs" style={{ color: "#fecaca" }}>
            {formError}
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
        <label className="auth-form__field">
          <div className="auth-input__password">
            <input
              className="auth-input"
              type={showSignInPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth-input__toggle"
              aria-label={
                showSignInPassword ? "Hide password" : "Show password"
              }
              onClick={() => setShowSignInPassword((prev) => !prev)}
            >
              {showSignInPassword ? (
                <IconEyeOff size={18} />
              ) : (
                <IconEye size={18} />
              )}
            </button>
          </div>
        </label>
        <button
          className="auth-button auth-button--signin"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Signing In..." : "Sign In"}
        </button>
        <div className="auth-form__links">
          <button className="auth-link" type="button" onClick={onForgot}>
            Forgot password?
          </button>
          <Text size="sm" className="text-muted">
            Need an account?{" "}
            <button className="auth-link" type="button" onClick={onRegister}>
              Register here.
            </button>
          </Text>
        </div>
      </form>
    </Card>
  );
}
