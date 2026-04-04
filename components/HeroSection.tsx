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
    <main className="wrapper flex items-start pt-[94px] pb-8 md:pb-10">
      <section className="library-hero-card w-full">
        <div className="library-hero-content lg:grid lg:grid-cols-[0.96fr_0.92fr_0.68fr]">
          <div className="library-hero-text self-start pt-1 lg:pt-4">
            <div className="space-y-3">
              <h1 className="library-hero-title">
                Your Library
              </h1>
              <p className="library-hero-description max-w-[340px]">
                Convert your books into interactive AI conversations.
                Listen, learn, and discuss your favorite reads.
              </p>
            </div>

            <button type="button" className="library-cta-primary">
              <span className="flex size-9 items-center justify-center rounded-full">
                <Plus className="size-6 stroke-[1.8]" />
              </span>
              <span>Add new book</span>
            </button>
          </div>

          <div className="library-hero-illustration lg:hidden">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books, globe, and lamp illustration"
              width={499}
              height={336}
              priority
              className="h-auto w-full max-w-[320px] object-contain md:max-w-[380px]"
            />
          </div>

          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books, globe, and lamp illustration"
              width={499}
              height={336}
              priority
              className="h-auto w-full max-w-[450px] object-contain"
            />
          </div>

          <aside className="library-steps-card justify-self-center sm:w-[320px] lg:w-full lg:max-w-[300px]">
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="library-step-item">
                  <div className="library-step-number">
                    {step.number}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h2 className="library-step-title">
                      {step.title}
                    </h2>
                    <p className="library-step-description">
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
