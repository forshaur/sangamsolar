import { MessageSquare, FileCheck, Wrench, Power } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "We assess your energy needs, roof suitability, and potential savings at no cost.",
  },
  {
    icon: FileCheck,
    title: "Subsidy Approval",
    description: "Our experts handle all government paperwork to secure the maximum subsidy for you.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Certified technicians install top-tier solar panels with minimal disruption to your routine.",
  },
  {
    icon: Power,
    title: "Switch On & Save",
    description: "Flip the switch and start enjoying dramatically lower electricity bills from day one.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From first call to first savings — our streamlined process makes going solar effortless.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-6">
                {/* Number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  {i + 1}
                </div>

                <div className="pt-1">
                  <div className="mb-1 flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
