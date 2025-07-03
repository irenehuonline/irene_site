import React from "react";

export function ExtrasSection({ extrasOpen, handleExtrasClick }) {
  return (
    <section>
      <hr className="h-0.5 my-4 bg-gray-500 border-0 dark:bg-gray-100" />
      <h2 className="sr-only" id="extras-heading">
        Extras
      </h2>
      <button
        className="w-full text-left text-4xl p-2 focus:outline-none"
        aria-expanded={extrasOpen}
        aria-controls="extras-content"
        onClick={handleExtrasClick}
        type="button"
        aria-labelledby="extras-heading"
      >
        <h2 className="hover:blur-sm transition-all duration-300 w-fit">
          + extras
        </h2>
      </button>
      <div
        id="extras-content"
        className={`mt-2 transition-all duration-150 ease-in-out overflow-hidden ${
          extrasOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
        aria-hidden={!extrasOpen}
      >
        <h3 className="text-2xl tracking-wider p-4 m-4">dj cv </h3>
        <p className="text-2xl tracking-wider ">- 2025 </p>
        <p className="text-xl tracking-wider px-4">6.27 purrlesque </p>
        <p className="text-xl tracking-wider px-4">6.13 plus one</p>
        <p className="text-xl tracking-wider px-4">5.3 alfheim archea</p>
        <p className="text-xl tracking-wider px-4">2.15 fuck cupid</p>
        <p className="text-xl tracking-wider px-4">1.31 grime girls new year</p>
        <p className="text-xl tracking-wider px-4">1.10 alfheim</p>
        <p className="text-2xl tracking-wider">- 2024</p>
        <p className="text-xl tracking-wider px-4">11.23 confluence</p>
        <p className="text-xl tracking-wider px-4">10.27 angels cry too</p>
        <p className="text-xl tracking-wider px-4">7.21 streetscape</p>
        <p className="text-xl tracking-wider px-4">
          7.10 XND_live003:quicksilver5
        </p>
        <p className="text-xl tracking-wider px-4">7.6 venus eye</p>
        <img
          src="https://disimages.com/uploads/file/389"
          alt="Extra content"
          className="w-96 h-auto rounded-lg shadow-lg m-4"
        />
        {/* Add more content or components as you wish */}
      </div>
    </section>
  );
}
