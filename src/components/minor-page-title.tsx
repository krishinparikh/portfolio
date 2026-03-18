interface MinorPageTitleProps {
  title: string;
  subtitle?: string;
}

export function MinorPageTitle({ title, subtitle }: MinorPageTitleProps) {
  return (
    <div className="max-w-[800px] mx-auto text-center pt-16 pb-8 px-4">
      <h1 className="!text-[3.5rem]">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
