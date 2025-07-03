import React from "react";

export function PortfolioCard({ title, description, image }) {
  return (
    <div className="relative p-4 h-64 overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:blur-sm transition duration-300"
        loading="lazy"
      />
      <div className="relative z-10 flex flex-col h-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-4xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <h4 className="text-xl font-semibold tracking-tight text-white">
          {description}
        </h4>
      </div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default PortfolioCard;
