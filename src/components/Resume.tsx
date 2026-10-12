import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { statsData, tools, education, experience } from '@/constants';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='resume'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-36 py-1 pl-2 text-sm text-neutral-400'
      >
        <span>Resume</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-semibold mt-4 mb-10'
      >
        My <span className='text-primary'>Credentials</span>
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'
      >
        {statsData.map((stat, i) => (
          <div
            key={i}
            className='bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center'
          >
            <p className='text-3xl font-bold text-primary'>{stat.number}</p>
            <p className='text-neutral-400 text-sm mt-1'>{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className='mb-10'>
        <h3 className='text-xl font-semibold mb-4'>Tools & Technologies</h3>
        <div className='flex flex-wrap gap-3'>
          {tools.map((tool, i) => (
            <div
              key={i}
              className='flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2'
            >
              <img src={tool.imgSrc} alt={tool.label} className='h-5 w-5' />
              <span className='text-sm text-neutral-300'>{tool.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <motion.div variants={fadeUp}>
          <h3 className='text-xl font-semibold mb-4'>Experience</h3>
          <div className='space-y-4'>
            {experience.map((item, i) => (
              <div key={i} className='border-l-2 border-neutral-800 pl-4'>
                <p className='text-sm text-neutral-400'>{item.year}</p>
                <h4 className='text-lg font-medium'>{item.title}</h4>
                <p className='text-neutral-300'>{item.institute}</p>
                <p className='text-sm text-neutral-400 mt-1'>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className='text-xl font-semibold mb-4'>Education</h3>
          <div className='space-y-4'>
            {education.map((item, i) => (
              <div key={i} className='border-l-2 border-neutral-800 pl-4'>
                <p className='text-sm text-neutral-400'>{item.year}</p>
                <h4 className='text-lg font-medium'>{item.title}</h4>
                <p className='text-neutral-300'>{item.institute}</p>
                <p className='text-sm text-neutral-400 mt-1'>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
