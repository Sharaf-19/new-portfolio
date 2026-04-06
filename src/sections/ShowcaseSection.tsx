import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { workCards } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        },
      );
    });

    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  const [firstCard, ...restCards] = workCards;

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* Left — first project */}
          <div
            className='first-project-wrapper'
            ref={el => {
              cardRefs.current[0] = el;
            }}>
            <div className='image-wrapper'>
              {firstCard.url ? (
                <a href={firstCard.url} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={firstCard.imgPath}
                    alt={firstCard.title}
                    className='w-full h-auto object-contain'
                  />
                </a>
              ) : (
                <img
                  src={firstCard.imgPath}
                  alt={firstCard.title}
                  className='w-full h-auto object-contain'
                />
              )}
            </div>
            <div className='text-content'>
              <h2>{firstCard.title}</h2>
              {firstCard.description && <p>{firstCard.description}</p>}
            </div>
          </div>

          {/* Right — remaining projects */}
          <div className='project-list-wrapper overflow-hidden'>
            {restCards.map((card, index) => (
              <div
                key={card.title}
                className='project'
                ref={el => {
                  cardRefs.current[index + 1] = el;
                }}>
                <div
                  className='image-wrapper'
                  style={card.bgColor ? { backgroundColor: card.bgColor } : undefined}>
                  {card.url ? (
                    <a href={card.url} target='_blank' rel='noopener noreferrer'>
                      <img src={card.imgPath} alt={card.title} />
                    </a>
                  ) : (
                    <img src={card.imgPath} alt={card.title} />
                  )}
                </div>
                <h2>{card.title}</h2>
                {card.description && <p>{card.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
