import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";
import { supabase } from "../lib/supabase";

export default function AuthPortal() {
  const [activeForm, setActiveForm] = useState("signin");
  const [session, setSession] = useState(null);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setSession(data?.session ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession);
        if (!nextSession) setActiveForm("signin");
      }
    );
    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <>
      {session?.user ? (
        <Profile user={session.user} />
      ) : activeForm === "signin" ? (
        <SignIn
          onRegister={() => setActiveForm("register")}
          onForgot={() => setActiveForm("forgot")}
        />
      ) : activeForm === "register" ? (
        <Register onSignIn={() => setActiveForm("signin")} />
      ) : (
        <ForgotPassword onSignIn={() => setActiveForm("signin")} />
      )}
    </>
  );
}
