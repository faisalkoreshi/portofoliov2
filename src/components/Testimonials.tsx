import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { testimonials } from '@/constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20 lg:pt-32 relative'
      id='testimonials'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />

      <div className='relative z-10'>
        <motion.p
          variants={fadeUp}
          className='flex items-center gap-2 border border-neutral-600 rounded-sm w-fit py-1 px-4 text-sm text-neutral-400'
        >
          <span className='font-medium text-neutral-300'>Reviews</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-5xl font-bold mt-4 mb-10 tracking-tight'
        >
          What Clients <span className='text-primary'>Say</span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col hover:border-primary/50 transition-all duration-300'
            >
              <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative z-10 flex flex-col h-full'>
                <div className='flex items-center gap-1 mb-6'>
                  <Quote className='text-primary size-6' />
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className='size-4 text-yellow-400 fill-current'
                      />
                    ))}
                  </div>
                </div>
                <p className='text-neutral-300 text-base leading-relaxed mb-8 flex-1'>
                  {testimonial.text}
                </p>
                <div className='flex items-center gap-4 mt-auto pt-6 border-t border-neutral-800'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full object-cover border-2 border-primary/50'
                  />
                  <div>
                    <p className='font-semibold text-neutral-100'>
                      {testimonial.name}
                    </p>
                    <p className='text-sm text-neutral-500'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
