import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary py-8 flex flex-col justify-center items-center gap-4 w-full">
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <Image src="/assets/logo.svg" width={150} height={150} alt="Logo" />
        <span className="logoFont text-secondary ">Motus og Manus</span>
      </div>
      <nav className="flex flex-row gap-6 text-secondary">
        <a href="">Om mig</a>

        <a href="">Hvordan fungerer det?</a>

        <a href="">Pris og betalingsmuligheder</a>

        <a href="">Kontakt</a>

        <a href="">FAQ</a>
      </nav>
    </header>
  );
}
