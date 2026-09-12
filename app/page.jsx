"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const socialIconClasses =
    "w-9 h-9 border border-cyan-500 rounded-full flex justify-center items-center text-base text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 hover:transition-all duration-500";

  return (
    <section className="h-full px-6 md:px-4 z-0 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-15">

          {/* SUMMARY */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl animate-pulse">
              <span className="text-sm font-mono text-white/60 tracking-wide uppercase mb-2 block">
                Backend Developer · Software Engineer
              </span>
            </span>

            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-cyan-500"> Sadath Khan</span>
            </h1>

            <p className="max-w-[500px] mb-4 text-white/80 font-mono text-sm leading-relaxed">
              I build backend systems, full-stack applications, and AI-powered products. 
              From scalable REST APIs and serverless AWS architectures to intelligent applications powered by LLMs and machine learning, 
              I turn ideas into reliable, real-world software.
            </p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center xl:justify-start">
              {[
                "Python",
                "AWS Lambda",
                "REST APIs",
                "LLM Integration",
                "Django",
                "PostgreSQL",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions + Social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/projects">
                <Button
                  variant="default"
                  size="lg"
                  className="uppercase flex items-center gap-2 bg-cyan-600 text-gray-900 hover:bg-cyan-400 cursor-pointer"
                >
                  View Projects
                </Button>
              </Link>

              <a
                href="/Sadath_khan_Resume.pdf"
                download
                className="cursor-pointer"
                aria-label="Download CV"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 cursor-pointer"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" aria-hidden />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles={socialIconClasses}
                />
              </div>
            </div>
          </div>

          {/* PICTURE */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 relative">
            <Photo />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative">
        <Stats />
      </div>
    </section>
  );
};

export default Home;