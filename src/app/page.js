import Contact from "@/components/Contact";
import Prices from "@/components/Prices";
import Trial from "@/components/Trial";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Prices />
        <Trial />
        <Contact />
      </main>
    </div>
  );
}
