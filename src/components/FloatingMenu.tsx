/**
 *
 * @copyright 2026 faisal
 */

/**
 *
 * Node modules
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/constants';

export const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className='fixed right-6 top-1/2 -translate-y-1/2 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-2xl p-3 z-10 hidden lg:block'
    >
      <nav className='flex flex-col gap-1'>
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.link;
          return (
            <motion.a
              key={link.label}
              href={link.link}
              onClick={() => setActive(link.link)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-200 relative group',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800'
              )}
              style={{ backgroundColor: isActive ? 'var(--primary)' : 'transparent' }}
            >
              <Icon
                className={cn(
                  'size-5 transition-all duration-200',
                  isActive ? 'text-primary-foreground' : 'text-neutral-400 group-hover:text-neutral-100'
                )}
              />
              <span className='absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 bg-neutral-900 text-xs text-neutral-300 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity'>
                {link.label}
              </span>
            </motion.a>
          );
        })}
      </nav>
    </motion.div>
  );
};
