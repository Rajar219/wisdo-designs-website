export interface ServiceSection {
  heading: string;
  content: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  iconName: string;
  color: string;
  bg: string;
  sections: ServiceSection[];
  benefits: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "website-development",
    title: "Website Development",
    seoTitle: "Professional Website Development Services | Wisdo Tech",
    description: "We build fast, secure, and search-optimized business websites that drive conversions and represent your brand perfectly across all devices.",
    iconName: "MonitorPlay",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    sections: [
      {
        heading: "Custom Business Websites",
        content: "Your website is your digital storefront. We construct bespoke, high-performance websites tailored to your specific industry—whether you're a cafe needing a menu showcase, a boutique requiring an online presence, or a corporate entity needing a professional portfolio. We prioritize responsive design, ensuring your site looks flawless on mobile, tablet, and desktop."
      },
      {
        heading: "SEO-First Architecture",
        content: "A beautiful website is useless if no one can find it. Our development process inherently includes technical SEO best practices. From optimized core web vitals and fast load times to semantic HTML structure and clean URLs, we build a foundation that Google loves."
      },
      {
        heading: "Scalable E-Commerce Solutions",
        content: "Looking to sell online? We develop robust e-commerce platforms with secure payment gateways, inventory tracking, and intuitive user experiences that turn visitors into paying customers."
      }
    ],
    benefits: [
      "Lightning-fast page load speeds",
      "Mobile-first responsive design",
      "Technical SEO built-in",
      "Secure architecture",
      "Easy-to-manage Content Management Systems"
    ]
  },
  {
    slug: "software-development",
    title: "Software Development",
    seoTitle: "Custom Software Development Company | Wisdo Tech",
    description: "Bespoke software systems, SaaS applications, and internal tools engineered from scratch to resolve your specific operational bottlenecks.",
    iconName: "Cpu",
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50",
    sections: [
      {
        heading: "Bespoke Business Systems",
        content: "Off-the-shelf software often forces you to change how you work. We build custom software that adapts to your unique workflows. From custom CRMs and ERPs to specialized inventory management, our solutions streamline your daily operations and eliminate manual data entry."
      },
      {
        heading: "Web & Mobile Applications",
        content: "We engineer powerful full-stack web applications and cross-platform mobile apps. Whether you need a customer-facing portal, an internal dashboard, or a complex SaaS product, our team utilizes modern frameworks like React and Next.js to deliver robust, scalable codebases."
      },
      {
        heading: "System Integration & Automation",
        content: "Stop wasting time copying data between different platforms. We specialize in API integrations, connecting your existing tools and automating repetitive workflows to save your team hundreds of hours a month."
      }
    ],
    benefits: [
      "Tailored precisely to your workflows",
      "Scalable cloud architecture",
      "Robust data security",
      "Seamless third-party API integrations",
      "Long-term technical support"
    ]
  },
  {
    slug: "designing",
    title: "Designing",
    seoTitle: "UI/UX & Graphic Design Services | Wisdo Tech",
    description: "Premium UI/UX design, brand identity, and graphic design services that elevate your digital presence and engage your target audience.",
    iconName: "AppWindow",
    color: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50",
    sections: [
      {
        heading: "User Interface (UI) & User Experience (UX)",
        content: "Great software requires great design. Our UI/UX team focuses on creating intuitive, friction-less experiences that guide users exactly where they need to go. We design wireframes, interactive prototypes, and high-fidelity mockups that blend aesthetics with functionality."
      },
      {
        heading: "Brand Identity & Logo Design",
        content: "Your brand is more than just a logo. We help establish a cohesive visual identity, including typography, color palettes, and brand guidelines, ensuring your business looks professional and recognizable across all mediums."
      },
      {
        heading: "Digital Asset Creation",
        content: "From social media creatives and marketing banners to custom illustrations and iconography, we produce high-quality graphics that communicate your message clearly and beautifully."
      }
    ],
    benefits: [
      "User-centric design approach",
      "Modern and clean aesthetics",
      "Interactive prototyping",
      "Cohesive brand identity",
      "Conversion-optimized layouts"
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    seoTitle: "Digital Marketing & SEO Agency | Wisdo Tech",
    description: "Data-driven digital marketing, local SEO, and social media strategies designed to increase your visibility and generate qualified leads.",
    iconName: "Rocket",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    sections: [
      {
        heading: "Search Engine Optimization (SEO)",
        content: "We help your business dominate local search results. By optimizing your website's on-page content, improving technical SEO, and managing your Google Business Profile, we ensure you appear when customers are searching for your services."
      },
      {
        heading: "Social Media Management",
        content: "Engage your audience where they spend their time. We create structured social media campaigns, produce engaging content, and manage your online community across platforms like Instagram, Facebook, and LinkedIn."
      },
      {
        heading: "Performance Marketing & Analytics",
        content: "Stop guessing what works. We run targeted ad campaigns and set up comprehensive analytics tracking. By understanding user behavior and conversion metrics, we continuously refine our strategies to maximize your ROI."
      }
    ],
    benefits: [
      "Increased organic traffic",
      "Higher conversion rates",
      "Targeted lead generation",
      "Data-driven decision making",
      "Transparent reporting"
    ]
  }
];
