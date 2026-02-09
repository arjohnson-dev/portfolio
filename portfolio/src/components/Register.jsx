import { useMemo, useState } from "react";
import { Text } from "@mantine/core";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Card from "./Card";
import { supabase } from "../lib/supabase";

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 2) return { label: "Weak", className: "auth-strength--weak" };
  if (score === 3) return { label: "Fair", className: "auth-strength--fair" };
  if (score === 4) return { label: "Good", className: "auth-strength--good" };
  return { label: "Strong", className: "auth-strength--strong" };
}

export default function Register({ onSignIn }) {
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirm, setShowRegisterConfirm] = useState(false);
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const strength = useMemo(
    () => getPasswordStrength(registerPassword),
    [registerPassword],
  );
  const showStrength = registerPassword.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    if (registerPassword !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.signUp({
      email,
      password: registerPassword,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });
    if (error) {
      setFormError(error.message);
    } else {
      setFormSuccess("Check your email to confirm your account.");
    }
    setSubmitting(false);
  };

  return (
    <Card className="card-outline auth-portal__card" radius="md">
      <div
        className="auth-portal__card-header"
        style={{ textAlign: "center", margin: 0, padding: 0 }}
      >
        <h2>Register</h2>
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
        <div className="auth-form__row">
          <label className="auth-form__field">
            <input
              className="auth-input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label className="auth-form__field">
            <input
              className="auth-input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
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
              type={showRegisterPassword ? "text" : "password"}
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth-input__toggle"
              aria-label={
                showRegisterPassword ? "Hide password" : "Show password"
              }
              onClick={() => setShowRegisterPassword((prev) => !prev)}
            >
              {showRegisterPassword ? (
                <IconEyeOff size={18} />
              ) : (
                <IconEye size={18} />
              )}
            </button>
          </div>
        </label>
        {showStrength && (
          <div className="auth-strength">
            <div className={`auth-strength__bar ${strength.className}`}>
              <span />
            </div>
            <Text size="xs" className="text-muted">
              Strength: {strength.label}
            </Text>
          </div>
        )}
        <label className="auth-form__field">
          <div className="auth-input__password">
            <input
              className="auth-input"
              type={showRegisterConfirm ? "text" : "password"}
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth-input__toggle"
              aria-label={
                showRegisterConfirm ? "Hide password" : "Show password"
              }
              onClick={() => setShowRegisterConfirm((prev) => !prev)}
            >
              {showRegisterConfirm ? (
                <IconEyeOff size={18} />
              ) : (
                <IconEye size={18} />
              )}
            </button>
          </div>
        </label>

        <button className="auth-button" type="submit" disabled={submitting}>
          {submitting ? "Creating account..." : "Create account"}
        </button>
        <Text size="xs" className="text-muted">
          By continuing, you agree to these{" "}
          <a href="/terms" target="_blank" rel="noreferrer">
            Terms of Service
          </a>{" "}
          and this{" "}
          <a href="/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </Text>
        <Text size="sm" className="text-muted">
          Already registered?{" "}
          <button className="auth-link" type="button" onClick={onSignIn}>
            Sign in here.
          </button>
        </Text>
      </form>
    </Card>
  );
}
