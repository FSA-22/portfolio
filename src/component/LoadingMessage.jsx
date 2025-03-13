import React, { useEffect, useState } from "react";

const LoadingMessage = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "FSA welcomes you";


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-400 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink"> |</span>
      </div>
      <div className="w-[200px] h-[2px] bg-purple-950 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-600 shadow-md animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingMessage;
