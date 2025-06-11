import React from "react";

export default function HowItWorksCard({number, title, text}) {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[360px] h-[360px] border border-secondary rounded-full flex flex-col justify-start text-secondary pt-22">
        <div className="w-[200px] mx-auto">
          <h3 className="font-bold ">{number}</h3>
          <p className="font-bold">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
