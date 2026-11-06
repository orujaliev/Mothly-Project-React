import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}