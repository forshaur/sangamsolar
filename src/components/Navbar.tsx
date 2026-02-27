import { useState } from "react";
import { Menu, Sun, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Our Process", href: "#process" },
  { label: "Our Work", href: "#gallery" }, // Added link for the new section
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "HI">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "HI" : "EN"));
    // Note: Add your i18n logic or context update here in the future
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Sun className="h-7 w-7 text-accent" />
          Sangam Solar
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 border-l border-border pl-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
              <Globe className="h-4 w-4" />
              {language}
            </Button>
            <Button asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="px-2">
            {language}
          </Button>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-4 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
