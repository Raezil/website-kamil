import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    name: 'go-agent',
    owner: 'Protocol-Lattice',
    url: 'https://github.com/Protocol-Lattice/go-agent',
    description: 'Implementacja agenta w języku Go, zaprojektowana do interakcji w ramach ekosystemu Protocol Lattice.',
    tags: ['Go', 'Protocol', 'Agent'],
  },
  {
    name: 'lattice-code',
    owner: 'Protocol-Lattice',
    url: 'https://github.com/Protocol-Lattice/lattice-code',
    description: 'TUI (Terminal User Interface), które generuje kod przy użyciu sztucznej inteligencji w ramach ekosystemu Lattice.',
    tags: ['Go', 'TUI', 'AI', 'Codegen', 'Protocol'],
  },
  {
    name: 'GoEventBus',
    owner: 'Raezil',
    url: 'https://github.com/Raezil/GoEventBus',
    description: 'Prosta, ale potężna implementacja Event Bus w języku Go, umożliwiająca komunikację między komponentami.',
    tags: ['Go', 'Library', 'Events'],
  },
  {
    name: 'go-utcp',
    owner: 'universal-tool-calling-protocol',
    url: 'https://github.com/universal-tool-calling-protocol/go-utcp',
    description: 'Implementacja Universal Tool Calling Protocol w Go, standaryzująca komunikację z narzędziami AI.',
    tags: ['Go', 'Protocol', 'AI', 'Tooling'],
  },
  {
    name: 'Thunder',
    owner: 'Raezil',
    url: 'https://github.com/Raezil/Thunder',
    description: 'Backendowy framework napisany w Go, który transformuje serwisy gRPC na GraphQL i REST.',
    tags: ['Go', 'Framework', 'Backend', 'gRPC', 'GraphQL', 'REST'],
  },
];

export const SKILLS: string[] = ['Go', 'React', 'TypeScript', 'Node.js', 'Full-Stack Development', 'Protocol Design', 'System Architecture'];