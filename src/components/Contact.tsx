import { motion } from 'motion/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const form = e.currentTarget;
      const formData = new FormData(form);

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          subject: formData.get('subject') as string,
          message: formData.get('message') as string,
        },
        publicKey,
      );

      setSubmitStatus('success');
      form.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20 lg:pt-32 relative'
      id='contact'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none' />

      <div className='relative z-10'>
        <motion.p
          variants={fadeUp}
          className='flex items-center gap-2 border border-neutral-600 rounded-sm w-fit py-1 px-4 text-sm text-neutral-400'
        >
          <span className='font-medium text-neutral-300'>Contact</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight'
        >
          Get In <span className='text-primary'>Touch</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className='text-neutral-400 text-lg max-w-xl mb-12'
        >
          Have a project in mind or just want to say hello? I'd love to hear
          from you. Fill out the form and I'll get back to you as soon as
          possible.
        </motion.p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <motion.div
            variants={fadeUp}
            className='lg:col-span-1'
          >
            <div className='space-y-8'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0'>
                  <Mail className='size-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold text-neutral-100'>Email</h3>
                  <p className='text-neutral-400 text-sm mt-1'>
                    faisal.koreshi@gmail.com
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0'>
                  <MapPin className='size-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold text-neutral-100'>Location</h3>
                  <p className='text-neutral-400 text-sm mt-1'>
                    Toronto, Ontario, Canada
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0'>
                  <Phone className='size-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold text-neutral-100'>
                    Availability
                  </h3>
                  <p className='text-neutral-400 text-sm mt-1'>
                    Open for freelance & full-time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className='lg:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 space-y-6'
          >
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4 flex items-center gap-3'
              >
                <CheckCircle className='size-5 shrink-0' />
                <span>
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 flex items-center gap-3'
              >
                <AlertCircle className='size-5 shrink-0' />
                <span>
                  Something went wrong. Please try again or email me directly.
                </span>
              </motion.div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className='sr-only'
                >
                  Name
                </label>
                <Input
                  id='name'
                  name='name'
                  placeholder='Your Name'
                  required
                  className='bg-neutral-800/50 border-neutral-700 placeholder:text-neutral-500 focus:border-primary focus:ring-primary/20'
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className='sr-only'
                >
                  Email
                </label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                  required
                  className='bg-neutral-800/50 border-neutral-700 placeholder:text-neutral-500 focus:border-primary focus:ring-primary/20'
                />
              </div>
            </div>
            <div className='relative'>
              <label
                htmlFor='subject'
                className='sr-only'
              >
                Subject
              </label>
              <Input
                id='subject'
                name='subject'
                placeholder='Subject'
                required
                className='bg-neutral-800/50 border-neutral-700 placeholder:text-neutral-500 focus:border-primary focus:ring-primary/20'
              />
            </div>
            <div className='relative'>
              <label
                htmlFor='message'
                className='sr-only'
              >
                Message
              </label>
              <Textarea
                id='message'
                name='message'
                placeholder='Your Message'
                rows={6}
                required
                className='bg-neutral-800/50 border-neutral-700 placeholder:text-neutral-500 focus:border-primary focus:ring-primary/20 resize-none'
              />
            </div>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full py-3 text-lg gap-2 group'
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='size-5 animate-spin' />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={18}
                    className='group-hover:translate-x-1 transition-transform'
                  />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};
