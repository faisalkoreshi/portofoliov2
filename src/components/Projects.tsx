import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { projectsData } from '@/constants';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='projects'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-36 py-1 pl-2 text-sm text-neutral-400'
      >
        <span>Portfolio</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-semibold mt-4 mb-10'
      >
        My <span className='text-primary'>Projects</span>
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className='group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden'
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold'>{project.title}</h3>
              <div className='flex flex-wrap gap-2 mt-3'>
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className='text-xs px-2.5 py-0.5 bg-neutral-800 text-neutral-400 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-sm text-primary hover:underline mt-4'
              >
                View Project
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
