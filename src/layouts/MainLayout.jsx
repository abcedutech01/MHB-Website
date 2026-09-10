import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;