import Image from "next/image";
import { PhraseCarousel } from "@/components/phrase-carousel";
import { SOCIAL_LINKS } from "@/data/constants";

const socialIcons = [
  { href: SOCIAL_LINKS.linkedin, icon: "/images/icons/linkedin.png", alt: "LinkedIn" },
  { href: SOCIAL_LINKS.github, icon: "/images/icons/github.png", alt: "GitHub" },
  { href: SOCIAL_LINKS.youtube, icon: "/images/icons/youtube.png", alt: "YouTube" },
];

export function Hero() {
  return (
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
        src="/images/profile/headshot.jpg"
        alt="Krishin Parikh"
        width={250}
        height={250}
        className="w-[250px] h-auto rounded-[4%]"
      />
    </div>
  );
}
