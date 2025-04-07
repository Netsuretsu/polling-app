import EntityCard from "@/components/entity-card";
import Link from "next/link";

export default function Explore() {
  return (
    <div className="w-full p-5">
      <div className="w-full flex flex-col justify-center items-center space-y-10">
        <h2 className="font-bold text-3xl">Entités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-8/12">
          {Array.from({ length: 9 }).map((item, index) => (
            <Link key={index} href={`/explore/entity/${index}`}>
              <EntityCard />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
