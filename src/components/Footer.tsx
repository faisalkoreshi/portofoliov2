import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { socialLinks, navLinks } from '@/constants';
import { Heart, Code } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='border-t border-neutral-800 py-12 mt-20 relative overflow-hidden'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />

      <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8'>
        <motion.div
          variants={fadeUp}
          className='text-center md:text-left'
        >
          <p className='text-neutral-400 text-sm'>
            &copy; {new Date().getFullYear()} Faisal. All rights reserved.
          </p>
          <p className='text-neutral-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1'>
            Built with <Code className='size-3 text-primary' /> and{' '}
            <Heart className='size-3 text-red-400' /> by Faisal
          </p>
        </motion.div>

        <div className='flex flex-col items-center gap-6'>
          <motion.nav
            variants={fadeUp}
            className='flex flex-wrap justify-center gap-6 text-sm text-neutral-400'
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className='hover:text-primary transition-colors duration-200 font-medium'
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          <motion.div
            variants={fadeUp}
            className='flex gap-4'
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-10 h-10 border border-neutral-700 rounded-xl flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition-all duration-200'
                >
                  <Icon className='size-5' />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
