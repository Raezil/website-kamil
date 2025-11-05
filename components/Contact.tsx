import React from 'react';
import { MailIcon, PhoneIcon } from './icons';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>();
    return (
        <section 
          id="contact" 
          ref={ref}
          className={`py-16 md:py-24 bg-slate-900/70 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Kontakt
                    </h2>
                    <p className="text-lg text-slate-400 mb-12">
                        Masz pytanie lub chcesz nawiązać współpracę? Chętnie odpowiem na Twoją wiadomość.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                        <a href="mailto:kmosc@protonmail.com" className="inline-flex items-center gap-3 text-xl text-slate-300 hover:text-sky-400 transition-colors duration-300">
                            <MailIcon className="w-7 h-7" />
                            <span>kmosc@protonmail.com</span>
                        </a>
                        <a href="tel:+48575044972" className="inline-flex items-center gap-3 text-xl text-slate-300 hover:text-sky-400 transition-colors duration-300">
                            <PhoneIcon className="w-7 h-7" />
                            <span>575 044 972</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
