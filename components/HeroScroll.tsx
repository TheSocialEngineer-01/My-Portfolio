"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Hero } from "@/components/ui/tailwind-css-background-snippet";

export const HeroScroll = () => {
  return (
    <Hero className="flex flex-col">
      <div className="relative z-10 flex flex-col overflow-hidden">
        <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center px-4 -mt-8 md:-mt-16 pb-4">
            <div className="pill mb-3 md:mb-4">
              <span className="dot"></span> 2nd year · CSE, GIET University
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center text-[#3D4852] tracking-tight leading-tight">
              Hi, I&apos;m Anubhav Budek.
              <br />
              I build things with{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#38B2AC] bg-clip-text text-transparent">
                code
              </span>
              .
            </h1>
            <p className="max-w-2xl text-center text-[#6B7280] text-sm sm:text-base md:text-lg mt-3 md:mt-4 font-normal leading-relaxed">
              A CSE undergrad at GIET University, Gunupur, learning to build for
              the web with HTML, CSS and JavaScript — and picking up the rest on
              the way. Off-screen, you&apos;ll find me on a football pitch or
              putting a video together.
            </p>
            <div className="relative z-30 mt-5 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <LiquidButton asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="#projects">See my work</a>
              </LiquidButton>
              <LiquidButton asChild variant="default" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Get in touch</a>
              </LiquidButton>
            </div>
          </div>
        }
        >
          <div className="h-full w-full bg-[#E0E5EC] dark:bg-[#1E232A] rounded-xl p-4 md:p-6 flex flex-col justify-between shadow-inner border border-white/40">
          {/* Mockup Window Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#3d4852]/10 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="text-xs font-mono font-medium text-[#6B7280] px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full shadow-sm">
              app.tsx — Anubhav Portfolio
            </div>
            <div className="text-xs text-[#6C63FF] font-semibold">Ready</div>
          </div>

          {/* Mockup Window Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-4">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 shadow-md border border-white/50">
              <div className="text-xs uppercase tracking-wider text-[#6C63FF] font-bold mb-1">
                Featured Build
              </div>
              <h4 className="font-bold text-[#3D4852] dark:text-zinc-100 text-base mb-2">
                Offline Internship Management App
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Munition India Limited project built for real offline
                record-keeping & workflows.
              </p>
              <div className="mt-3 flex gap-1.5 flex-wrap">
                <span className="text-[10px] bg-[#6C63FF]/10 text-[#6C63FF] px-2 py-0.5 rounded font-medium">
                  HTML5
                </span>
                <span className="text-[10px] bg-[#6C63FF]/10 text-[#6C63FF] px-2 py-0.5 rounded font-medium">
                  CSS3
                </span>
                <span className="text-[10px] bg-[#6C63FF]/10 text-[#6C63FF] px-2 py-0.5 rounded font-medium">
                  JS
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 shadow-md border border-white/50 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#38B2AC] font-bold mb-1">
                  Academic Highlights
                </div>
                <h4 className="font-bold text-[#3D4852] dark:text-zinc-100 text-base mb-1">
                  B.Tech CSE @ GIET
                </h4>
                <p className="text-xs text-[#6B7280]">
                  Gunupur · 2nd Year (3rd Semester)
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6B7280]">
                  Current CGPA:
                </span>
                <span className="text-base font-extrabold text-[#38B2AC]">
                  8.0 / 10
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 shadow-md border border-white/50 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#8B84FF] font-bold mb-1">
                  Connect & Collaborate
                </div>
                <h4 className="font-bold text-[#3D4852] dark:text-zinc-100 text-base mb-1">
                  Open for opportunities
                </h4>
                <p className="text-xs text-[#6B7280]">
                  Looking for summer internships & collaborations.
                </p>
              </div>
              <div className="mt-3">
                <a
                  href="#contact"
                  className="inline-block w-full text-center text-xs py-2 px-3 rounded-lg bg-[#6C63FF] text-white font-medium hover:bg-[#8B84FF] transition"
                >
                  Contact Anubhav →
                </a>
              </div>
            </div>
          </div>

          {/* Mockup Status Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-[#3d4852]/10 dark:border-white/10 text-[11px] text-[#6B7280]">
            <span>⚡ Next.js + Tailwind + Framer Motion</span>
            <span>📍 Gunupur, Odisha</span>
          </div>
          </div>
        </ContainerScroll>
      </div>
    </Hero>
  );
};
