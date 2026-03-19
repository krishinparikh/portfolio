interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-center pt-10">
      <div className="max-w-[900px] mx-auto px-4 max-md:px-6">
        <h1 className="mb-4">{title}</h1>
        {subtitle && <p className="!mb-0">{subtitle}</p>}
      </div>
      <hr className="mt-10 mb-10 border-0 border-t border-border" />
    </div>
  );
}
