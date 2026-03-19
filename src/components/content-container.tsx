export function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[720px] mx-auto [&_a]:text-link [&_a]:no-underline [&_a:hover]:text-link-hover [&_a:hover]:transition-colors [&_a:hover]:duration-200">
      {children}
    </div>
  );
}

export function Subheader({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-8 max-md:text-[1.75rem]">{children}</h2>;
}

export function FullImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`w-full shadow-md mb-4 ${className ?? ""}`} />
  );
}
