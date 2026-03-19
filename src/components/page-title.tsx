interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-center py-10">
      <div className="max-w-[900px] mx-auto px-4">
        <h1 className="mb-4">{title}</h1>
        {subtitle && <p className="!mb-0">{subtitle}</p>}
      </div>
      <div className="pt-4">
        <hr className="m-0 border-none border-t border-border" />
      </div>
    </div>
  );
}
