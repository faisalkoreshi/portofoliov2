import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { education, experience } from '@/constants';
import { Briefcase, GraduationCap, Code, Heart } from 'lucide-react';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20 lg:pt-32 relative'
      id='about'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />

      <div className='relative z-10'>
        <motion.p
          variants={fadeUp}
          className='flex items-center gap-2 border border-neutral-600 rounded-sm w-fit py-1 px-4 text-sm text-neutral-400'
        >
          <span className='font-medium text-neutral-300'>About</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-5xl font-bold mt-4 mb-10 tracking-tight'
        >
          My <span className='text-primary'>Story</span>
        </motion.h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div variants={fadeUp}>
            <div className='flex items-center gap-3 mb-8'>
              <div className='p-3 bg-primary/10 rounded-xl text-primary'>
                <Briefcase className='size-6' />
              </div>
              <h3 className='text-2xl font-semibold'>Experience</h3>
            </div>
            <div className='space-y-8'>
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1 }}
                  className='relative pl-8 border-l-2 border-neutral-800'
                >
                  <div className='absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2' />
                  <p className='text-sm text-primary font-medium mb-2'>
                    {item.year}
                  </p>
                  <h4 className='text-lg font-semibold text-neutral-100 mb-1'>
                    {item.title}
                  </h4>
                  <p className='text-neutral-400 mb-2'>{item.institute}</p>
                  <p className='text-sm text-neutral-500'>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className='flex items-center gap-3 mb-8'>
              <div className='p-3 bg-accent/10 rounded-xl text-accent-foreground'>
                <GraduationCap className='size-6' />
              </div>
              <h3 className='text-2xl font-semibold'>Education</h3>
            </div>
            <div className='space-y-8'>
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1 }}
                  className='relative pl-8 border-l-2 border-neutral-800'
                >
                  <div className='absolute left-0 top-1 w-4 h-4 rounded-full bg-accent-foreground border-4 border-background -translate-x-1/2' />
                  <p className='text-sm text-accent-foreground font-medium mb-2'>
                    {item.year}
                  </p>
                  <h4 className='text-lg font-semibold text-neutral-100 mb-1'>
                    {item.title}
                  </h4>
                  <p className='text-neutral-400 mb-2'>{item.institute}</p>
                  <p className='text-sm text-neutral-500'>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6'
        >
          <div className='bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors'>
            <Code className='size-8 text-primary mx-auto mb-3' />
            <p className='text-3xl font-bold text-primary'>5+</p>
            <p className='text-neutral-400 text-sm mt-1'>Years Coding</p>
          </div>
          <div className='bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors'>
            <Heart className='size-8 text-accent-foreground mx-auto mb-3' />
            <p className='text-3xl font-bold text-accent-foreground'>50+</p>
            <p className='text-neutral-400 text-sm mt-1'>Projects Built</p>
          </div>
          <div className='bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors'>
            <Briefcase className='size-8 text-green-400 mx-auto mb-3' />
            <p className='text-3xl font-bold text-green-400'>30+</p>
            <p className='text-neutral-400 text-sm mt-1'>Happy Clients</p>
          </div>
          <div className='bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors'>
            <GraduationCap className='size-8 text-yellow-400 mx-auto mb-3' />
            <p className='text-3xl font-bold text-yellow-400'>3</p>
            <p className='text-neutral-400 text-sm mt-1'>Degrees</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
