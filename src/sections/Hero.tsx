import Image from "next/image";
import CogImage from "@/assets/cog.png";
import NoodleImage from "@/assets/noodle.png";
import ArrowRight from "@/assets/arrow-right.svg";
import CylinderImage from "@/assets/cylinder.png";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          {/* left */}
          <div className="md:w-[478px]">
            <div className=" text-sm inline-flex rounded-lg border border-[#222]/10 py-1 px-3 tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6 bg-gradient-to-b  from-black to-[#001E80] text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            <p className="text-xl mt-6 text-[#010D3E] tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            {/* CTA buttons */}
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-ghost gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* right */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={CylinderImage}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={NoodleImage}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block top-[542px] left-[448px] absolute rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
