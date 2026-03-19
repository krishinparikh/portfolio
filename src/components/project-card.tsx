import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({ title, description, image, link, tools }: Project) {
  return (
    <Link href={link} className="no-underline text-inherit inline-block">
      <div className="p-3 border border-border rounded-lg bg-white transition-transform duration-200 hover:scale-[1.015] min-h-[310px]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={100}
          className="max-w-[400px] max-h-[100px] w-auto h-auto rounded object-contain block mx-auto py-4"
        />
        <h3 className="mt-2">{title}</h3>
        <p className="!text-base mt-1">{description}</p>
        <p className="!text-sm !text-text-muted mt-2">{tools}</p>
      </div>
    </Link>
  );
}
