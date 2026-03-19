import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <div>
      <PageTitle
        title="Services"
        subtitle="Click inside to explore the various freelance services I offer. Each engagement will be tailored to your specific needs. Reach out to learn about next steps if you're interested!"
      />
      <div className="grid gap-4 grid-cols-2 max-w-[900px] mx-auto p-4 max-md:grid-cols-1">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 100}>
            <ServiceCard {...service} />
          </FadeIn>
        ))}
      </div>
      <Footer />
    </div>
  );
}
