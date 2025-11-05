import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLinkIcon } from './icons';
import { useInView } from '../hooks/useInView';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">{project.name}</h3>
            <p className="text-sm text-slate-500">{project.owner}</p>
        </div>
        <ExternalLinkIcon className="w-6 h-6 text-slate-500 group-hover:text-sky-400 transition-colors duration-300"/>
      </div>
      <p className="text-slate-400 mb-4 h-24">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-slate-700 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-16 md:py-24 bg-slate-900 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Moje Projekty Open Source
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
