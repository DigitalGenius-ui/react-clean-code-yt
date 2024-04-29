import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-between py-5 
      border border-white/40 my-6 px-4 rounded-lg bg-white/10">
      <h1 className="uppercase text-2xl">logo</h1>
      <div className="flex items-center gap-5">
        <p>
          &copy; <span className="text-sm">Copyrighted by Milad Tech 2024</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
