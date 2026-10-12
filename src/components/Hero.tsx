import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { SparkleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button-variants';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        Im <span className='text-primary'>Faisal</span> UI/UX designer and
        forentend Developer
      </motion.h1>
      <motion.div
        variants={fadeUp}
        className='mt-8'
      >
        <p className='py-6 text-neutral-400'>
          I am a passionate Web Developer and Web Designer with hands-on skills
          in HTML, CSS, and JavaScript. I enjoy building clean, responsive, and
          user-friendly websites that look great and work smoothly on all
          devices. I focus on both design and functionality — making sure every
          site is visually appealing, fast, and easy to use. I am always
          learning new technologies and ready to help businesses and individuals
          build a strong online presence.
        </p>
        <a
          href='mailto:faisal.koreshi@gmail.com'
          className={cn(buttonVariants({}))}
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.section>
  );
};
