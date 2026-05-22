"use client";

import {
  FileText,
  CheckSquare,
  Scale,
  Receipt,
} from "lucide-react";

import FloatingCard from "./FloatingCard";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] overflow-hidden flex items-center justify-center px-6 py-8">

      <section className="max-w-[1280px] w-full grid md:grid-cols-2 gap-6 items-center">

        {/* LEFT SIDE */}
        <div className="z-10">

          <h1 className="text-5xl md:text-[78px] font-light text-[#7376ab] leading-[1.05] tracking-[-2px]">

            A single platform to{" "}

            <span className="font-bold">
              manage
            </span>{" "}

            every part of your{" "}

            <span className="font-bold">
              legal work
            </span>

          </h1>

          <p className="mt-8 text-[#5d63ff] text-xl leading-9 max-w-lg">

            Track matters, coordinate schedules, manage clients,
            centralize documents, and handle communication —
            all in one system.

          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[650px] hidden md:block">

          {/* Background Blobs */}

          <div className="absolute top-10 right-0 w-56 h-20 bg-blue-100 rounded-full opacity-60"></div>

          <div className="absolute top-40 right-6 w-72 h-20 bg-blue-100 rounded-full opacity-60"></div>

          <div className="absolute top-[270px] right-0 w-64 h-20 bg-blue-100 rounded-full opacity-60"></div>

          <div className="absolute bottom-20 left-0 w-80 h-20 bg-blue-100 rounded-full opacity-60"></div>

          {/* Billing */}
          <div className="absolute top-40 right-10">
            <FloatingCard
              label="Billing"
              color="bg-[#2f46ff]"
              textColor="text-white"
              rotate="rotate-[12deg]"
              icon={<Receipt size={30} />}
            />
          </div>

          {/* Matters */}
          <div className="absolute top-[320px] left-0">
            <FloatingCard
              label="Matters"
              color="bg-[#f08424]"
              textColor="text-white"
              rotate="-rotate-[12deg]"
              icon={<Scale size={30} />}
            />
          </div>

          {/* Tasks */}
          <div className="absolute bottom-20 left-28">
            <FloatingCard
              label="Tasks"
              color="bg-[#2f234d]"
              textColor="text-orange-400"
              rotate=""
              icon={<CheckSquare size={30} />}
            />
          </div>

          {/* Documents */}
          <div className="absolute bottom-6 right-0">
            <FloatingCard
              label="Documents"
              color="bg-[#2f234d]"
              textColor="text-orange-400"
              rotate="-rotate-[6deg]"
              icon={<FileText size={30} />}
            />
          </div>

          {/* Profile Card */}
          <div className="absolute top-[340px] right-20 bg-[#a7a5ff] px-6 py-4 rounded-full flex items-center gap-4 shadow-xl hover:scale-105 transition duration-300">

            <div className="w-1 h-12 bg-orange-400 rounded-full"></div>

            <img
              src="https://i.pravatar.cc/60"
              alt="profile"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <p className="text-lg font-semibold text-[#1d1d1d]">
                John Doe - Portal
              </p>

              <p className="text-sm text-gray-700">
                Hey! Could you review a document?
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}