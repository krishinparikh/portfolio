import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({ title, description, image, link, tools }: Project) {
  return (
    <Link href={link} className="no-underline text-inherit block h-[310px]">
      <div className="flex flex-col h-full p-4 border border-border rounded-xl bg-white transition-all duration-200 hover:scale-[1.015] hover:border-gray-400 overflow-hidden">
        <div className="flex items-center justify-center h-[100px] shrink-0 mb-3">
          <Image
            src={image}
            alt={title}
            width={400}
            height={100}
            className="max-w-[90%] max-h-[80px] w-auto h-auto object-contain"
          />
        </div>
        <h3 className="mt-1">{title}</h3>
        <p className="!text-base mt-1 line-clamp-2 flex-1">{description}</p>
        <p className="!text-sm !text-text-muted mt-auto !mb-0">{tools}</p>
      </div>
    </Link>
  );
}
