import React from "react";
import { PortfolioCard } from "../components/PortfolioCard";
import projectData from "../data/projectData.json";

export function PortfolioSection({ portfolioOpen, handlePortfolioClick }) {
  return (
    <section>
      <hr className="h-0.5 my-4 bg-gray-500 border-0 dark:bg-gray-100" />
      <h2 className="sr-only" id="portfolio-heading">
        Portfolio
      </h2>
      <button
        className={`w-full text-left p-2 focus:outline-none
    ${portfolioOpen ? "text-6xl" : "text-4xl"}`}
        aria-expanded={portfolioOpen}
        aria-controls="portfolio-content"
        onClick={handlePortfolioClick}
        type="button"
        aria-labelledby="portfolio-heading"
      >
        <h2 className="hover:blur-sm transition-all duration-300 w-fit">
          + featured projects
        </h2>
      </button>
      <div
        id="portfolio-content"
        className={`mt-2 transition-all duration-150 ease-in-out overflow-hidden ${
          portfolioOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
        aria-hidden={!portfolioOpen}
      >
        <p className="text-xl p-4 m-4">
          this is a placeholder line of text because{" "}
          <span className="font-bold hover:backdrop-invert transition duration-1000">
            💔 i havent completed this section yet.💔{" "}
          </span>
        </p>
        <p className="text-xl px-4 mx-4">
          but for now, this acts as an okay summary:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 mx-4">
          {projectData.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
