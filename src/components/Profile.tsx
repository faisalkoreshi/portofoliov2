import { motion } from 'motion/react';
import { socialLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button-variants';
import { Mail, MapPin, Code } from 'lucide-react';

export const Profile = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900/80 backdrop-blur-sm text-white p-6 rounded-2xl lg:sticky lg:left-0 lg:top-6 lg:w-96'
    >
      <div className='flex flex-col gap-6'>
        <div className='flex items-center justify-between gap-x-4'>
          <div>
            <h1 className='text-3xl font-bold text-neutral-100'>Faisal</h1>
            <p className='text-sm text-primary font-medium'>
              Frontend Developer
            </p>
          </div>
          <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center'>
            <Code className='size-6 text-primary' />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className='relative'
        >
          <img
            src='/avatar.jpg'
            alt='Faisal'
            className='w-full rounded-2xl object-cover aspect-4/3 border border-neutral-700'
          />
          <div className='absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-primary/50 to-transparent rounded-bl-2xl' />
        </motion.div>

        <div className='space-y-4 pt-2 border-t border-neutral-800'>
          <div className='flex items-center gap-3 p-3 bg-neutral-800/50 rounded-xl'>
            <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
              <Mail className='size-5 text-primary' />
            </div>
            <div>
              <p className='text-xs text-neutral-500 uppercase tracking-wide'>
                Email
              </p>
              <a
                href='mailto:faisal.koreshi@gmail.com'
                className='text-sm font-medium text-neutral-100 hover:text-primary transition-colors'
              >
                faisal.koreshi@gmail.com
              </a>
            </div>
          </div>
          <div className='flex items-center gap-3 p-3 bg-neutral-800/50 rounded-xl'>
            <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
              <MapPin className='size-5 text-primary' />
            </div>
            <div>
              <p className='text-xs text-neutral-500 uppercase tracking-wide'>
                Location
              </p>
              <p className='text-sm font-medium text-neutral-100'>
                Toronto, Ontario, Canada
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 pt-2 border-t border-neutral-800'>
          <div className='text-center p-3 bg-neutral-800/50 rounded-xl'>
            <p className='text-2xl font-bold text-primary'>5+</p>
            <p className='text-xs text-neutral-500'>Years Exp</p>
          </div>
          <div className='text-center p-3 bg-neutral-800/50 rounded-xl'>
            <p className='text-2xl font-bold text-green-400'>50+</p>
            <p className='text-xs text-neutral-500'>Projects</p>
          </div>
          <div className='text-center p-3 bg-neutral-800/50 rounded-xl'>
            <p className='text-2xl font-bold text-yellow-400'>30+</p>
            <p className='text-xs text-neutral-500'>Clients</p>
          </div>
        </div>

        <div className='flex gap-3 pt-2'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex-1 hover:text-primary border-2 border-neutral-700 p-3 rounded-xl transition-all duration-200 flex items-center justify-center group'
              >
                <Icon className='size-6 text-neutral-400 group-hover:text-primary transition-colors' />
              </motion.a>
            );
          })}
        </div>

        <motion.a
          href='mailto:faisal.koreshi@gmail.com'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            buttonVariants({ size: 'lg', className: 'justify-center' }),
          )}
        >
          Let's Work Together
        </motion.a>
      </div>
    </motion.aside>
  );
};
