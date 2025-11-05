import React from 'react';
import { GithubIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Kamil Mościszko
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8">
            Full-Stack Developer z pasją do tworzenia solidnych i skalowalnych rozwiązań w Go, React i TypeScript.
          </p>
          <a
            href="https://github.com/Raezil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-sky-600 transition-colors duration-300"
          >
            <GithubIcon className="w-6 h-6" />
            Zobacz na GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
