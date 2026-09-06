"use client";

import { ExternalLink, ClipboardCheck, BookOpenCheck, GitBranch, Ruler, SearchCheck, Layers3 } from "lucide-react";

const trainingResults = [
  {
    category: "5S & 3T",
    title: "Pre Test",
    description: "Hasil penilaian sebelum mengikuti Training 5S & 3T.",
    icon: ClipboardCheck,
    type: "PRE TEST",
    url: "https://docs.google.com/spreadsheets/d/1eC-fvZpcopOGSnwLZ2rFOxN1_G6HjaPfkcCxpRCjBCQ/edit?usp=sharing",
  },
  {
    category: "5S & 3T",
    title: "Post Test",
    description: "Hasil penilaian setelah mengikuti Training 5S & 3T.",
    icon: BookOpenCheck,
    type: "POST TEST",
    url: "https://docs.google.com/spreadsheets/d/1tG9zOlZcVqxumxwV2s1zd9r3LmqgUxnCNTzLQ_on7Kc/edit?usp=sharing",
  },
  {
    category: "Fishbone Diagram",
    title: "Pre Test",
    description: "Hasil penilaian sebelum mengikuti Training Fishbone Diagram.",
    icon: GitBranch,
    type: "PRE TEST",
    url: "https://docs.google.com/spreadsheets/d/1IxLbDFfWH446zA3YhPbJm5N4ONW1jjAZcdvq6X7GC2s/edit?usp=sharing",
  },
  {
    category: "Fishbone Diagram",
    title: "Post Test",
    description: "Hasil penilaian setelah mengikuti Training Fishbone Diagram.",
    icon: GitBranch,
    type: "POST TEST",
    url: "https://docs.google.com/spreadsheets/d/1hBnHMuC2yLUb8iAfvRh1uHyPgGU8QyaHAO30EmT8YCE/edit?usp=sharing",
  },
  {
    category: "Basic Name Defect",
    title: "Pre & Post Test",
    description: "Hasil penilaian Pre Test dan Post Test Basic Name Defect.",
    icon: SearchCheck,
    type: "PRE & POST TEST",
    url: "https://docs.google.com/spreadsheets/d/1G--vDaR5nI9PmYopeSNEdhRn60yBw-nwt9ADvKbXW3Q/edit?usp=sharing",
  },
  {
    category: "Standar Tolerance",
    title: "Pre & Post Test",
    description: "Hasil penilaian Pre Test dan Post Test Standar Tolerance.",
    icon: Ruler,
    type: "PRE & POST TEST",
    url: "https://docs.google.com/spreadsheets/d/1bgRfN3U-iwTTV-s_AtQqfig7S44_etnqh2zYLhr5P4Y/edit?usp=sharing",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Layers3 size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                BEI Quality Training
              </h1>
              <p className="text-xs text-slate-500">
                Training Result Management
              </p>
            </div>
          </div>

          <div className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600 sm:block">
            INTERNAL USE
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Training Result
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Cek Hasil Training
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Akses hasil Pre Test dan Post Test untuk setiap program training
            melalui Google Sheets yang telah disediakan.
          </p>
        </div>
      </section>

      {/* Training Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trainingResults.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={`${item.category}-${item.title}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                {/* Decorative background */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-all duration-300 group-hover:scale-105">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Type */}
                  <div className="mt-6">
                    <span className="text-[11px] font-bold tracking-[0.18em] text-slate-400">
                      {item.type}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                      {item.category}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="relative mt-auto flex items-center justify-between pt-7">
                  <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900">
                    View Result
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p>© 2026 BEI Quality Training</p>
          <p>Internal Training Result Management</p>
        </div>
      </footer>
    </main>
  );
}

