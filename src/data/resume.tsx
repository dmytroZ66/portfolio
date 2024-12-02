import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amady Ba",
  initials: "Amady Ba",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Linkedin.",
  summary:
    "Innovatie Senior Software Engineer with 10 years of experience in designing cloud-native applications, streamlining data engineering workflows, and optimizing large-scale data pipelines. Proven ability to architect modern, scalable, and robust solutins using cutting-edge technologies like .NET, Azure, and big data platforms. Strong focus on building microservicesbased architectures, real-time data processing, and delivering high-performance applications across industries.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C#",
    ".Net core",
    "ASP.net",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
    "Apache Kafka",
    "Blazor",
    "gRPC",
    "RESTful API",
    "AWS",
    "Azure",
    "Agile Srum",
    "Redis",
    "Git",
    "Crystal Reports",
    "Problem solving",
    "Time management"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amadyba865@gmail.com",
    tel: "+13156364803",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/codev612",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amadyba-dev",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AmadyBa865",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amadyba865@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Lingobirds",
      href: "https://lingobirds.com/",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/lingobirds.png",
      start: "July 2020",
      end: "Now",
      description:
        "Architected and developed cloud-native applications using .NET 6 and Azure services, Designed and implemented scalable data pipelines processing terabytes of fiancial data daily, Led the migratin of legacy systems to microservices architecture using Docker and Kubernetes, Implemented real-time data processing solutins using Apache Kafka and Azure Event Hubs, Optimized data warehouse performance using Azure Synapse Analytis and Databricks, Technologies: C#, .NET 6, ASP.NET MVC, Python, Azure, Databricks, AWS, ReactJS, Databricks, Apache, Kafka, Apache Nifi Docker, Kubernetes",
    },
    {
      company: "EmazingGroup",
      badges: [],
      href: "https://emazinggroup.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/emazinggroup.png",
      start: "Aug 2015",
      end: "July 2020",
      description:
        "Developed multiple web applications for underwriting, asset management, and real estate research, Implemented RESTful APIs and integrated with third-party services including Google Maps, Utilized Azure cloud services and implemented CI/CD pipelines, Developed web services-based ERP solutin for advertising and digital media agencies, Implemented features for project management, workflow management, and resource management, Collaborated in requirements gathering, architecture planning, and user experience design to align development with business objectives, Technologies: C#, ASP.NET MVC, JavaScript, AngularJS, Azure, Entiy Framework, Dapper, ASP.NET Web Forms, JavaScript, jQuery, Crystal Reports, MSSQL",
    },
    {
      company: "Upwork(freelancer)",
      href: "https://upwork.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Full Stack Web Developer",
      logoUrl: "/upwork.png",
      start: "May 2017",
      end: "May 2013",
      description:
        "Developed desktop and web applications for healthcare management and accountig systems, Implemented reporting solutins using Crystal Reports and SQL Server Reportig Services, Technologies: C#, Windows Forms, ASP.NET Web Forms, SQL Server, Crystal Reports",
    },
  ],
  education: [
    {
      school: "The Islamia University of Bahawalpur",
      href: "https://www.iub.edu.pk/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/buildspace.jpg",
      start: "2010",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2015",
      location: "Remote",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2014",
      location: "Remote",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2014",
      location: "Remote",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2014",
      location: "Remote",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "2nd Place Winner",
      links: [],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "Oct 17th - 18th, 2013",
      location: "Remote",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "Aug 10th, 2013",
      location: "Remote",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "3rd Place Winner",
      links: [],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2013",
      location: "Remote",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2012",
      location: "Remote",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2011",
      location: "Remote",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [],
    },
  ],
} as const;
