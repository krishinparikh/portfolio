import Link from "next/link";
import { SOCIAL_LINKS, CONTACT } from "@/data/constants";

export function Bio() {
  return (
    <div className="max-w-[720px] w-full text-left mt-8 leading-relaxed [&_a]:text-link [&_a]:no-underline [&_a:hover]:text-link-hover [&_a:hover]:transition-colors [&_a:hover]:duration-200">
      <p>
        I&apos;m an entrepreneurial technology leader obsessed with building great products and teams.
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
        I'm currently building <Link href="/projects/lineage">Lineage</Link>, a platform that helps older adults create a movie of their life story — inspired by my own desire to connect with my family history. Since starting in January 2026, my co-founder and I have raised $6,450 and are actively beta testing.
      </p>
      <p>
        I&apos;m the President of Case Western&apos;s{" "}
        <a
          href="https://case.edu/entrepreneurship/funding/cwru-alumni-venture-fund"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alumni Venture Fund
        </a>{" "}
        &mdash; a venture fund investing in Case alumni/faculty (~$500k invested across 17
        companies) &mdash; where I've gotten a bird's-eye view on many industries and the opportunity to meet incredible founders.
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
  );
}
