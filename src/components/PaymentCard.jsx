import React from "react";

export default function PaymentCard({text, title, number}) {
  return (
    <div className="bg-tertiary p-8 rounded-2xl flex flex-col">
      <div className=" text-cta mb-2 rounded-full py-3 bg-secondary w-8 h-8 flex items-center justify-center">
        <h3>{number}</h3>
      </div>
      <h3 className="text-primary">{title}</h3>
      <p className="text-primary">{text}</p>
    </div>
  );
}
