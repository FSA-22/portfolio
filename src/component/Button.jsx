import React from "react";

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button
      className={`flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black/80   transition-all active:scale-95 text-white mx-auto ${containerClass}`}>
      {name}
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />

          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
        </span>
      )}
    </button>
  );
};

export default Button;
