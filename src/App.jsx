import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import Toolbar from "./components/Toolbar";
import Home from "./views/Home";
import WorkHistory from "./views/WorkHistory";
import Resume from "./views/Resume";
import Showcase from "./views/Showcase";
import TodoShowcase from "./views/TodoShowcase";
import Contact from "./views/Contact";
import TermsOfService from "./views/TermsOfService";
import PrivacyPolicy from "./views/PrivacyPolicy";
import ResetPassword from "./views/ResetPassword";

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcase/to-do" element={<TodoShowcase />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
