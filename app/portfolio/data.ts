export interface CaseStudySection {
  heading: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: "Business Website" | "E-Commerce Website" | "Business Software" | "Legal Website / Professional Services";
  status: "Live" | "In Development";
  image: string;
  url?: string;
  technologies: string[];
  sections: CaseStudySection[];
}

export const portfolioData: CaseStudy[] = [
  {
    slug: "nms-dairy-farm",
    title: "NMS Dairy Farm",
    seoTitle: "NMS Dairy Farm Case Study | Business Website Development | Wisdo Tech",
    description: "A modern dairy farm website showcasing fresh cow and buffalo milk, farm operations, and direct customer ordering, with completed custom domain integration and SEO setup.",
    category: "Business Website",
    status: "Live",
    image: "/nms-dairy-farm.png",
    url: "https://nmsdairyfarm.shop",
    technologies: ["React", "Next.js", "Tailwind CSS", "Domain Integration", "SEO Setup"],
    sections: [
      {
        heading: "The Challenge",
        content: "NMS Dairy Farm needed a professional digital presence to transition to direct customer delivery and local partnerships. They required custom domain configuration (nmsdairyfarm.shop) and structured SEO setup for local customer discovery."
      },
      {
        heading: "Our Approach",
        content: "We developed a high-speed Next.js application highlighting farm-fresh milk products and direct WhatsApp order channels. We completed full DNS domain integration for nmsdairyfarm.shop and deployed structured on-page SEO metadata."
      },
      {
        heading: "The Results",
        content: "The completed and delivered website provides seamless domain access, clear product details, and reliable ordering channels for households and commercial customers."
      }
    ]
  },
  {
    slug: "inzfyer",
    title: "INZFYER",
    seoTitle: "INZFYER Case Study | E-Commerce Website Development | Wisdo Tech",
    description: "A delightful boutique e-commerce platform for cute handmade plushies, aesthetic keychains, and artisanal gift sets delivered across India.",
    category: "E-Commerce Website",
    status: "Live",
    image: "/inzfyer.png",
    url: "https://www.inzfyer.in",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    sections: [
      {
        heading: "The Challenge",
        content: "INZFYER required a modern, highly aesthetic digital storefront to showcase their handcrafted plushies, cute keychains, and surprise gift collections with fluid mobile navigation and zero lag."
      },
      {
        heading: "Our Approach",
        content: "We engineered an ultra-fast storefront using React and Vite, focusing on vibrant visual product cards, intuitive category browsing, and a frictionless mobile checkout flow."
      },
      {
        heading: "The Results",
        content: "The completed and delivered platform offers a delightful gift shopping experience, establishing a distinctive online brand identity and smooth ordering flow."
      }
    ]
  },
  {
    slug: "saravanan-senior-advocate",
    title: "Saravanan — Senior Advocate Website",
    seoTitle: "Saravanan Senior Advocate Case Study | Legal Website Development | Wisdo Tech",
    description: "An authoritative, dignified legal chamber website engineered for Advocate SARAVANAN.N, Supreme Court of India, featuring practice areas, chamber profile, and direct consultation channels.",
    category: "Legal Website / Professional Services",
    status: "Live",
    image: "/saravanan-advocate.png",
    url: "https://saravananadv.world",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization", "Responsive Design"],
    sections: [
      {
        heading: "The Challenge",
        content: "Advocate SARAVANAN.N required a distinguished web presence representing his chamber at the Supreme Court of India. The platform needed to communicate legal expertise with dignity, clarity, and strict adherence to professional standards."
      },
      {
        heading: "Our Approach",
        content: "We built an authoritative, high-performance web experience highlighting core practice areas—including Constitutional Law, Appellate Practice, Commercial Disputes, and Civil Litigation—with rapid load times and direct consultation access."
      },
      {
        heading: "The Results",
        content: "The delivered website serves as a sophisticated digital chamber presence, providing individuals and corporate clients with direct access to professional legal representation and advisory counsel."
      }
    ]
  },
  {
    slug: "confusion-clothing",
    title: "Confusion Clothing",
    seoTitle: "Confusion Clothing Case Study | Fashion E-Commerce Website | Wisdo Tech",
    description: "A modern fashion e-commerce storefront built for a boutique clothing brand featuring responsive layout grids, category sorting, product filters, and a premium shopping experience.",
    category: "E-Commerce Website",
    status: "Live",
    image: "/confusion-clothing.png",
    url: "https://confusionclothing.github.io/shop/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    sections: [
      {
        heading: "The Challenge",
        content: "Confusion Clothing required a sleek, fast, and highly visual storefront to showcase their latest fashion drops with responsive layouts."
      },
      {
        heading: "Our Approach",
        content: "We developed a custom frontend using lightweight HTML5, CSS3, and JavaScript with responsive grid layouts and intuitive product filtering."
      },
      {
        heading: "The Results",
        content: "The lightweight architecture delivered rapid page loads and an engaging shopping experience."
      }
    ]
  }
];
