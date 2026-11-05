import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { statsData, tools, education, experience } from '@/constants';
import {
  Award,
  Star,
  CheckCircle,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20 lg:pt-32 relative'
      id='resume'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />

      <div className='relative z-10'>
        <motion.p
          variants={fadeUp}
          className='flex items-center gap-2 border border-neutral-600 rounded-sm w-fit py-1 px-4 text-sm text-neutral-400'
        >
          <span className='font-medium text-neutral-300'>Resume</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-5xl font-bold mt-4 mb-10 tracking-tight'
        >
          My <span className='text-primary'>Credentials</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16'
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center overflow-hidden group'
            >
              <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative z-10 flex flex-col items-center'>
                <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'>
                  <Award className='size-8 text-primary group-hover:text-primary-foreground transition-colors' />
                </div>
                <p className='text-4xl font-bold text-primary'>{stat.number}</p>
                <p className='text-neutral-400 text-sm mt-2'>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className='mb-16'
        >
          <div className='flex items-center gap-3 mb-8'>
            <div className='p-3 bg-primary/10 rounded-xl text-primary'>
              <Star className='size-6' />
            </div>
            <h3 className='text-2xl font-semibold'>Tools & Technologies</h3>
          </div>
          <div className='flex flex-wrap gap-3'>
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className='flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 hover:border-primary/50 transition-all duration-200 group'
              >
                <div className='w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors'>
                  <img
                    src={tool.imgSrc}
                    alt={tool.label}
                    className='h-5 w-5'
                  />
                </div>
                <span className='text-sm font-medium text-neutral-300 group-hover:text-primary transition-colors'>
                  {tool.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <motion.div variants={fadeUp}>
            <div className='flex items-center gap-3 mb-8'>
              <div className='p-3 bg-primary/10 rounded-xl text-primary'>
                <Briefcase className='size-6' />
              </div>
              <h3 className='text-2xl font-semibold'>Experience</h3>
            </div>
            <div className='space-y-6'>
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
                  <div className='bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-primary/50 transition-colors'>
                    <div className='flex items-center gap-2 mb-2'>
                      <CheckCircle className='size-4 text-primary' />
                      <p className='text-sm text-primary font-medium'>
                        {item.year}
                      </p>
                    </div>
                    <h4 className='text-lg font-semibold text-neutral-100 mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-neutral-400 mb-2'>{item.institute}</p>
                    <p className='text-sm text-neutral-500'>{item.desc}</p>
                  </div>
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
            <div className='space-y-6'>
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
                  <div className='bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-primary/50 transition-colors'>
                    <div className='flex items-center gap-2 mb-2'>
                      <CheckCircle className='size-4 text-accent-foreground' />
                      <p className='text-sm text-accent-foreground font-medium'>
                        {item.year}
                      </p>
                    </div>
                    <h4 className='text-lg font-semibold text-neutral-100 mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-neutral-400 mb-2'>{item.institute}</p>
                    <p className='text-sm text-neutral-500'>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
