import { MinorPageTitle } from "./minor-page-title";
import { Footer } from "./footer";

interface MinorPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function MinorPageLayout({ title, subtitle, children }: MinorPageLayoutProps) {
  return (
    <div>
      <MinorPageTitle title={title} subtitle={subtitle} />
      <main className="px-4">{children}</main>
      <Footer />
    </div>
  );
}
