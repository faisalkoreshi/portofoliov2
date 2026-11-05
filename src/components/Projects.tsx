import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { projectsData } from '@/constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20 lg:pt-32'
      id='projects'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-fit py-1 px-4 text-sm text-neutral-400'
      >
        <span className='font-medium text-neutral-300'>Portfolio</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl md:text-5xl font-bold mt-4 mb-10 tracking-tight'
      >
        My <span className='text-primary'>Projects</span>
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300'
          >
            <div className='relative overflow-hidden'>
              <img
                src={project.imgSrc}
                alt={project.title}
                className='w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2'>
                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2'
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-neutral-800/90 backdrop-blur-sm text-neutral-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2'
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </div>
            <div className='p-6'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className='text-xs px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className='text-xl font-semibold text-neutral-100 mb-2 group-hover:text-primary transition-colors'>
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
