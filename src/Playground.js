import React, { useState } from "react";
import { IntroTextSection } from "./sections/IntroText";
import { PortfolioSection } from "./sections/Portfolio";
import { ExtrasSection } from "./sections/Extras";
import { ContactSection } from "./sections/Contact";

export function Playground(props) {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactEverHovered, setContactEverHovered] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [extrasOpen, setExtrasOpen] = useState(false);

  const handleContactHover = () => {
    if (!contactEverHovered) {
      setContactEverHovered(true);
      setContactOpen(true);
    }
  };

  const handleContactClick = () => {
    setContactOpen((open) => !open);
  };

  return (
    <main className="flex flex-col min-h-screen m-8 p-8  selection:bg-blue-700 selection:text-teal-100">
      <header>
        <h1 className=" w-full selection:bg-red-700 selection:text-blue-700 tracking-widest text-8xl font-bold leading-tight pb-8 p-2 hover:blur-sm transition duration-1000">
          Irene Hu
          <span className="font-normal"> (b. 2002)</span>{" "}
          <span className="font-normal text-white"> ★ ★ ★ ★ ★</span>
        </h1>
      </header>
      <IntroTextSection />
      <PortfolioSection
        portfolioOpen={portfolioOpen}
        handlePortfolioClick={() => setPortfolioOpen((open) => !open)}
      />
      <ExtrasSection
        extrasOpen={extrasOpen}
        handleExtrasClick={() => setExtrasOpen((open) => !open)}
      />
      <ContactSection
        contactOpen={contactOpen}
        handleContactHover={handleContactHover}
        handleContactClick={handleContactClick}
      />
      <hr className="h-0.5 my-4 bg-gray-500 border-0 dark:bg-gray-100" />
      <footer className="p-2 m-2 text-right">
        <p className="text-2xl tracking-widest ">
          this website is a{" "}
          <span className="font-bold tracking-tight hover: transition duration-1000">
            ⚠️WORK IN PROGRESS⚠️
          </span>{" "}
          built with <span className="font-bold tracking-tight">react</span> and{" "}
          <span className="font-bold tracking-tight">tailwind.css</span>
        </p>
      </footer>
    </main>
  );
}
