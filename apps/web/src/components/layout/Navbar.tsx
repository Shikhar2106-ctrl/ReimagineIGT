import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SmartNavLink from "@/components/navigation/SmartNavLink";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/common/Logo";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <Container className="relative flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <SmartNavLink
              key={item.label}
              label={item.label}
              href={item.href}
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Book Consultation</Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </Container>
    </header>
  );
}