import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
      const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

      projects.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
            },
          }
        );
      });
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* Left */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <a href='https://lgpms.co.uk/' target='_blank'>
                <img
                  src='/images/LGPMS1.png'
                  alt='project-name'
                  className='w-full h-auto object-contain'
                />
              </a>
            </div>
            <div className='text-content'>
              <h2>LGPMS</h2>
              <p>
                LGPMS is a comprehensive web application built using the MERN stack (MongoDB,
                Express.js, React.js, Node.js) designed to enable customers to book services and
                rent vehicles or machinery. The system includes both a client-facing website and a
                robust admin panel to efficiently manage bookings, service records, rental
                inquiries, generate invoices and client interactions.
              </p>
            </div>
          </div>

          {/* Right  */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <a href='https://msuprep-frontend.vercel.app/' target='_blank'>
                  <img src='/images/MSUPREP.png' alt='project-name2' />
                </a>
              </div>
              <h2>MSUPREP</h2>
            </div>
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src='/images/BookShelf.png' alt='project-name3' />
              </div>
              <h2>BookShelf Store</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
