import React from "react";

const GradientButton = () => {
  return (
    <a
      href="https://calendar.app.google/jCCGCj3VLkzvpECC6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="p-2 m-1 my-3 tablet:p-4 laptop:p-4 text-white font-bold relative text-base text-center bg-gradient-to-r from-violet-500 via-sky-500 to-pink-500 bg-[length:400%] rounded-full z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-1 before:-bottom-1 before:-left-1 before:-right-1 before:bg-gradient-to-r before:from-violet-500 before:via-sky-500 before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-1000 before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
        <span className="text-l">Schedule a coffee chat ☕️</span>
      </button>
    </a>
  );
};

export default GradientButton;
