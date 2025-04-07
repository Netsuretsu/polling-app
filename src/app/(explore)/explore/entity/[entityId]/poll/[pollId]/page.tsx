"use client";
import {
  SquareChartGantt,
  Clock5,
  CircleDashed,
  ArrowBigLeftDash,
  MousePointerClick,
} from "lucide-react";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export default function PollDetailsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex px-5 lg:px-2 pt-5 w-full lg:w-80 border-r border-[var(--border-color)] h-auto">
        <div className="flex flex-row justify-center space-x-2 h-fit items-center">
          <Image
            width={40}
            height={40}
            src={"/images/epitech-logo-blue.png"}
            alt=""
            className="w-8 h-8 bg-cover"
          />
          <h3 className="font-bold text-lg">BDE EPITECH</h3>
        </div>
      </div>

      <div className="flex flex-col p-5 w-full px-5 space-y-6">
        <div className="flex flex-col space-y-2">
          <ArrowBigLeftDash
            onClick={() => router.back()}
            className="cursor-pointer"
          />
          <span className="flex flex-row space-x-1 px-4 py-2 items-center bg-yellow-200 w-fit rounded-full text-sm font-bold dark:text-gray-900">
            <CircleDashed size={16} />
            <span>En cours</span>
          </span>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold text-xl">Election du nouveau bureau</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            corrupti alias optio culpa suscipit asperiores, corporis consectetur
            accusantium magnam maxime! <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            corrupti alias optio culpa suscipit asperiores, corporis consectetur
            accusantium magnam maxime! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Esse corrupti alias optio culpa suscipit
            asperiores, corporis consectetur accusantium magnam maxime!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            corrupti alias optio culpa suscipit asperiores, corporis consectetur
            accusantium magnam maxime! <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            corrupti alias optio culpa suscipit asperiores, corporis consectetur
            accusantium magnam maxime! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Esse corrupti alias optio culpa suscipit
            asperiores, corporis consectetur accusantium magnam maxime!
          </p>
        </div>
      </div>

      <div className="sticky top-0 right-0 w-96 flex flex-col p-5 border-transparent lg:border-l lg:border-[var(--border-color)]">
        <div className="w-full flex flex-1 flex-col space-y-8 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <span className="flex flex-row items-center h-fit space-x-1 uppercase text-sm font-bold">
              <MousePointerClick size={16} />
              <span>Déposez votre vote</span>
            </span>

            <div className="flex flex-col space-y-3">
              <RadioGroup>
                <div className="flex flex-row items-center space-x-2 rounded-full px-4 py-2 border border-[var(--border-color)] w-full h-12 text-sm font-bold">
                  <RadioGroupItem value="power" id="power" />
                  <Label htmlFor="power">Power</Label>
                </div>
                <div className="flex flex-row items-center space-x-2 rounded-full px-4 py-2 border border-[var(--border-color)] w-full h-12 text-sm font-bold">
                  <RadioGroupItem value="theants" id="theants" />
                  <Label htmlFor="theants">The Ants</Label>
                </div>
              </RadioGroup>

              <Button className="rounded-full h-12">Voter</Button>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="flex flex-row items-center h-fit space-x-1 uppercase text-sm font-bold">
              <SquareChartGantt size={16} />
              <span>Résultats</span>
            </span>

            <div className="flex flex-col w-full space-y-2 dark:text-gray-900">
              <div className="relative h-12 w-full">
                <Progress
                  value={50}
                  className="h-full w-full rounded-lg bg-white [&>div]:bg-gray-200 border"
                />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-sm">
                  {" "}
                  Power · 50%
                </span>
              </div>

              <div className="relative h-12 w-full">
                <Progress
                  value={50}
                  className="h-full w-full rounded-lg bg-white [&>div]:bg-gray-200 border"
                />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-sm">
                  {" "}
                  The ants · 50%
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="flex flex-row items-center h-fit space-x-1 uppercase text-sm font-bold">
              <Clock5 size={16} />
              <span>Timeline</span>
            </span>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Créé
                </h3>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2 Avril 2025, 18h05
                </time>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Début
                </h3>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  3 Avril 2025, 9h00
                </time>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Fin
                </h3>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  8 Avril 2025, 19h42
                </time>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
