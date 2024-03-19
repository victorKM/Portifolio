import Image from "next/image";
import Navbar from "@/components/navbar"
import About from "@/components/about"

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  );
}
