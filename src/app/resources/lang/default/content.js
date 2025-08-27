const person = {
  generalTitle: "Gabriel Ribeiro",
  firstName: "Gabriel",
  lastName: "Ribeiro",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/img/avatar.png",
  location: "Brazil",
  languages: ["Portuguese"], // optional: Leave the array empty if you don&apos;t want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (<>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>),
};

const contact = {
  display: true,
  title: <>Talk to me</>,
  description: (<>For requests for quotes, consultancy, maintenance and development of websites and platforms, send a message.</>),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "",
    icon: "github",
    link: "https://github.com/gabriersdev",
  },
  {
    name: "",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabrielmpribeiro",
  },
  {
    name: "",
    icon: "email",
    link: "mailto:gabriel@lts.app.br",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headlineMediumScreen: <>Full Stack Developer</>,
  headlineSmallScreen: <>My name is Gabriel and I am a Full Stack Developer</>,
  subline: (
    <p>
      Web Developer specialized in building interactive and scalable web applications using React, TypeScript, and modern tools. Delivered real-world solutions like a public transport app, a data validation system for banking agents, and automation bots.
    </p>
  ),
};

const about = {
  label: "About",
  // title: "About me" + ` - ${home.title}`,
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:devgabrielribeiro@gmail.com",
  },
  schedule: {
    display: true,
    link: "https://calendly.com/devgabrielribeiro/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>I’m a Web Developer with a technical background in Internet Informatics and currently pursuing a degree in Systems Analysis and Development. I specialize in building responsive interfaces and interactive applications using React, TypeScript, JavaScript, HTML, and CSS, alongside tools like Next.js and Vite.</p>
        
        <p>I’ve developed real-world solutions such as a mobility platform for public transport users (Mobilidade), a data validation tool for banking agents (CCA), a voting-based clip competition system (BattleTube), and Discord bots for automation and content notifications. These projects demonstrate my ability to design and deliver applications with practical impact, integrating APIs, handling
          dynamic data, and focusing on user experience.</p>
        
        <p style={{marginBottom: 0, paddingBottom: 0}}>I value clean code, reusable components, and continuous learning, always aiming to deliver scalable and maintainable solutions.</p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance Developer",
        timeframe: "2024 - Present",
        role: "Technical support, maintenance and development of web apps and websites",
        achievements: [
          <>
            As a freelance developer, I maintain and implement improvements on websites built with WordPress, and also create systems and websites with React. I'm also part of the development team at Lotus Media.
          </>,
          <>
            I also offer technical support services, including replacing components and equipment, and formatting and configuring devices and printers.
          </>
        ],
        images: [
          // optional: leave the array empty if you don&apos;t want to display images
          // {
          //   src: "/img/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "CHR Despachante Imobiliário",
        timeframe: "2023 - 2024",
        role: "Computer Technician",
        achievements: [
          <>I provided maintenance on the company&apos;s equipment, in addition to being responsible for updating, configuring and installing the company&apos;s computers.</>,
          <>I was responsible for implementing a file sharing system, which transformed the company&apos;s housing finance flow and increased sales completion by 40%.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: (<div><span>Systems Development Analyst (ends in Jan 2026)</span><br/>{/*<Text onBackground={"brand-weak"} variant={"body-default-m"}>Uninter</Text>*/}</div>),
        school: <>Uninter</>,
        description: <>Studied software engineering.</>,
      },
      {
        name: (<div><span>Computer Technician for the Internet</span><br/>{/*<Text onBackground={"brand-weak"} variant={"body-default-m"}>ETEC Professor Fontes</Text>*/}</div>),
        school: <>ETEC Professor Fontes</>,
        description: <>Studied equipment maintenance and web development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don&apos;t want to display images
        images: [
          {
            src: "/img/projects/template/img-1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/img/projects/battle/img-1.svg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: "I developed bots with Python, for ads on Discord with YouTube and Twitch API, moderation on Reddit and webscrapping.",
        images: [
          {
            src: "https://opengraph.githubassets.com/939568c657128880d286ba1bf90d9d8496ff6822b1a389f3e97f9fb6886f4d3e/gabriersdev/bot-notificacao-video-youtube-discord",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "https://opengraph.githubassets.com/939568c657128880d286ba1bf90d9d8496ff6822b1a389f3e97f9fb6886f4d3e/gabriersdev/bot-notificacao-live-twitch-discord",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "Node.js",
        description: "I built web applications with Node.js + Next.js or React + Tailwind.",
        images: [
          {
            src: "/img/projects/mobilidade/mob-1.png",
            link: "/work/mobilidade",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "PHP",
        description: "I created websites with PHP and provided maintenance on websites made with Wordpress and Laravel.",
        images: []
      },
      {
        title: "SQL",
        description: "I built applications (web or not) and APIs with MySQL, using HeidiSQL, PHPMyAdmin and Workbench.",
        images: [
          {
            src: "/img/projects/mobilidade/mob-1.png",
            link: "/work/mobilidade",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "Scrum",
        description: "I am certified by Certiproof as a qualified and knowledgeable professional in Scrum and its methods.",
        images: []
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech..." + ` ${home.title}`,
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects" + ` - ${home.title}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery" + ` - ${home.title}`,
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/img/gallery/x.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const review = {
  display: true,
  label: "",
  title: "Client Reviews",
  description: "",
  data: [
    {
      content: "\"I was apprehensive that I had lost the site, but Gabriel finished the service in less than a day and I had my site fully recovered with the backup and everything else.\n I highly recommend the service!\"",
      author: "Willian C.",
      project: "WordPress site recovery",
    },
    {
      content: "\"Working with Gabriel was a good experience. He understood our requirements and skillfully executed what he was asked to do.\"",
      author: "Bruno M.",
      project: "New visual identity for a gaming website",
    },
    {
      content: "\"He understood the project&apos;s needs and delivered what was requested. I recommend him and would work with him again.\"",
      author: "Isabela H.",
      project: "Adapting Spreadsheets for WordPress",
    },
    {
      content: "\"I want to express my gratitude to Gabriel for the incredible job he did on my shop&apos;s website. He met all of my expectations, was extremely fast, and the site turned out exactly the way I wanted - everything was perfect! I highly recommend his work to anyone looking for quality and efficiency. Thank you, Gabriel!\"",
      author: "Caroline C.",
      project: "Fix shopping cart issue",
    },
    {
      content: "\"He knows his stuff and is creative with solutions. I will definitely work with him again!\"",
      author: "Diogo G.",
      project: "Create a plugin for batch search in Tiny ERP",
    },
    {
      content: "\"An excellent professional. He completed my request on schedule.\"",
      author: "Henrique S.",
      project: "Creating a User Manual for a Web Platform",
    },
  ]
}

const CTG = {
  content: "See outher works in",
  link: {
    href: "/work",
    label: "Work page",
  },
}

// TODO - implementar
const links = [
  {
    type: "email",
    name: "Send me an email",
    link: "mailto:gabriel@lts.app.br",
  },
  {
    type: "schedule-call",
    name: "Schedule a call",
    link: "#",
  },
]

const content = {person, social, newsletter, contact, home, about, blog, work, gallery, review, CTG}
export {person, social, newsletter, contact, home, about, blog, work, gallery, review, CTG, content};
