import React from "react";

export function PortfolioSection({ portfolioOpen, handlePortfolioClick }) {
  return (
    <section>
      <hr className="h-0.5 my-4 bg-gray-500 border-0 dark:bg-gray-100" />
      <h2 className="sr-only" id="portfolio-heading">
        Portfolio
      </h2>
      <button
        className="w-full text-left text-4xl hover:blur-sm transition duration-200 p-2 focus:outline-none"
        aria-expanded={portfolioOpen}
        aria-controls="portfolio-content"
        onClick={handlePortfolioClick}
        type="button"
        aria-labelledby="portfolio-heading"
      >
        + PORTFOLIO
      </button>
      <div
        id="portfolio-content"
        className={`mt-2 transition-all duration-150 ease-in-out overflow-hidden ${
          portfolioOpen
            ? "opacity-100 translate-y-0 max-h-40"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
        aria-hidden={!portfolioOpen}
      >
        <p className="text-xl p-4 m-4">
          i guess this is filler text because i havent really done this section
          yet.
          <span className="font-bold"> but idk girl who knows </span>
        </p>
      </div>
    </section>
  );
}
