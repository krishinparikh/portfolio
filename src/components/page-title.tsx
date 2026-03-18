interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-center py-16">
      <div className="max-w-[1000px] mx-auto px-4">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="pt-16">
        <hr className="m-0 border-none border-t border-border" />
      </div>
    </div>
  );
}
