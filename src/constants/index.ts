const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 2, suffix: '+', label: 'Years of Experience' },
  { value: 2, suffix: '+', label: 'Satisfied Clients' },
  { value: 8, suffix: '+', label: 'Completed Projects' },
  { value: 90, suffix: '%', label: 'Client Retention Rate' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
    name: 'logo1',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
    name: 'logo2',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
    name: 'logo3',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
    name: 'logo4',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
    name: 'logo5',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
    name: 'logo6',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
    name: 'logo7',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
    name: 'logo8',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
    name: 'logo9',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
    name: 'logo10',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
    name: 'logo11',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  // {
  //   name: 'React Developer',
  //   imgPath: '/images/logos/react.png',
  // },
  // {
  //   name: 'Python Developer',
  //   imgPath: '/images/logos/python.svg',
  // },
  // {
  //   name: 'Backend Developer',
  //   imgPath: '/images/logos/node.png',
  // },
  // {
  //   name: 'Project Management',
  //   imgPath: '/images/logos/git.svg',
  // },
  {
       name: 'Next Developer',
       imgPath: '/images/logos/next.png',
  },
];

const techStackIcons: {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}[] = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Project Management',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      'Sharaf brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.',
    imgPath: '/images/Picture1.png',
    logoPath: '/images/logo11.png',
    title: 'Fullstack Developer (Freelancing)',
    date: 'January 2025 - Present',
    responsibilities: [
      'Developed and maintained responsive, user-friendly features for the LGPMS client website using React.js and Tailwind CSS to enhance customer experience for service bookings and vehicle rentals.',
      'Implemented an admin panel to efficiently manage bookings and daily operations.',
      'Designed and implemented backend models and RESTful API routes using Node.js and Express.js for core features such as vehicles and bookings.',
      'Wrote end-to-end tests using Cypress, ensuring reliability and stability of key user flows and reducing regression bugs during deployments.',
    ],
  },
  {
    review:
      'Sharaf brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.',
    imgPath: '/images/MSUPREP1.png',
    logoPath: '/images/MSUPREP-logo.png',
    title: 'Fullstack Developer (Project)',
    date: 'July 2024 - December 2024',
    responsibilities: [
      'Built a platform to help students findprevious years’ exampapersefficiently.',
      'Developed a group project feature enabling students to collaborate on final year projects.',
      'Designed tools for teachers to track and monitor student progress seamlessly.',    
    ],
  },
  {
    review:
      'The pyhton projects reflect well-rounded technical skills and a creative application of algorithms to practical problems.',
    imgPath: '/images/python.svg',
    logoPath: '/images/python.png',
    title: 'Python (Project)',
    date: 'December-2024',
    responsibilities: [
      'GAME WITH AI OPPONENT USING MINIMAX ALGORITHM: Developed an interactive Connect 4 game with an AI opponent implemented using the Minimax algorithm with Alpha-Beta pruning.',
      'HOSPITAL PLACEMENT OPTIMIZATION USING GENETIC ALGORITHM: Python-based program to optimize hospital placements on a grid map using Genetic Algorithms.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Amin Painter',
    mentions: '@aminpainter',
    review:
      'Working with Sharaf on the LGPMS project was an outstanding experience. His attention to detail, and strong work ethic played a crucial role in bringing the platform to life. Whether it was developing user-friendly features, building out the backend, or setting up automated testing, he consistently went above and beyond.',
    imgPath: '/images/user-avatar.png',
  },
  {
    name: 'Amaan Tinwala',
    mentions: '@amaantinwala',
    review:
      'It was great working with Sharaf. He’s highly skilled, dependable, and always ready to tackle challenges head-on. His contributions made a real difference in the success of the LGPMS project. Highly recommend him for any web dev projects.',
    imgPath: '/images/user-avatar.png',
  },
  {
    name: 'Sharaf Abdullah',
    mentions: '@sharafabdullah',
    review:
      'Working with Sharaf has been an outstanding experience. His technical skills, attention to detail, and commitment to delivering high-quality work exceeded my expectations. I highly recommend him to anyone looking for a reliable and talented professional!',
    imgPath: '/images/user-avatar1.png',
  },
  // {
  //   name: 'Marvin McKinney',
  //   mentions: '@marvinmckinney',
  //   review:
  //     'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
  //   imgPath: '/images/client5.png',
  // },
  // {
  //   name: 'Floyd Miles',
  //   mentions: '@floydmiles',
  //   review:
  //     'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
  //   imgPath: '/images/client4.png',
  // },
  // {
  //   name: 'Albert Flores',
  //   mentions: '@albertflores',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
  //   imgPath: '/images/client6.png',
  // },
];

const socialImgs = [
  {
    name: 'insta',
    imgPath: '/images/insta.png',
    link: '',
  },
  // {
  //   name: 'fb',
  //   imgPath: '/images/fb.png',
  //   link: '',
  // },
  {
    name: 'x',
    imgPath: '/images/x.png',
    link: '',
  },
  {
    name: 'linkedin',
    imgPath: '/images/linkedin.png',
    link: 'https://www.linkedin.com/in/sharaf19/',
  },
  {
    name: 'github',
    imgPath: '/images/github.png',
    link: 'https://github.com/Sharaf-19',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
