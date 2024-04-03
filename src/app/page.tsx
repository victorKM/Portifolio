import Navbar from "@/components/navbar"
import About from "@/components/about"
import Technologies from "@/components/technologies";
import Proj from "@/components/proj";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-gray bg-opacity-100">
      <Navbar />
      <div className="bg-gray bg-opacity-100 w-full absolute z-[-2]">
        <About />
        <Technologies />
        <Proj />
        <Contact />
      </div>
    </div>
  );
}
