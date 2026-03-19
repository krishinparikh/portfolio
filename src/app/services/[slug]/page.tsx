import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MinorPageLayout } from "@/components/minor-page-layout";
import { ContentContainer } from "@/components/content-container";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services
    .filter((s) => s.slug && s.content)
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service?.content) notFound();

  const Content = service.content;

  return (
    <MinorPageLayout title={service.title} subtitle={service.description}>
      <ContentContainer>
        <Content />
      </ContentContainer>
    </MinorPageLayout>
  );
}
