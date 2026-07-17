import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { BackgroundsPage } from "./components/BackgroundsPage";
import { GradientsPage } from "./components/GradientsPage";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";
import { LivePreviewPage } from "./components/LivePreviewPage";
import { RequestPage } from "./components/RequestPage";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/preview/:slug" element={<LivePreviewPage />} />
        <Route path="/backgrounds" element={<BackgroundsPage />} />
        <Route path="/gradients" element={<GradientsPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/contact" element={<RequestPage contactMode />} />
      </Routes>
    </AppShell>
  );
}
