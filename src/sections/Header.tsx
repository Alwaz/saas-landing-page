import ArrowRight from "@/assets/arrow-right.svg";

export const Header = () => {
  return (
    <header>
      {/* banner */}
      <div className=" bg-black text-white text-sm flex justify-center items-center py-3">
        <div className="flex gap-1  items-center">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Navbar */}
      <div>navbar</div>
    </header>
  );
};
