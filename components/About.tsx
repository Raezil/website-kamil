import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 md:py-24 bg-slate-900/70 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O mnie
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Cześć! Nazywam się Kamil i jestem doświadczonym Full-Stack Developerem. Moją specjalnością jest budowanie wydajnych i skalowalnych aplikacji webowych od podstaw. Na co dzień pracuję z nowoczesnymi technologiami, takimi jak <strong className="text-sky-400">React</strong> i <strong className="text-sky-400">TypeScript</strong> na frontendzie oraz <strong className="text-sky-400">Go (Golang)</strong> na backendzie.
          </p>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Wierzę w moc oprogramowania open source i chętnie dzielę się swoją pracą ze społecznością.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
