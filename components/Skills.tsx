import React from 'react';
import { SKILLS } from '../constants';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>();
    return (
        <section 
          id="skills" 
          ref={ref}
          className={`py-16 md:py-24 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Umiejętności i Technologie
                </h2>
                <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
                    {SKILLS.map(skill => (
                        <div key={skill} className="bg-slate-800 text-slate-300 text-lg font-medium px-5 py-2.5 rounded-lg shadow-md">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
