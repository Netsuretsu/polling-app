import HeaderExplore from "@/components/layout/header-explore";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-full overflow-hidden">
      <div className="fixed left-0 z-20 bg-white flex h-screen w-16 border-r border-[var(--border-color)] justify-center py-4 dark:bg-[#000]  ">
        <Link href={"/"}>
          <span className="font-bold text-5xl">E</span>
        </Link>
      </div>
      <div className="w-full">
        <HeaderExplore />
        <div className="mt-16 pl-20">{children}</div>
      </div>
    </div>
  );
}
