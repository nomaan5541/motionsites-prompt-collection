import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { BackgroundsPage } from "./components/BackgroundsPage";
import { GradientsPage } from "./components/GradientsPage";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";
import { LivePreviewPage } from "./components/LivePreviewPage";
import { ExtractedExamplesPage } from "./components/ExtractedExamplesPage";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/examples" element={<ExtractedExamplesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/preview/:slug" element={<LivePreviewPage />} />
        <Route path="/backgrounds" element={<BackgroundsPage />} />
        <Route path="/gradients" element={<GradientsPage />} />
      </Routes>
    </AppShell>
  );
}

