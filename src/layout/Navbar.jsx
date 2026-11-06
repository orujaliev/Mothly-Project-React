import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import { cn } from "../components/cn";

const links = ["Página", "Página", "Página"];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-100 bg-white">
      <Container className="flex h-14 items-center justify-between">
        <Link to="/" className="text-xs font-medium">
          Nombre del sitio
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((label, i) => (
            <NavLink
              key={i}
              to="/"
              className={({ isActive }) =>
                cn("text-xs hover:underline", isActive && "font-medium")
              }
            >
              {label}
            </NavLink>
          ))}
          <Button size="sm">Botón</Button>
        </nav>
      </Container>
    </header>
  );
}