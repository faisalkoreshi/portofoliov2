import { motion } from 'motion/react';
import { useState } from 'react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='contact'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center gap-2 border border-neutral-600 rounded-sm w-36 py-1 pl-2 text-sm text-neutral-400'
      >
        <span>Contact</span>
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-semibold mt-4 mb-10'
      >
        Get In <span className='text-primary'>Touch</span>
      </motion.h2>

      <motion.form
        variants={fadeUp}
        onSubmit={handleSubmit}
        action='mailto:faisal.koreshi@gmail.com'
        method='POST'
        encType='text/plain'
        className='max-w-xl space-y-4'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            placeholder='Name'
            required
          />
          <Input
            type='email'
            placeholder='Email'
            required
          />
        </div>
        <Input
          placeholder='Subject'
          required
        />
        <Textarea
          placeholder='Message'
          rows={5}
          required
        />
        <Button
          type='submit'
          disabled={isSubmitting}
          className='flex items-center gap-2 w-full'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </Button>
      </motion.form>
    </motion.section>
  );
};
