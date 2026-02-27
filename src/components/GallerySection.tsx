// src/components/GallerySection.tsx
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    image: "/placeholder.svg", // Replace with actual image paths (e.g., /images/project1.jpg)
    title: "Residential Setup in Varanasi",
    description: "A 5kW system helping a family achieve energy independence.",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Commercial Installation",
    description: "Reducing operational costs for local businesses.",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Rural Electrification",
    description: "Bringing consistent power to remote areas.",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Our Work in the Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the places and faces powered by Sangam Solar. We take pride in delivering quality installations across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-border/50 shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
