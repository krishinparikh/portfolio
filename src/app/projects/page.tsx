import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Projects() {
  return (
    <div>
      <PageTitle
        title="Portfolio"
        subtitle="A collection of my internship work, startup ideas, and side projects. Click inside for a detailed case study of each project, from ideation to launch."
      />
      <div className="grid gap-6 grid-cols-2 max-w-[1000px] mx-auto p-4 max-md:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
