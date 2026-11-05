import { motion } from 'motion/react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';

// Assets
import { MenuIcon } from 'lucide-react';

//constent

import { navLinks, socialLinks } from '@/constants';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const [active, setActive] = useState('#hero');

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='fixed top-4 right-4 z-50 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-xl p-3 hover:border-primary hover:bg-neutral-800 transition-all duration-200 lg:hidden'
            aria-label='Open menu'
          >
            <MenuIcon
              size={24}
              className='text-neutral-100'
            />
          </motion.button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-80 bg-neutral-900/95 backdrop-blur-xl text-white py-6 px-6'
        >
          <div className='flex items-center justify-between mb-8'>
            <SheetTitle className='text-lg font-semibold'>Menu</SheetTitle>
            <Button
              variant='ghost'
              size='icon'
              onClick={() =>
                document
                  .querySelector('[data-radix-sheet-content]')
                  ?.dispatchEvent(new Event('close'))
              }
              className='text-neutral-400 hover:text-primary'
            >
              {/* <X size={20} /> */}
            </Button>
          </div>
          <nav className='flex flex-col gap-2'>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  href={link.link}
                  key={link.label}
                  onClick={() => setActive(link.link)}
                  whileHover={{ x: 4 }}
                  className={cn(
                    'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                    active === link.link
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-neutral-300 hover:text-primary hover:bg-neutral-800',
                  )}
                >
                  <Icon
                    className={cn(
                      'size-5 transition-colors duration-200 shrink-0',
                      active === link.link
                        ? 'text-primary'
                        : 'text-neutral-400',
                    )}
                  />
                  <span className='font-medium'>{link.label}</span>
                </motion.a>
              );
            })}
          </nav>
          <div className='mt-10 pt-6 border-t border-neutral-800'>
            <p className='text-xs text-neutral-500 uppercase tracking-wide mb-4'>
              Socials
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-10 h-10 border border-neutral-700 rounded-xl flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition-all duration-200'
                  >
                    <Icon className='size-5' />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
