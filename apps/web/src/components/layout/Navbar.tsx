import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

import SmartNavLink from "@/components/navigation/SmartNavLink";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/common/Logo";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        transparent
          ? "border-transparent bg-transparent"
          : "border-b border-border/80 bg-surface/90 shadow-md backdrop-blur-xl"
      )}
    >
      <Container className="relative flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-surface/65 p-1.5 shadow-lg shadow-black/10 backdrop-blur-2xl lg:flex">
          {navigation.map((item) => (
            <SmartNavLink
              key={item.label}
              label={item.label}
              href={item.href}
              external={item.external}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:bg-white/10 hover:text-text-primary"
              )}
            />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            className={cn(
              "h-10 rounded-full border border-accent/25 bg-accent/10 px-5 text-sm text-accent backdrop-blur-sm hover:bg-accent hover:text-surface"
            )}
          >
            Book Consultation
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "rounded-full border border-white/10 bg-surface/60 p-2 transition-colors hover:bg-surface-card/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden",
            transparent ? "text-text-primary" : "text-text-primary"
          )}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </Container>
    </header>
  );
}
