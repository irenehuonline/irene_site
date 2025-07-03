import React from "react";

export function ContactSection({
  contactOpen,
  handleContactHover,
  handleContactClick,
}) {
  return (
    <section>
      <hr className="h-0.5 my-4 bg-gray-500 border-0 dark:bg-gray-100" />
      <h2 className="sr-only" id="contact-heading">
        Contact
      </h2>
      <button
        className="w-full text-left text-4xl hover:blur-sm transition duration-200 p-2 focus:outline-none"
        aria-expanded={contactOpen}
        aria-controls="contact-content"
        onMouseEnter={handleContactHover}
        onClick={handleContactClick}
        type="button"
        aria-labelledby="contact-heading"
      >
        <h2 className="hover:blur-sm transition-all duration-300 w-fit">
          + connect with me!
        </h2>
      </button>
      <div
        id="contact-content"
        className={`mt-2 transition-all duration-150 ease-in-out overflow-hidden ${
          contactOpen
            ? "opacity-100 translate-y-0 max-h-40"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
        aria-hidden={!contactOpen}
      >
        <p className="text-xl p-4 m-8 rounded-2xl border-4 backdrop-blur-lg border-gray-200">
          if you'd like to get in touch, feel free to reach out via email at{" "}
          <span className="font-bold">irenehuonline@gmail.com </span>
          <span className="line-through">or fill out the form below ^^ </span>
        </p>
        {/* TODO: MAKE A SUBMISSION FORM FOR MESSAGES */}
      </div>
    </section>
  );
}
