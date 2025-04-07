import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Layers,
  MessagesSquare,
  CircleDashed,
  ClockArrowUp,
  CalendarArrowUp,
  Dices,
} from "lucide-react";
import Image from "next/image";
import ProposalCard from "@/components/proposal-card";
import Link from "next/link";

export default function EntityDetailsPage({
  params,
}: {
  params: { entityId: string };
}) {
  const { entityId } = params;
  return (
    <div className="flex flex-row w-full">
      <Tabs
        defaultValue="overview"
        className="w-full flex flex-col lg:flex-row"
      >
        <div className="lg:fixed lg:w-52 border-r border-[var(--border-color)] lg:h-screen py-5">
          <TabsList className="flex flex-row gap-2 border-b border-[var(--border-color)] items-center bg-red-200 lg:border-none w-full justify-center lg:flex-col bg-transparent lg:justify-start">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:border-transparent data-[state=active]:shadow-none text-md font-medium data-[state=active]:font-extrabold w-full justify-start bg-transparent px-0 dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent cursor-pointer"
            >
              <span className="flex flex-row items-center space-x-1">
                <LayoutDashboard />
                <span>Vue d&apos;ensemble</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="proposals"
              className="data-[state=active]:border-transparent data-[state=active]:shadow-none text-md font-medium data-[state=active]:font-extrabold w-full justify-start bg-transparent px-0 dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent cursor-pointer"
            >
              <span className="flex flex-row items-center space-x-1">
                <Layers />
                <span>Propositions</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="data-[state=active]:border-transparent data-[state=active]:shadow-none text-md font-medium data-[state=active]:font-extrabold w-full justify-start bg-transparent px-0 dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent cursor-pointer"
            >
              <span className="flex flex-row items-center space-x-1">
                <Dices />
                <span>Leaderboard</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="discussions"
              className="data-[state=active]:border-transparent data-[state=active]:shadow-none text-md font-medium data-[state=active]:font-extrabold w-full justify-start bg-transparent px-0 dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent cursor-pointer"
            >
              <span className="flex flex-row items-center space-x-1">
                <MessagesSquare />
                <span>Discussions</span>
              </span>
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex flex-1 ml-52">
          <div className="w-full lg:w-9/12 min-h-screen border-r border-[var(--border-color)] ">
            <TabsContent value="overview">
              <div className="w-full h-[20vh] bg-blue-200"></div>
              <div className="px-5 pb-2 -mt-6">
                <div className="p-2 bg-white w-fit h-fit rounded-xl">
                  <Image
                    width={40}
                    height={40}
                    src={"/images/epitech-logo-blue.png"}
                    alt=""
                    className="w-12 h-12 bg-cover"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <h3 className="font-bold">BDE EPITECH</h3>
                  <p className="text-sm font-medium">
                    Le compte officiel du BDE d&apos;EPITECH BENIN
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm">
                  <span className="font-bold">10 propositions</span>
                  <span className="font-bold">·</span>
                  <span className="font-bold">100 votes</span>
                </div>
                <div className="mt-5">
                  <h3 className="uppercase font-bold">Propositions</h3>
                </div>
              </div>
              <hr />
              <div className="px-8 py-2">
                {Array.from({ length: 9 }).map((item, index) => (
                  <Link
                    key={index}
                    href={`/explore/entity/${entityId}/poll/${index}`}
                  >
                    <ProposalCard />
                  </Link>
                ))}
              </div>

              <span className="font-bold pl-5">Voir plus</span>
            </TabsContent>
            <TabsContent value="proposals">
              <div className="flex flex-row p-5 gap-4">
                <span className="flex flex-row space-x-1 px-4 py-2 items-center bg-[#f7f7f7] w-fit rounded-full text-sm font-bold">
                  Tous
                </span>

                <span className="flex flex-row space-x-1 px-4 py-2 items-center bg-green-200 w-fit rounded-full text-sm font-bold">
                  <ClockArrowUp size={16} />
                  <span>A venir</span>
                </span>

                <span className="flex flex-row space-x-1 px-4 py-2 items-center bg-yellow-200 w-fit rounded-full text-sm font-bold">
                  <CircleDashed size={16} />
                  <span>En cours</span>
                </span>

                <span className="flex flex-row space-x-1 px-4 py-2 items-center bg-red-400 w-fit rounded-full text-sm font-bold">
                  <CalendarArrowUp size={16} />
                  <span>Terminé</span>
                </span>
              </div>
              <hr />

              <div className="px-8 py-2">
                {Array.from({ length: 9 }).map((item, index) => (
                  <Link
                    key={index}
                    href={`/explore/entity/${entityId}/poll/${index}`}
                  >
                    <ProposalCard />
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="leaderboard">Leaderboard</TabsContent>
            <TabsContent value="discussions">Discussions</TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
