import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Government subsidies available now
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Solar Power Made{" "}
            <span className="text-primary">Simple</span> &{" "}
            <span className="text-accent">Affordable</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We handle everything — from securing your government subsidies to installing top-tier solar panels. 
            Zero paperwork stress, maximum savings.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="gap-2 text-base shadow-lg shadow-primary/25">
              <a href="#contact">
                Check Your Subsidy Eligibility
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base">
              <a href="#process">See How It Works</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { value: "5,000+", label: "Homes Powered" },
              { value: "₹2Cr+", label: "Subsidies Secured" },
              { value: "98%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
