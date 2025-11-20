import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pedro Henrique Garcia",
  initials: "PHG",
  url: "https://pedrohenriquegarcia.com",
  location: "São Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/saopaulo",
  description:
    "UX/UI Designer specializing in design systems and user-centered solutions. Creating intuitive digital experiences that solve real problems.",
  summary:
    "With over 4 years of experience in UX/UI design, I've helped companies build better digital products through thoughtful design systems and user-centered approaches. My expertise includes creating intuitive interfaces, conducting user research, and collaborating closely with development teams to ensure seamless implementation.",
  avatarUrl: "/me.png",
  skills: [
    "UI Design",
    "UX Research",
    "Design Systems",
    "Figma",
    "Prototyping",
    "User Testing",
    "Information Architecture",
    "Wireframing",
    "Adobe Creative Suite",
    "HTML/CSS",
    "Interaction Design",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  companyLogos: [
    {
      name: "Singu",
      logoUrl: "/singu-logo.svg",
    },
    {
      name: "b/luz Advogados",
      logoUrl: "/bluz-logo.svg",
    },
    {
      name: "Innoscience Consultoria",
      logoUrl: "/innoscience-logo.svg",
    },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pedrohvg",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Singu",
      href: "https://singu.com",
      badges: [],
      location: "Remote",
      title: "Junior Product Designer",
      logoUrl: "/singu-logo.svg",
      start: "November 2020",
      end: "July 2022",
      yearRange: "2020-2022",
      period: "November 2020 - July 2022",
      description:
        "Responsible for creating and implementing the Design System for two different platforms (iOS/Android), ensuring visual standardization and efficiency for multiple design and development teams.\n\nDelivered high-fidelity interfaces and prototypes, conducted usability research and testing, maintaining an agile and consistent pace in a startup environment. Promoted from intern to junior designer in just six months, reflecting the quality and impact of deliverables.",
    },
    {
      company: "b/luz Advogados",
      badges: [],
      href: "https://bluz.com",
      location: "Remote",
      title: "Junior UX/UI Designer",
      logoUrl: "/bluz-logo.svg",
      start: "August 2022",
      end: "January 2024",
      yearRange: "2022-2024",
      period: "August 2022 - January 2024",
      description:
        "Created the b/luz Design System using Atomic Design methodology to ensure consistency, efficiency, and a solid visual identity across all products and deliverables.\n\nResponsible for creating maps, flowcharts, prototypes, and interfaces focused on making the legal experience simple and intuitive for clients.\n\nLed usability research, usability testing, and heuristic evaluations, generating insights to guide design decisions and improve user experience.",
    },
    {
      company: "Innoscience Consultoria",
      href: "https://innoscience.com",
      badges: [],
      location: "São Paulo, Brazil",
      title: "UX/UI Designer",
      logoUrl: "/innoscience-logo.svg",
      start: "October 2024",
      end: "May 2025",
      yearRange: "2024-2025",
      period: "October 2024 - May 2025",
      description:
        "Responsible for designing new features, improving navigation flows, and evolving the InnoUP platform.\n\nCreated AI-driven experiences, designing intelligent interactions and journeys that integrate AI naturally into platform usage.\n\nDrove platform growth through multimedia content production and led complete interface and experience redesign projects, achieving 98% internal approval from the technology team.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "JUNTOS",
      href: "https://www.notion.so/pedrohgarcia/Juntos-Plataforma-Remota-de-Aprendizagem-para-Crian-as-b64287f7497e47558eb9f7544d5761fb",
      dates: "May 2023 - July 2023",
      active: true,
      description:
        "Virtual school platform that connects teachers, students and parents in a simplified educational environment.",
      technologies: [
        "Interface Design",
        "User Research",
        "Educational UX",
        "Information Architecture",
        "Wireframing",
        "Prototyping"
      ],
      links: [],
      image: "/images/projects/juntos.png",
      video: "",
    },

    {
      title: "Innoscience Projects",
      href: "https://pedrohgarcia.notion.site/Innoscience-Task-Manager-Framework-and-navegation-245072a1953480309462e7e1443aa775",
      dates: "October 2024 - Present",
      active: true,
      description:
        "This is a collection of my work at Innoscience.",
      technologies: [
        "UI Libraries",
        "Design Systems",
        "Web Applications",
        "Innovation Platforms",
        "Collaboration",
        "Prototyping"
      ],
      links: [
        {
          type: "Company Site",
          href: "https://innoscience.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/projects/Innoscience.png",
      video: "",
    },
    {
      title: "B/Luz Design System",
      href: "https://pedrohgarcia.notion.site/b-luz-Design-System-fe578d4dec90490088eb44c8f6c5104d",
      dates: "February 2022 - May 2022",
      active: false,
      description:
        "Complete design system with typography, color palette, component library and implementation guidelines.",
      technologies: [
        "Component Design",
        "Design Tokens",
        "Typography",
        "Guidelines",
        "Pattern Library"
      ],
      links: [
        {
          type: "Company Site",
          href: "https://baptistaluz.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/projects/bluz-design-system.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
  recommendations: [
    {
      name: "Douglas Junior",
      title: "Head of Design",
      image: "/images/recommendations/douglas-junior.jpg",
      text:
        "I had the pleasure of leading Pedro, during this period, he demonstrated remarkable skills and an exceptional commitment to excellence in product design. Under my leadership, he stood out as a dedicated and proactive team member. His ability to quickly understand the complexities of projects and translate them into creative solutions was impressive. He always showed a notable commitment to quality and innovation. Beyond his technical skills, he was a key piece in promoting a culture of collaboration and efficiency. His willingness to collaborate and share knowledge significantly contributed to the team's success. I recommend him as a talented Product Design professional. His tireless work ethic, technical skills, and collaborative approach make him a valuable addition to any team.",
    },
    {
      name: "Alex Minoru Abe",
      title: "Product Designer & Developer",
      image: "/images/recommendations/alex-minoru-abe.jpg",
      text:
        "Pedro excels at UI/UX, has a keen eye for details, masters Figma well, and always proposes solutions thinking about the real user experience. It's not just about making it look good, it's about making it work well from end to end. Beyond the technical side, he also has a very collaborative attitude, communicates well with the team, and is always available to exchange ideas, review something together, or help in other project fronts when necessary. He's the type of designer you want to have around on the team: reliable, creative, and delivers with quality.",
    },
    {
      name: "José Marcolino",
      title: "UX Researcher",
      image: "/images/recommendations/jose-marcolino.jpg",
      text:
        "Pedro was a professional I had the pleasure of working with at Singu. Always bringing a very contagious energy and good vibes to the team. He was always dedicated to the projects he took on and delivered excellent work. I'm sure he will increasingly become a great Designer to have as a teammate!",
    },
    {
      name: "Renan Rocha",
      title: "Developer",
      image: "/images/recommendations/renan-rocha.jpg",
      text:
        "I had the opportunity to work with Pedro, who took on the design of our product. In Figma, he created clear and consistent screens, structured the complete design system (colors, typography, components, and states), and kept everything well documented for the team. Always collaborative, he helped us devs transform requirements into interfaces that are simple to use and easy to develop. Organized, attentive to details, and ready to adjust every pixel to deliver the best experience.",
    },
    {
      name: "Richard de Souza",
      title: "Developer",
      image: "/images/recommendations/richard-de-souza.jpg",
      text:
        "I had the pleasure of working with Pedro and I can say with confidence that he is someone you'll want on the team, not only for the quality of work but also for his dedication and proactivity. He constantly brings new perspectives to discussions and was responsible for developing complex flows from scratch with great competence. Always receptive to feedback and with an open stance toward evolution, Pedro contributed consistently to the quality of the products we delivered together.",
    },
    {
      name: "Marcelo Antonietto",
      title: "Lead Product Designer",
      image: "/images/recommendations/marcelo-antonietto.jpg",
      text:
        "I had the opportunity to work with Pedro at Singu, and he is a talented and dedicated Product Designer. He approaches problems with curiosity, designs with clarity, and always keeps the user's real context in mind. Pedro is collaborative, open to feedback, and contributes to a positive, solution-oriented environment. I truly appreciated our partnership and would be glad to work with him again.",
    },
  ],
} as const;
