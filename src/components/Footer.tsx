import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { socialLinks, navLinks } from '@/constants';

export const Footer = () => {
  return (
    <motion.footer
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='border-t border-neutral-800 py-8 mt-20'
    >
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        <motion.div
          variants={fadeUp}
          className='text-center md:text-left'
        >
          <p className='text-neutral-400 text-sm'>
            &copy; {new Date().getFullYear()} Faisal. All rights reserved.
          </p>
        </motion.div>

        <div className='flex flex-col items-center gap-4'>
          <motion.nav
            variants={fadeUp}
            className='flex flex-wrap gap-4 text-sm text-neutral-400'
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className='hover:text-primary transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          <motion.div
            variants={fadeUp}
            className='flex gap-3 text-neutral-500'
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  className='hover:text-primary border-2 border-neutral-600 p-2 rounded-full hover:border-primary transition duration-200'
                >
                  <Icon className='size-4' />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
