import { socialLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button-variants';
export const Profile = () => {
  return (
    <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
      <div className=' flex flex-col  gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>Faisal</h1>
          <p className='text-sm'>Frontend Developer</p>
        </div>
        <img
          src='./avatar.jpg'
          alt='Faisal'
          className='lg:w-96 rounded-2xl object-cover'
        />
        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization :</p>
          <p className='text-lg capitalize'>
            UI/UX design and Forntend Developer
          </p>
        </div>
        <div>
          <p className='text-sm text-neutral-300'>Based In :</p>
          <p className='text-lg capitalize'>Toronto Ontario Canada </p>
        </div>
        <div className='flex gap-3 pt-2 text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
        </div>
        <a
          href='mailto:faisal.koreshi@gmail.com'
          className={cn(buttonVariants({ size: 'lg', className: 'mt-2' }))}
        >
          Lets Work together
        </a>
      </div>
    </aside>
  );
};
