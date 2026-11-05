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
      className='pt-20 lg:pt-32 relative'
      id='services'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />

      <div className='relative z-10'>
        <motion.p
          variants={fadeUp}
          className='flex items-center gap-2 border border-neutral-600 rounded-sm w-fit py-1 px-4 text-sm text-neutral-400'
        >
          <span className='font-medium text-neutral-300'>Services</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-5xl font-bold mt-4 mb-10 tracking-tight'
        >
          What I <span className='text-primary'>Do</span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden'
            >
              <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative z-10'>
                <div className='w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-semibold text-neutral-100 mb-3 group-hover:text-primary transition-colors'>
                  {service.title}
                </h3>
                <p className='text-neutral-400 text-sm mb-6 leading-relaxed'>
                  {service.desc}
                </p>
                <div className='flex items-center gap-2 text-primary text-sm font-medium'>
                  <span>{service.projects}</span>
                  <span className='text-neutral-600'>|</span>
                  <span className='text-neutral-500'>delivered</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
