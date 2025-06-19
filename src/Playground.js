import React, { useState } from "react";
import { ContactSection } from "./sections/Contact";
import { PortfolioSection } from "./sections/Portfolio";

export function Playground(props) {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactEverHovered, setContactEverHovered] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(true);

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
    <main className="flex flex-col min-h-screen m-8 p-8">
      <header>
        <h1 className="text-8xl font-bold leading-tight pb-8 p-2 hover:blur-sm transition duration-1000">
          Irene Hu
          <span className="font-normal"> (b. 2002)</span>
        </h1>
      </header>
      <section className="px-2 py-8">
        <p className="text-2xl ">
          this website is a{" "}
          <span className="font-bold">⚠️WORK IN PROGRESS⚠️</span> built with{" "}
          <span className="font-bold">react</span>,{" "}
          <span className="font-bold">tailwind.css</span>, and maybe{" "}
          <span className="font-bold">cables</span>.
        </p>
        <p className="text-2xl">
          hi! my name is <span className="font-bold">Irene Hu</span>. im going
          to write a proper bio for myself sooner or later.{" "}
          <span className="font-bold"> yay!</span>
        </p>
      </section>
      <PortfolioSection
        portfolioOpen={portfolioOpen}
        handlePortfolioClick={() => setPortfolioOpen((open) => !open)}
      />
      <ContactSection
        contactOpen={contactOpen}
        handleContactHover={handleContactHover}
        handleContactClick={handleContactClick}
      />
      <hr className="h-0.5 my-4 bg-gray-500 border-0 dark:bg-gray-100" />
    </main>
  );
}
