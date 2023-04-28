import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-10 px-2 sm:px-4 text-white no-underline  absolute bottom-0 w-screen bg-slate-600 shadow-2xl" >
      <div className="text-xs sm:text-sm  font-medium ">
        <p className="text-sm">
          Copyright &#169;
          {new Date().getFullYear()} Esad Akman
        </p>
      </div>
      <div className="flex justify-between gap-4">
        <a
          href="https://esadakman.github.io/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons"
          title="Portfolio page"
        >
          <i className="fa-sharp fa-solid fa-globe"></i>
        </a>
        <a
          href="https://github.com/esadakman"
          target="_blank"
          rel="noreferrer"
          className="footer-icons "
          title="Github Profile"

        >
          <i className="fa-brands fa-github "></i>
        </a>
        <a
          href="https://www.linkedin.com/in/esadakman/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons"
          title="Linkedin"

        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
