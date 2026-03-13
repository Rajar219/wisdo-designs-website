import { MonitorPlay, Smartphone, Database, PenTool, TrendingUp, Bot, Receipt, AppWindow, Building2, Coffee, Hotel, Utensils, ShoppingBag, Rocket, Plane, Store } from "lucide-react";

const services = [
  {
    title: "Business Website Development",
    desc: "Professional websites for real estate businesses, boutiques, cafes, restaurants, tourist services, and local companies.",
    icon: MonitorPlay,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50"
  },
  {
    title: "Mobile App Development",
    desc: "Custom mobile applications for orders, bookings, and business management.",
    icon: Smartphone,
    color: "from-purple-500 to-fuchsia-500",
    bg: "bg-purple-50"
  },
  {
    title: "Custom Website & Application Development",
    desc: "Fully customizable websites and business applications tailored to specific business workflows and requirements.",
    icon: AppWindow,
    color: "from-sky-500 to-blue-500",
    bg: "bg-sky-50"
  },
  {
    title: "Retail Billing & POS Software",
    desc: "Smart billing systems for shops with product management, sales tracking, and inventory control.",
    icon: Receipt,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Business Automation Systems",
    desc: "Automate business workflows such as bookings, customer management, and daily operations.",
    icon: Database,
    color: "from-indigo-600 to-violet-600",
    bg: "bg-indigo-50"
  },
  {
    title: "AI Chatbot Development",
    desc: "AI chatbots for websites and WhatsApp to handle customer queries and support automatically.",
    icon: Bot,
    color: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50"
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media marketing, and growth strategies to increase online visibility.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50"
  },
  {
    title: "Brand Design & Marketing Creatives",
    desc: "Banner design, flyer design, poster design, and social media creatives for business promotion.",
    icon: PenTool,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50"
  }
];

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "Boutiques", icon: Store },
  { name: "Cafes", icon: Coffee },
  { name: "Restaurants", icon: Utensils },
  { name: "Hotels", icon: Hotel },
  { name: "Tourist Services", icon: Plane },
  { name: "Retail Shops", icon: ShoppingBag },
  { name: "Startups", icon: Rocket }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-indigo-200/40 blur-[120px] rounded-full mix-blend-multiply -z-10" />

        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
            Our Capabilities
          </h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Scalable <span className="text-gradient">Solutions</span> <br/> for Modern Teams
          </h1>
          <p className="text-lg lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
            From intuitive digital products to intelligent backend automation, we engineer the systems that power your growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 lg:pb-48 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delay = `delay-[${i * 100}ms]`;
            
            return (
              <div 
                key={i} 
                className={`group bg-white rounded-[2rem] p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.12)] animate-fade-in-up ${delay} flex flex-col items-center sm:items-start text-center sm:text-left`}
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`bg-gradient-to-br ${service.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium max-w-sm mx-auto sm:mx-0">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100/60 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-bl-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              Local & Global Impact
            </h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              We design specialized digital solutions tailored specifically to the operational workflows of these key industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div key={i} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] group">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                    <IndIcon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <span className="font-bold text-slate-800 tracking-wide">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}