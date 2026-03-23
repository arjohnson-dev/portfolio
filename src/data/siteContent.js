export const navigationItems = [
  { label: "Home", key: "home" },
  { label: "Services", key: "services" },
  { label: "Pricing", key: "pricing" },
  { label: "FAQ", key: "faq" },
  { label: "Contact", key: "contact" },
  { label: "Portfolio", key: "portfolio" },
  { label: "About Me", key: "about" },
];

export const processItems = [
  {
    number: "01",
    title: "You already have a clear direction",
    description:
      "If your designs and brand direction are already in place, I can build from that foundation and keep the process focused and straightforward.",
  },
  {
    number: "02",
    title: "You have a few pieces in place",
    description:
      "A logo, a color palette, or a rough sense of direction is more than enough. We can shape the rest together and work at a pace that feels manageable.",
  },
  {
    number: "03",
    title: "You are starting fresh",
    description:
      "If you’re starting from scratch, that’s completely fine too. We can build everything step by step—from the structure of the site to the design and content.",
  },
];

export const services = [
  {
    title: "Website Design & Development",
    description:
      "Thoughtful websites shaped around your goals, with responsive layouts, strong fundamentals, and room to grow over time.",
    icon: "monitor",
  },
  {
    title: "Landing Pages & Campaigns",
    description:
      "Focused pages for launches, promotions, and campaigns when you need something clear, intentional, and easy to act on.",
    icon: "layers",
  },
  {
    title: "eCommerce & Online Stores",
    description:
      "Online stores with clear shopping flows, practical tools, and a storefront that feels trustworthy and easy to use.",
    icon: "cart",
  },
  {
    title: "Redesigns & Modernization",
    description:
      "If your current site feels dated or hard to maintain, we can identify what is worth keeping and improve the rest with care.",
    icon: "shield",
  },
  {
    title: "SEO & Performance",
    description:
      "Performance and search basics built in from the start so your site is easier to find and more pleasant to use.",
    icon: "search",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support when you need updates, improvements, or a second set of eyes after launch.",
    icon: "tool",
  },
];

export const pricingPlans = [
  {
    badge: "Best Deal",
    name: "Landing Page",
    price: "$250",
    priceColor: "blue",
    badgeColor: "error",
    originalPrice: "$500",
    note: "1 page",
    features: [
      "One thoughtfully designed page",
      "Mobile-responsive",
      "Contact form or clear next step",
      "SEO basics included",
      "A good fit for promotions, events, or a simple online presence",
    ],
    cta: "Talk It Through",
  },
  {
    badge: "Most Popular",
    name: "Business Site",
    price: "$800",
    badgeColor: "warning",
    priceColor: "purple",
    originalPrice: "$1200",
    note: "4–6 pages",
    features: [
      "4 to 6 custom-designed pages",
      "Mobile-responsive throughout",
      "Contact form integration",
      "SEO setup on every page",
      "A strong fit for small businesses that need a clear, credible web presence",
    ],
    cta: "Start the Conversation",
    featured: true,
  },
  {
    badge: "Custom Quote",
    name: "",
    price: "Let's talk",
    priceColor: "",
    badgeColor: "blue",
    note: "For clients who need more than a standard package",
    features: [
      "eCommerce or online store",
      "Web apps, backend services, & custom functionality",
      "Custom art, logos, & graphic design",
      "Redesigns & modernizations",
      "Anything that doesn't fit a standard package",
    ],
    cta: "Request a Quote",
    custom: true,
  },
];

export const faqs = [
  {
    question: "Do I need to have everything ready before we start?",
    answer:
      "Not at all. Many projects begin with just a business name and a rough idea of what you want the website to accomplish. If you already have photos, branding, or written content, that is great — but if not, we can work through those details together. My goal is to make the process simple and comfortable from the very beginning.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most small business websites take about 2–4 weeks from kickoff to launch. The exact timeline depends on the size of the site and how quickly we move through feedback and revisions. Before we begin, we will review the scope together so you know what to expect.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Sometimes a website just needs a refresh, improved layout, or optimized performance. I can review your current site with you, identify what is working and what isn't, and recommend practical improvements.",
  },
  {
    question: "Do you handle domains and hosting?",
    answer:
      "Yes. I am happy to help set up and manage domains and hosting so you do not have to worry about the technical side of things. I typically deploy websites using Vercel because it is affordable, fast, secure, and reliable, but I am comfortable working with any platform a client prefers.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "After your site goes live, you can manage it yourself or continue working with me for ongoing support. I offer optional retainer services that cover content updates, small improvements, bug fixes, performance checks, and general maintenance. A retainer simply ensures you have reliable help available whenever you need it, so your website stays up to date while you focus on running your business. By default, I make project source code available on GitHub so it remains accessible for other developers to review or maintain if needed.",
  },
  {
    question: "How do we get started?",
    answer:
      "The easiest way is to send a message or schedule a quick call. We will talk through your business, what you want the website to accomplish, and the best approach for your project.",
  },
];

export const aboutPhotos = [
  {
    src: "/headshot.jpeg",
    alt: "Andrew Johnson outdoors in a portrait shot",
    caption:
      "Building thoughtful software with a practical, hands-on approach.",
  },
  {
    src: "/looking-away.jpeg",
    alt: "Andrew Johnson looking off-camera outdoors",
    caption:
      "A career shaped by simulation, product work, and modern web apps.",
  },
  {
    src: "/montserrat.jpeg",
    alt: "Andrew Johnson traveling near Montserrat",
    caption: "Travel and time outdoors keep me grounded and curious.",
  },
  {
    src: "/suki.jpeg",
    alt: "Suki the dog relaxing outdoors",
    caption: "Most adventures are better with my partner and our dog, Suki.",
  },
];

export const portfolioProjects = [
  {
    name: "CatchLogs",
    href: "https://catch-logs.app/",
    description:
      "A fishing log application for tracking catches and patterns over time.",
    imageSrc: "/catchlogs-screenshot.png",
    imageAlt: "Screenshot of the CatchLogs website",
    imagePosition: "center 20%",
  },
  {
    name: "www.circareclaim.com",
    href: "https://www.circareclaim.com/",
    description:
      "A portfolio website entry featuring the Circa Reclaim project.",
    imageSrc: "/circa-reclaim.png",
    imageAlt: "Screenshot of the Circa Reclaim website",
  },
  {
    name: "Funhouse Pup Cuts",
    href: "https://www.funhousepupcuts.com/",
    description:
      "A single-page service site for a circus-themed dog groomer located in Ypsilanti, Michigan.",
    imageSrc: "/fpc-screenshot.png",
    imageAlt: "Screenshot of the Funhouse Pup Cuts website",
  },
  {
    name: "Aarie Styles Salon",
    href: "https://www.aariestylessalon.com/",
    description:
      "A polished salon website focused on services, trust, and clear booking paths.",
    imageSrc: "/Aarie Styles.png",
    imageAlt: "Screenshot of the Aarie Styles Salon website",
  },
  {
    name: "Lana Johnson, LCSW",
    href: "https://lanajohnsonlcsw.com/",
    description:
      "A modern therapy practice website with a calm presentation and clear information.",
    imageSrc: "/lana-screenshot.png",
    imageAlt: "Screenshot of the Lana Johnson LCSW website",
  },
  {
    name: "arjohnson.dev",
    href: "https://arjohnson.dev/",
    description:
      "This site is also a proud piece of my portfolio, built as my personal web presence and a reflection of how I approach design and development.",
  },
];
