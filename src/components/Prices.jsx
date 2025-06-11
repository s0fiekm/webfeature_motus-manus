import React from "react";
import PaymentCard from "./PaymentCard";

export default function Prices() {
  return (
    <section className="flex flex-col gap-10 lg:gap-0  lg:flex lg:flex-row w-full justify-between px-5 lg:px-20 bg-secondary py-30">
      <div className="lg:w-lg text-primary flex flex-col px-5 lg:px-0">
        <h2>Pris & Betalingsløsninger</h2>
        <p>
          Få en fleksibel ordning, der kan tilpasses dine behov og dit budget –
          uanset om du er selvstændig eller enkeltperson i en virksomhed. Du
          vælger selv, hvordan betalingen skal struktureres.
        </p>
        <div
          className="bg-primary w-full h-[0.5px] relative my-4
"
        ></div>
        <ul>
          <li>550 kr. pr. time (momsfritaget)</li>
          <li>Betaling via faktura efter hver behandlingsdag</li>
          <li>Bruttolønsordning (skattefri sundhedsfremme)</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 px-5 lg:px-0">
        <PaymentCard
          title="Virksomhedsfinaniseret"
          number="1"
          text="En forkælelsesfordel til medarbejderne, hvor I som arbejdsgiver dækker omkostningerne fuldt ud."
        />
        <PaymentCard
          title="Fordelt finansiering "
          number="2"
          text=" Medarbejder og arbejdsgiver aftaler, hvordan udgiften fordeles, f.eks. 50/50."
        />
        <PaymentCard
          title="Medarbejderfinansieret"
          number="3"
          text="Medarbejderne dækker omkostninger selv via deres lønseddel."
        />
      </div>
    </section>
  );
}
