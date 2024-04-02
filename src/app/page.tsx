import Navbar from "@/components/navbar"
import About from "@/components/about"
import Technologies from "@/components/technologies";
import Proj from "@/components/proj";
import SwipeCarousel from '@/components/global/SwipeCarousel'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full absolute z-[-2]">
        <About />
        <Technologies />
        <Proj />
      </div>
    </div>
  );
}
