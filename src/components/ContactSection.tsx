import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to start saving? Reach out to us directly to check your subsidy eligibility and schedule a site visit.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-background p-8 shadow-sm border border-border/50 sm:p-12">
          <div className="grid gap-10 sm:grid-cols-3">
            
            {/* Email */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                <a href="mailto:salesangamsolar2.0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  salesangamsolar2.0@gmail.com
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Phone</p>
                <a href="tel:+919415712128" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 94157 12128
                </a>
                 <a href="tel:+918601986415" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 86019 86415
                </a>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Address</p>
                <p className="text-muted-foreground">
                  Opposite Bikaner, Sec A, Shantipuram Phaphamau Prayagraj, Uttar Pradesh <br />India
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
