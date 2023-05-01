import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[32px] absolute bottom-0 flex justify-center bg-slate-600 text-white items-center shadow-2xl">
      <div className="flex justify-end w-1/2 gap-2">
        Powered by
        <a className="underline" href="https://solarvis.co/" target="_blank" rel="noreferrer">
          solarVis
        </a>
      </div>
    </footer>
  );
};

export default Footer;
