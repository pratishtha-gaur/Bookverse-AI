import Image from "next/image";
import { Plus } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Upload PDF",
    description: "Add your book file",
  },
  {
    number: "2",
    title: "AI Processing",
    description: "We analyze the content",
  },
  {
    number: "3",
    title: "Voice Chat",
    description: "Discuss with AI",
  },
];

export default function HeroSection() {
  return (
    <main className="container wrapper flex items-start">
      <section className="w-full rounded-[28px] bg-[#efe2c2] px-5 py-6 shadow-[0_10px_30px_rgba(123,97,57,0.10)] sm:px-7 sm:py-7 lg:px-10 lg:py-8">
        <div className="grid items-center gap-7 lg:grid-cols-[0.96fr_0.92fr_0.68fr] lg:gap-5 xl:gap-7">
          <div className="max-w-[360px] space-y-5 self-start pt-1 lg:space-y-6 lg:pt-4">
            <div className="space-y-3">
              <h1 className="font-serif text-[2.25rem] leading-none font-semibold tracking-[-0.03em] text-[#18130f] sm:text-[2.7rem] lg:text-[3.15rem]">
                Your Library
              </h1>
              <p className="max-w-[340px] text-base leading-[1.5] font-medium text-[#6d685f] sm:text-[1.18rem] lg:text-[1.3rem]">
                Convert your books into interactive AI conversations.
                Listen, learn, and discuss your favorite reads.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex h-17 items-center gap-3.5 rounded-[18px] bg-white px-6 font-serif text-[1.35rem] font-semibold text-[#26211a] shadow-[0_10px_25px_rgba(103,89,66,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="flex size-9 items-center justify-center rounded-full text-[#26211a]">
                <Plus className="size-6 stroke-[1.8]" />
              </span>
              <span>Add new book</span>
            </button>
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center lg:min-h-[310px]">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books, globe, and lamp illustration"
              width={499}
              height={336}
              priority
              className="h-auto w-full max-w-[450px] object-contain"
            />
          </div>

          <aside className="justify-self-center rounded-[20px] bg-white px-4 py-4 shadow-[0_14px_32px_rgba(126,112,86,0.14)] sm:w-[320px] sm:px-5 sm:py-5 lg:w-full lg:max-w-[300px]">
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-3.5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#e8e3d9] text-[1.35rem] font-medium text-[#36322d]">
                    {step.number}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h2 className="text-[1.35rem] leading-none font-semibold tracking-[-0.02em] text-[#2c2924]">
                      {step.title}
                    </h2>
                    <p className="text-[0.95rem] leading-snug text-[#6d685f]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
