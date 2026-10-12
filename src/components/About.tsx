import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { education, experience } from '@/constants';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='about'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-36 py-1 pl-2 text-sm text-neutral-400'
      >
        <span>About</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-semibold mt-4 mb-10'
      >
        My <span className='text-primary'>Story</span>
      </motion.h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <motion.div variants={fadeUp}>
          <h3 className='text-xl font-semibold mb-4'>Experience</h3>
          <div className='space-y-6'>
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
          <div className='space-y-6'>
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
