/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { LayoutShell } from "./components/LayoutShell";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <LayoutShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:slug" element={<ProjectDetail />} />
      </Routes>
    </LayoutShell>
  );
}
