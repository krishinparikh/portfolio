import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS, CONTACT } from "@/data/constants";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border mt-12 py-8 px-4 max-md:px-6">
      <div className="flex items-center justify-between gap-4 max-w-[900px] mx-auto w-full max-md:flex-col max-md:items-start max-md:gap-6">
        <h1 className="!text-left !text-[1.75rem] m-0">
          <Link href="/" className="text-black no-underline opacity-20 hover:opacity-50 transition-opacity duration-200">
            Krishin Parikh
          </Link>
        </h1>
        <div className="flex items-center gap-5 max-md:gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-black no-underline opacity-20 hover:opacity-50 transition-opacity duration-200"
          >
            {CONTACT.email}
          </a>
          {[
            { href: SOCIAL_LINKS.linkedin, icon: "/images/icons/linkedin.png", alt: "LinkedIn" },
            { href: SOCIAL_LINKS.github, icon: "/images/icons/github.png", alt: "GitHub" },
            { href: SOCIAL_LINKS.youtube, icon: "/images/icons/youtube.png", alt: "YouTube" },
          ].map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-20 hover:opacity-50 transition-all duration-200"
            >
              <Image
                src={icon}
                alt={`${alt} Icon`}
                width={30}
                height={30}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
