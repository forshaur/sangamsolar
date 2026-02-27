import { Sun, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/share/1AheXPMJgK/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/sangamsolar2030/",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Sun className="h-5 w-5 text-accent" />
          Sangam Solar
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
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
