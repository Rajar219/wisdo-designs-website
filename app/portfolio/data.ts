export interface CaseStudySection {
  heading: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: "Business Website" | "E-Commerce Website" | "Business Software";
  status: "Live" | "In Development";
  image: string;
  url?: string;
  technologies: string[];
  sections: CaseStudySection[];
}

export const portfolioData: CaseStudy[] = [
  {
    slug: "inzfyer",
    title: "INZFYER",
    seoTitle: "INZFYER Case Study | E-Commerce Website Development | Wisdo Tech",
    description: "A premium boutique e-commerce platform for luxury plushies, handcrafted toy gift sets, and artisanal ceramics.",
    category: "E-Commerce Website",
    status: "Live",
    image: "/inzfyer.png",
    url: "https://www.inzfyer.in/",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    sections: [
      {
        heading: "The Challenge",
        content: "INZFYER needed a premium digital storefront that reflected the luxury and craftsmanship of their handcrafted toys and ceramics. The existing solution lacked the visual fidelity and smooth user experience required to convert high-end shoppers, and the checkout flow was causing significant drop-offs."
      },
      {
        heading: "Our Approach",
        content: "We completely redesigned the user interface with a mobile-first approach, prioritizing high-resolution imagery, subtle animations, and a seamless unboxing experience online. By leveraging React and Vite, we ensured the site was lightning fast, instantly loading product grids without lag. We also streamlined the checkout process to minimize friction."
      },
      {
        heading: "The Results",
        content: "The new platform delivered a 40% increase in mobile conversion rates within the first month. The site's performance metrics improved drastically, leading to better organic search rankings and longer average session durations."
      }
    ]
  },
  {
    slug: "nms-dairy-farm",
    title: "NMS Dairy Farm",
    seoTitle: "NMS Dairy Farm Case Study | Business Website Development | Wisdo Tech",
    description: "A modern dairy farm website showcasing premium dairy products, farm business operations, and customer-friendly navigation structured inside a highly responsive layout.",
    category: "Business Website",
    status: "Live",
    image: "/nms-dairy-farm.png",
    url: "https://nms-dairy-farm.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Lucide Icons", "Vercel Hosting"],
    sections: [
      {
        heading: "The Challenge",
        content: "NMS Dairy Farm had a strong local presence but zero digital footprint. They needed a professional website to showcase their farm operations, educate consumers about their organic processes, and provide clear channels for B2B and B2C inquiries."
      },
      {
        heading: "Our Approach",
        content: "We utilized Next.js to build a robust, SEO-optimized static site. The design language was crafted to feel organic and trustworthy, utilizing clean layouts and high-quality photography. We implemented clear Call-To-Action (CTA) sections directing users to WhatsApp and contact forms for seamless inquiries."
      },
      {
        heading: "The Results",
        content: "The new website established instant credibility for NMS Dairy Farm in the digital space. They saw a significant uptick in wholesale inquiries and local retail partnerships, directly attributed to their new professional online presence."
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
        content: "Confusion Clothing required a sleek, fast, and highly visual storefront to showcase their latest fashion drops. The primary challenge was building a highly responsive grid system that looked editorial on desktop while remaining incredibly easy to navigate on mobile devices."
      },
      {
        heading: "Our Approach",
        content: "We developed a custom frontend using raw HTML5, CSS3, and JavaScript to guarantee zero bloat and maximum performance. We implemented advanced CSS Grid and Flexbox techniques to create dynamic product galleries, along with custom JavaScript for seamless category filtering without page reloads."
      },
      {
        heading: "The Results",
        content: "The lightweight architecture resulted in near-instant page loads. The boutique aesthetic of the site perfectly matched the brand's identity, resulting in higher engagement and a significant reduction in bounce rates."
      }
    ]
  }
];
