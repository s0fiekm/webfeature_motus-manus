import React from "react";
import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorks() {
  return (
    <section className="bg-primary w-full flex flex-col items-center gap-20 text-secondary py-20">
      <h1>Hvordan fungerer det?</h1>
      <div className="flex flex-row justify-center ">
        <div className="-ml-10">
          <HowItWorksCard
            number="01"
            title="Jeres eksklusive sammenfoldelige briks"
            text=" vil blive deponeret på jeres lokation"
          />
        </div>
        <div className="-ml-10">
          <HowItWorksCard
            number="02"
            title="Behandling foregår i et lokale på mindst 10 m²"
            text="(fx et mødelokale eller frit rum)"
          />
        </div>
        <div className="-ml-10">
          <HowItWorksCard
            number="03"
            title="Varighed:"
            text="30, 45 eller 60 minutter pr. session"
          />
        </div>
        <div className="-ml-10">
          <HowItWorksCard
            number="04"
            title="Anbefalet forløbsmodel: "
            text="2-3 måneders forløb med 2-4 behandlinger pr. måned value"
          />
        </div>
      </div>
    </section>
  );
}
