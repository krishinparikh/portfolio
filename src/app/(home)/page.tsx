import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { Hero } from "./components/hero";
import { Bio } from "./components/bio";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center w-full px-4 max-md:px-6">
        <FadeIn>
          <Hero />
        </FadeIn>

        <FadeIn delay={200}>
          <Bio />
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
}
