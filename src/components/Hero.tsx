import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { SparkleIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button-variants';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20 lg:pt-32 relative overflow-hidden'
      id='hero'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />
      <div className='absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse' />
      <div
        className='absolute bottom-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse'
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10'>
        <motion.p
          variants={fadeUp}
          className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-fit px-4'
        >
          <SparkleIcon
            size={15}
            className='text-primary'
          />
          <span className='text-sm font-medium text-neutral-300'>
            Introduction
          </span>
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold capitalize mt-4 max-w-3xl md:leading-14 tracking-tight'
        >
          I'm <span className='text-primary'>Faisal</span>{' '}
          <span className='text-neutral-300'>UI/UX Designer</span>{' '}
          <span className='text-primary'>& Frontend Developer</span>
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className='mt-8 max-w-2xl'
        >
          <p className='text-lg md:text-xl text-neutral-400 leading-relaxed mb-8'>
            I craft clean, responsive, and user-friendly websites that look
            great and work smoothly on all devices. I focus on both design and
            functionality — making sure every site is visually appealing, fast,
            and easy to use.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='mailto:faisal.koreshi@gmail.com'
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Get in Touch
              <ArrowRight
                size={18}
                className='ml-2'
              />
            </a>
            <a
              href='#projects'
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className='mt-16 flex flex-wrap items-center gap-8 text-sm text-neutral-500'
        >
          <div className='flex items-center gap-2'>
            <span className='text-primary font-medium'>30+</span>
            <span>Happy Clients</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-primary font-medium'>50+</span>
            <span>Projects Done</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-primary font-medium'>5+</span>
            <span>Years Experience</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
