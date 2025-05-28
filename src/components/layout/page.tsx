import type { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  return (
    <div className="container mx-auto mb-8 px-6">
      <h2 className="heading-2">{title}</h2>
      {children}
    </div>
  );
}

export default Page;
