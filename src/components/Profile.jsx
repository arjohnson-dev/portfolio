import { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import Card from "./Card";
import { supabase } from "../lib/supabase";

export default function Profile({ user }) {
  const [displayName, setDisplayName] = useState("");
  const [pendingName, setPendingName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  useEffect(() => {
    let mounted = true;
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      const currentUser = data?.user || user;
      if (!mounted || error || !currentUser) return;
      const initialName = currentUser.user_metadata?.display_name || "";
      setDisplayName(initialName);
      setPendingName(initialName);
      setEmail(currentUser.email || "");
    };
    loadUser();
    return () => {
      mounted = false;
    };
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    if (!pendingName.trim()) {
      setFormError("Display name cannot be empty.");
      return;
    }
    setSubmitting(true);
    const payload = {
      data: {
        display_name: pendingName.trim(),
      },
    };
    const { error } = await supabase.auth.updateUser(payload);
    if (error) {
      setFormError(error.message);
    } else {
      setDisplayName(pendingName.trim());
      setIsEditingName(false);
      setFormSuccess("Profile updated.");
    }
    setSubmitting(false);
  };

  return (
    <Card className="card-outline auth-portal__card profile-card" radius="md">
      <div
        className="auth-portal__card-header"
        style={{ textAlign: "center", margin: 0, padding: 0 }}
      >
        <h2>Account</h2>
      </div>
      <div className="auth-form">
        <Text className="text-muted">
          Email: {email || "—"}
        </Text>
        {!isEditingName ? (
          <div className="profile-row">
            <Text className="text-muted">
              Name: {displayName || "—"}
            </Text>
            <button
              className="icon-button"
              type="button"
              aria-label="Edit display name"
              onClick={() => {
                setPendingName(displayName);
                setIsEditingName(true);
              }}
            >
              <IconPencil size={14} />
            </button>
          </div>
        ) : (
          <label className="auth-form__field">
            <input
              className="auth-input"
              type="text"
              placeholder="Display Name"
              value={pendingName}
              onChange={(e) => setPendingName(e.target.value)}
            />
          </label>
        )}
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-form__actions profile-actions">
          {isEditingName && (
            <>
              <button
                className="auth-button auth-button--danger"
                type="button"
                onClick={() => {
                  setPendingName(displayName);
                  setIsEditingName(false);
                  setFormError("");
                  setFormSuccess("");
                }}
              >
                Cancel
              </button>
              <button
                className="auth-button auth-button--save"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Saving..." : "Save changes"}
              </button>
            </>
          )}
        </div>
        {!isEditingName && (
          <div className="auth-form__actions auth-form__actions--center">
            <button
              className="auth-button auth-button--ghost"
              type="button"
              onClick={() => supabase.auth.signOut()}
            >
              Sign out
            </button>
          </div>
        )}
        <div className="profile-feedback">
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
        </div>
      </form>
    </Card>
  );
}
