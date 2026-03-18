import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MinorPageLayout } from "@/components/minor-page-layout";
import { ContentContainer } from "@/components/content-container";
import { projects } from "@/data/projects";
import { getContentBySlug } from "@/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug && p.content)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project?.content) notFound();

  const entry = getContentBySlug(slug);
  const Content = project.content;

  return (
    <MinorPageLayout title={project.title} subtitle={project.description}>
      <ContentContainer>
        {entry && (entry.website || entry.github) && (
          <>
            {entry.website && (
              <p>
                <b>Website: </b>
                <a href={entry.website} target="_blank" rel="noopener noreferrer">
                  {entry.website.replace(/^https?:\/\//, "")}
                </a>
              </p>
            )}
            {entry.github && (
              <p>
                <b>GitHub: </b>
                <a href={entry.github} target="_blank" rel="noopener noreferrer">
                  {entry.github.replace(/^https?:\/\//, "")}
                </a>
              </p>
            )}
          </>
        )}
      </ContentContainer>
      <ContentContainer>
        <Content />
      </ContentContainer>
    </MinorPageLayout>
  );
}
