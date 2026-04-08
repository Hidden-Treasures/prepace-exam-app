import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          More than a question bank – your complete exam preparation system.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              PrepAce goes beyond simple practice tests.{" "}
              <span className="text-accent-foreground font-bold">
                It’s a complete learning ecosystem
              </span>{" "}
              — from realistic exam simulations to smart analytics that pinpoint
              your weak spots.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re revising on your phone, tablet, or computer,
              our platform adapts to your pace. Thousands of syllabus‑aligned
              questions, detailed explanations, and an AI tutor ensure you’re
              never stuck.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Smart drills</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Personalized question sets that focus on your weakest topics –
                  so you improve faster.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Deep analytics</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Track your accuracy, speed, and confidence per subject. Know
                  exactly when you’re exam‑ready.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/exercice-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="PrepAce dashboard showing exam progress and performance analytics"
                width={1206}
                height={612}
              />
              <Image
                src="/exercice.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="PrepAce practice interface with real exam questions"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
