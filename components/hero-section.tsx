import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="@container overflow-x-hidden bg-white dark:bg-zinc-950">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl text-black dark:text-white font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Pass Your Exams with Confidence
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg text-gray-700 dark:text-gray-300">
                  PrepAce is a comprehensive learning and practice platform
                  designed to help you master any subject, track your progress,
                  and walk into your exam fully prepared. Study smarter,
                  practice harder, succeed with ease.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="/prep-ace-app">
                      <span className="text-nowrap">Go to PrepAce App</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#features">
                      <span className="text-nowrap">Explore Features</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-166 @max-lg:-translate-x-20 not-dark:invert mask-radial-from-35% mask-radial-to-70% max-lg:size-120 max-lg:order-first max-lg:mx-auto max-lg:-mb-20 lg:absolute lg:inset-0 lg:-inset-y-56 lg:ml-auto lg:translate-x-28">
                <div className="z-1 absolute inset-0 bg-white/60 dark:bg-zinc-950  opacity-80 mix-blend-overlay" />
                <Image
                  className="size-full object-cover object-right grayscale"
                  src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Student preparing for exams with digital tools"
                  height="2000"
                  width="1500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="dark:border-gray-800 bg-white dark:bg-black border-t pb-16 pt-4 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6">
                <p className="text-end text-sm text-slate-600 dark:text-slate-400">
                  Trusted by top learners
                </p>
              </div>
              <div className="**:fill-foreground relative py-6 md:w-[calc(100%-11rem)]">
                {/* <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <Bolt
                                        height={22}
                                        width={56}
                                    />
                                    <VercelFull
                                        height={22}
                                        width={84}
                                    />
                                    <SupabaseFull className="h-6" />
                                    <Hulu
                                        height={18}
                                        width={56}
                                    />
                                    <Spotify
                                        height={24}
                                        width={80}
                                    />
                                    <FirebaseFull
                                        height={24}
                                        width={80}
                                    />
                                    <Beacon
                                        height={24}
                                        width={80}
                                    />
                                    <Claude
                                        height={26}
                                        width={90}
                                    />
                                    <Figma
                                        height={24}
                                        width={24}
                                    />
                                    <Cisco
                                        height={30}
                                        width={60}
                                    />
                                </InfiniteSlider> */}

                <div
                  aria-hidden
                  className="bg-linear-to-r from-white dark:from-black absolute inset-y-0 left-0 w-20"
                />
                <div
                  aria-hidden
                  className="bg-linear-to-l from-white dark:from-black absolute inset-y-0 right-0 w-20"
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
