import { Zap, BadgeDollarSign, Home, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Slash Your Electricity Bills",
    description:
      "Solar panels can reduce your energy bills by up to 90%. Start saving from the very first month after installation.",
  },
  {
    icon: BadgeDollarSign,
    title: "Unlock Government Subsidies",
    description:
      "Don't miss out on lucrative government grants — we handle all the paperwork so you secure maximum funding.",
  },
  {
    icon: Home,
    title: "Boost Property Value",
    description:
      "Homes with solar installations sell for 4-6% more on average. It's an investment that pays for itself.",
  },
  {
    icon: Leaf,
    title: "Reduce Your Carbon Footprint",
    description:
      "A single residential solar system offsets 3-4 tons of carbon annually — equivalent to planting 100 trees.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Go Solar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From cutting costs to saving the planet — solar energy delivers benefits that keep on giving.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <Card
              key={b.title}
              className="group border-border/50 bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
