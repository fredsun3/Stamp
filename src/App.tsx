import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import DecadeGallery from "@/pages/DecadeGallery";
import StampDetail from "@/pages/StampDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/decade/:id" element={<DecadeGallery />} />
            <Route path="/stamp/:id" element={<StampDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
