import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="sm:flex sm:flex-col lg:flex lg:flex-row sm:justify-start lg:justify-between gap-x-14 w-full bg-secondary  lg:px-20 py-10">
      <div className="px-6 lg:px-0 lg:w-lg text-primary ">
        <h2>
          Behandling der gør en forskel - både for medarbejderen og virksomheden
        </h2>
        <p>
          Udfyld formularen herunder, hvis du er nysgerrig på, hvordan en
          ordning kunne se ud for dig eller din virksomhed.
        </p>
      </div>
      <div className="w-full lg:w-[50%]">
        <ContactForm />
      </div>
    </section>
  );
}
