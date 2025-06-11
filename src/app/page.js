import About from "@/components/About";
import Contact from "@/components/Contact";
import HowItWorks from "@/components/HowItWorks";
import Prices from "@/components/Prices";
import Trial from "@/components/Trial";
import Pros from "@/components/Pros";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Pros />
        <About />
        <HowItWorks />
        <Prices />
        <Trial />
        <Contact />
      </main>
    </div>
  );
}
