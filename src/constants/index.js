export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Simeon was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Simeon’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Simeon. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Simeon was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'FSAGYM',
    desc: 'Evolutionary Fitness, Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studio to Get The Shapes That you Dream of.. Get Your Dream Body Now',
    subdesc:
      'Gym workouts, especially resistance training and stretching exercises, can help improve muscular strength and flexibility, the is built using React, Tailwindcss, Framer Motion, TypeScript and Emailjs',
    href: 'https://fsa-gym-project.pages.dev/',
    texture: '/textures/project/fsa-gym-rts.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Flowpal - Small and Medium Business Management App',
    desc: 'is a management tool for small and medium businesses to manage business flows',
    subdesc:
      'Built with Next.js 15, TailwindCSS, TypeScript, and Framer Motion, Flowpal offers a user-friendly interface and powerful features to streamline operations and enhance productivity.',
    href: 'https://flowpal.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/flowpal.jpg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.06 : isMobile ? 0.07 : 0.08,
    deskPosition: isSmall
      ? [0.5, -3, 0]
      : isMobile
      ? [0.5, -5, 0]
      : [0.25, -7, 0],
    cubePosition: isSmall
      ? [6, -6, 0]
      : isMobile
      ? [10, -5, 0]
      : isTablet
      ? [10, -5, 0]
      : [12, -6, 0],
    reactLogoPosition: isSmall
      ? [6, 4, 0]
      : isMobile
      ? [12, 4, 0]
      : isTablet
      ? [10, 6, 0]
      : [13, 4, 0],
    ringPosition: isSmall
      ? [-13, 10, 0]
      : isMobile
      ? [-25, 10, 0]
      : isTablet
      ? [-15, 14, 0]
      : [-33, 15, 0],
    targetPosition: isSmall
      ? [-10, -8, -10]
      : isMobile
      ? [-13, -12, -10]
      : isTablet
      ? [-13, -7, -10]
      : [-13, -10, 0],
  };
};
