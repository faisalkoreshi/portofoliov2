import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Resume } from '@/components/Resume';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const App = () => {
  return (
    <main className='flex flex-col flex-1 max-w-4xl lg:max-w-6xl mx-auto p-10 lg:pl-0 lg:pr-40'>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
