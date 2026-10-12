import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { services } from '@/constants';

export const Services = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='services'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-36 py-1 pl-2 text-sm text-neutral-400'
      >
        <span>Services</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-semibold mt-4 mb-10'
      >
        What I <span className='text-primary'>Do</span>
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className='bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary transition-colors duration-200'
          >
            <div className='mb-4'>{service.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
            <p className='text-neutral-400 text-sm mb-4'>{service.desc}</p>
            <p className='text-primary text-sm font-medium'>{service.projects}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
