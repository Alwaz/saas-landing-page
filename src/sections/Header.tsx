import ArrowRight from "@/assets/arrow-right.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="sticky z-20 top-0 backdrop-blur-sm">
      {/* banner */}
      <div className=" bg-black text-white gap-3 text-sm flex justify-center items-center py-3">
        <p className=" text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="flex gap-1  items-center">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
};
