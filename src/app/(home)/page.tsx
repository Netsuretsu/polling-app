"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);

  return (
    <div
      className="relative flex w-full items-center justify-center bg-white dark:bg-black"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {step === 0 && (
        <div className="flex flex-col gap-5 items-center justify-center z-20">
          <h2 className="font-extrabold text-2xl md:text-3xl lg:text-6xl text-center">
            L&apos;outil de vote ultime
          </h2>
          <Button
            onClick={() => setStep(1)}
            className="w-fit h-12 cursor-pointer"
          >
            Commencer
          </Button>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-col gap-5 items-center justify-center z-20">
          <h2 className="font-extrabold text-3xl text-center">
            Renseignez votre mail EPITECH
          </h2>

          <Input
            className="h-12 bg-white w-70"
            type="email"
            placeholder="Email"
          />

          <Button
            onClick={() => setStep(2)}
            className="w-fit h-12 cursor-pointer"
          >
            Continuer
          </Button>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-5 items-center justify-center z-20">
          <h2 className="font-extrabold text-3xl text-center">
            Entrez le code reçu par email
          </h2>

          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot className="bg-white" index={0} />
              <InputOTPSlot className="bg-white" index={1} />
              <InputOTPSlot className="bg-white" index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot className="bg-white" index={3} />
              <InputOTPSlot className="bg-white" index={4} />
              <InputOTPSlot className="bg-white" index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button
            onClick={() => setStep(3)}
            className="w-fit h-12 cursor-pointer"
          >
            Continuer
          </Button>
        </div>
      )}
      {step === 3 && (
        <div className="flex flex-col gap-5 items-center justify-center z-20 space-y-4">
          <h2 className="font-extrabold text-xl text-center">
            Sauvegardez jalousement vos 12 mots ! ils vous serviront à récupérer
            votre portefeuille en cas de perte
          </h2>

          <div className="flex flex-row flex-wrap w-full lg:w-8/12 gap-4 justify-center">
            {Array.from({ length: 12 }).map((item, index) => (
              <Button key={index} className="bg-[#f7f7f7] text-gray-900 h-10 px-4 hover:bg-[#f7f7f7] ">
                Paddle
              </Button>
            ))}
          </div>

          <Button
            onClick={() => router.push("/explore")}
            className="w-fit h-12 cursor-pointer"
          >
            Continuer
          </Button>
        </div>
      )}
    </div>
  );
}
