import HeaderLanding from "@/components/layout/header-landing";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <HeaderLanding />
      {children}
    </div>
  );
}
