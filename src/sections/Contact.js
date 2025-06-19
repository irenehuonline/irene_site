import React from "react";

export function ContactSection({
  contactOpen,
  handleContactHover,
  handleContactClick,
}) {
  return (
    <section>
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
        + CONTACT ME
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
        <p className="text-xl p-4 m-4 outline-5 rounded-2xl outline outline-gray-800">
          if you'd like to get in touch, feel free to reach out via email at{" "}
          <span className="font-bold">irenehuonline@gmail.com</span>, or fill
          out the form below ^^
        </p>
        {/* TODO: MAKE A SUBMISSION FORM FOR MESSAGES */}
      </div>
    </section>
  );
}
