import type { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  return (
    <div className="container mx-auto mb-8 px-6">
      <h2 className="mb-8 text-4xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

export default Page;
