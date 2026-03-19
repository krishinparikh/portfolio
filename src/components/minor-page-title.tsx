interface MinorPageTitleProps {
  title: string;
  subtitle?: string;
}

export function MinorPageTitle({ title, subtitle }: MinorPageTitleProps) {
  return (
    <div className="max-w-[720px] mx-auto text-center pt-10 pb-10 px-4">
      <h1 className="!text-[2.75rem] mb-4">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
