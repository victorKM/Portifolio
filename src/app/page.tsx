import Navbar from "@/components/navbar"
import About from "@/components/about"
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full absolute z-[-2]">
        <About />
        <Technologies />
      </div>
    </div>
  );
}
