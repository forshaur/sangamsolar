import { Sun, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Sun className="h-5 w-5 text-accent" />
          Sangam Solar
        </div>

        <div className="flex items-center gap-5">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Social media"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <span>•</span>
          <p>© {new Date().getFullYear()} Sangam Solar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
