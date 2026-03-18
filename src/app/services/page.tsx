import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";

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
      <div className="grid gap-6 grid-cols-2 max-w-[1000px] mx-auto p-4 max-md:grid-cols-1">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
