"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import ApexLogo from "@/assets/logo-apex.png";
import PulseLogo from "@/assets/logo-pulse.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex items-center gap-14 flex-none pr-14"
          >
            <Image
              className="logo-ticker-image"
              src={AcmeLogo}
              alt="Acme Logo"
            />
            <Image
              className="logo-ticker-image"
              src={QuantumLogo}
              alt="Quantum Logo"
            />
            <Image
              className="logo-ticker-image"
              src={EchoLogo}
              alt="Echo Logo"
            />
            <Image
              className="logo-ticker-image"
              src={CelestialLogo}
              alt="Celestial Logo"
            />
            <Image
              className="logo-ticker-image"
              src={PulseLogo}
              alt="Pulse Logo"
            />
            <Image
              className="logo-ticker-image"
              src={ApexLogo}
              alt="Apex Logo"
            />

            {/* second set for animation */}
            <Image
              className="logo-ticker-image"
              src={AcmeLogo}
              alt="Acme Logo"
            />
            <Image
              className="logo-ticker-image"
              src={QuantumLogo}
              alt="Quantum Logo"
            />
            <Image
              className="logo-ticker-image"
              src={EchoLogo}
              alt="Echo Logo"
            />
            <Image
              className="logo-ticker-image"
              src={CelestialLogo}
              alt="Celestial Logo"
            />
            <Image
              className="logo-ticker-image"
              src={PulseLogo}
              alt="Pulse Logo"
            />
            <Image
              className="logo-ticker-image"
              src={ApexLogo}
              alt="Apex Logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
