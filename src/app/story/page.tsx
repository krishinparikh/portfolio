import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import StoryContent from "@/content/story.mdx";
import { AuroraBackground } from "@/components/aurora-background";

export const metadata: Metadata = {
  title: "Story",
};

export default function Story() {
  return (
    <AuroraBackground>
      <PageTitle title="Driven by Curiosity" />
      <FadeIn>
      <div className="max-w-[720px] mx-auto px-4 max-md:px-6 [&_a]:text-link [&_a]:no-underline [&_a:hover]:text-link-hover [&_a:hover]:transition-colors [&_a:hover]:duration-200">
        <StoryContent />
      </div>
      </FadeIn>
      <Footer />
    </AuroraBackground>
  );
}
