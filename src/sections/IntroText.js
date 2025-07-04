import React from "react";
import bunny1 from "../assets/images/bunny1.png";
import bunny2 from "../assets/images/bunny2.png";

export function IntroTextSection() {
  return (
    <section className="px-2 pt-2 pb-8 selection:bg-blue-700 selection:text-teal-100">
      <p className="text-2xl px-16 pb-2 leading-none">
        i am a recent{" "}
        <span className="font-bold selection:bg-indigo-900 selection:text-white">
          UW iSchool
        </span>{" "}
        graduate who dabbles in{" "}
        <span className="font-bold">web dev, data programming, and design</span>
        {". "}i like bunnies{" "}
        <img
          src={bunny1}
          alt="a cute bunny"
          className="h-[1.5em] w-auto inline align-middle m-0 p-0 transition-transform duration-200 hover:scale-150 hover:rotate-12"
        />
      </p>

      <p className="text-2xl px-32 pb-2 tracking-wider">
        {" "}
        currently, i live in seattle.
      </p>
      {/* <p className="text-2xl">
        hi! my name is <span className="font-bold">Irene Hu</span>. im going to
        write a proper bio for myself sooner or later.{" "}
        <span className="font-bold"> yay!</span>
      </p> */}
    </section>
  );
}
