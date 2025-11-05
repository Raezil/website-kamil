import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kamil Mościszko. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
