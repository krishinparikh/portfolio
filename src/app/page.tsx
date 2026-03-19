import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { PhraseCarousel } from "@/components/phrase-carousel";
import { SOCIAL_LINKS, CONTACT } from "@/data/constants";
import { FadeIn } from "@/components/fade-in";

const socialIcons = [
  { href: SOCIAL_LINKS.linkedin, icon: "/images/LinkedinIcon.png", alt: "LinkedIn" },
  { href: SOCIAL_LINKS.github, icon: "/images/GithubIcon.png", alt: "GitHub" },
  { href: SOCIAL_LINKS.youtube, icon: "/images/YoutubeIcon.png", alt: "YouTube" },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center w-full px-4 max-md:px-6">
        <FadeIn>
          <div className="flex items-center gap-8 max-w-[900px] mt-4 max-md:flex-col max-md:gap-6">
            <div className="text-right flex flex-col items-end max-w-[500px] max-md:items-center max-md:text-center max-md:max-w-full">
              <h1 className="!text-right max-md:!text-center max-md:!text-[3rem]">Krishin Parikh</h1>
              <PhraseCarousel />
              <div className="flex gap-4 justify-end">
                {socialIcons.map(({ href, icon, alt }) => (
                  <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={icon}
                      alt={`${alt} Icon`}
                      width={30}
                      height={30}
                      className="opacity-20 hover:opacity-50 hover:scale-110 transition-all duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
            <Image
              src="/images/Headshot.jpg"
              alt="Krishin Parikh"
              width={250}
              height={250}
              className="w-[250px] h-auto rounded-[4%]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={200}>
        <div className="max-w-[720px] w-full text-left mt-8 leading-relaxed [&_a]:text-link [&_a]:no-underline [&_a:hover]:text-link-hover [&_a:hover]:transition-colors [&_a:hover]:duration-200">
          <p>
            I&apos;m an entrepreneurial technology leader obsessed with building impactful software experiences.
          </p>
          <p>
            I study Computer Science, Finance, and Economics at{" "}
            <a href="http://case.edu" target="_blank" rel="noopener noreferrer">
              Case Western Reserve University
            </a>{" "}
            (Class of 2026).
          </p>
          <p>
            I have a track record of delivering substantial value through various internships across finance, VR/AR, and healthcare:
          </p>
          <ul>
            <li>
              Product Engineering at{" "}
              <a href="http://theohiofund.com" target="_blank" rel="noopener noreferrer">
                The O.H.I.O. Fund
              </a>{" "}
              (Summer 2025)
            </li>
            <li>
              Software Engineering at{" "}
              <a href="http://afference.io" target="_blank" rel="noopener noreferrer">
                Afference
              </a>{" "}
              (Summer/Fall 2024)
            </li>
            <li>
              Business Development at{" "}
              <a href="http://immersivetouch.com" target="_blank" rel="noopener noreferrer">
                ImmersiveTouch
              </a>{" "}
              (Summer 2023)
            </li>
          </ul>
          <p>
            I&apos;m the President of Case Western&apos;s{" "}
            <a
              href="https://case.edu/entrepreneurship/funding/cwru-alumni-venture-fund"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alumni Venture Fund
            </a>{" "}
            &mdash; a venture fund investing in Case alumni/faculty ($450k invested across 16
            companies) &mdash; exposing me to countless startups and teaching me important
            entrepreneurial lessons.
          </p>
          <p>
            I like <Link href="/projects">building stuff</Link>,{" "}
            <a href="https://substack.com/@krishinparikh" target="_blank" rel="noopener noreferrer">
              writing my thoughts
            </a>
            ,{" "}
            <a href="https://krishin.notion.site/library" target="_blank" rel="noopener noreferrer">
              consuming knowledge
            </a>
            , and{" "}
            <a href="http://krishin.notion.site/tools" target="_blank" rel="noopener noreferrer">
              exploring high-leverage tools
            </a>
            .
          </p>
          <p>
            I love meeting people &mdash; reach me at{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            !
          </p>
          <p>
            Read my <Link href="/story">full story</Link> to learn my &ldquo;why&rdquo; behind the &ldquo;what&rdquo;.
          </p>
        </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
}
