import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { testimonials } from '@/constants';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='testimonials'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-36 py-1 pl-2 text-sm text-neutral-400'
      >
        <span>Reviews</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-semibold mt-4 mb-10'
      >
        What Clients <span className='text-primary'>Say</span>
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className='bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col'
          >
            <Quote className='text-primary size-6 mb-3' />
            <p className='text-neutral-300 text-sm mb-4 flex-1'>{testimonial.text}</p>
            <div className='flex items-center gap-3 mt-auto'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-10 h-10 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold'>{testimonial.name}</p>
                <p className='text-sm text-neutral-400'>{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
