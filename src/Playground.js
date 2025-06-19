import React, { useState } from "react";
export function Playground(props) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="flex flex-col h-screenm-8 p-8">
      <header>
        <h1 className="text-8xl font-bold leading-tight pb-1 p-2 hover:blur-sm transition duration-1000">
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
      <hr className="h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-100" />
      <div>
        <section>
          <h2 className="text-4xl hover:blur-sm transition duration-200 p-2">
            + WORK
          </h2>
          {/* future: dropdown with project/portfolio list */}
        </section>
        <hr className="h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-100" />
        <section>
          <button
            className="w-full text-left text-4xl hover:blur-sm transition duration-200 p-2 focus:outline-none"
            aria-expanded={contactOpen}
            aria-controls="contact-content"
            onClick={() => setContactOpen((open) => !open)}
            type="button"
          >
            + CONTACT ME
          </button>
          <div
            id="contact-content"
            className={`mt-2 transition-all duration-100 ease-in-out overflow-hidden ${
              contactOpen
                ? "opacity-100 translate-y-0 max-h-40"
                : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
            }`}
            aria-hidden={!contactOpen}
          >
            <p className="text-xl p-4 m-4 outline-5 rounded-2xl outline outline-gray-800">
              if you'd like to get in touch, feel free to reach out via email at{" "}
              <span className="font-bold">irenehuonline@gmail.com</span>, or
              fill out the form below ^^
            </p>
            {/* TODO: MAKE A SUBMISSION FORM FOR MESSAGES */}
          </div>
        </section>
      </div>
      <hr className="h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-100" />
    </main>
  );
}
