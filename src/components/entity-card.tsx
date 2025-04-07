import Image from "next/image";

export default function EntityCard() {
  return (
    <div className="flex flex-col border border-[var(--border-color)] w-full rounded-xl overflow-hidden">
      <div className="w-full h-20 bg-blue-200"></div>
      <div className="px-5 pb-5 -mt-6">
        <div className="p-2 bg-white w-fit h-fit rounded-xl">
          <Image
            width={40}
            height={40}
            src={"/images/epitech-logo-blue.png"}
            alt=""
            className="w-8 h-8 bg-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">BDE EPITECH</h3>
          <p className="text-sm font-medium">Le BDE d&apos;EPITECH BENIN</p>
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm">
          <span className="font-bold">10 propositions</span>
          <span className="font-bold">·</span>
          <span className="font-bold">100 votes</span>
        </div>
      </div>
    </div>
  );
}
