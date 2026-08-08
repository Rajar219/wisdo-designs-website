import { Quote, Star, MessageSquare } from "lucide-react";

const testimonials = [
  {
    clientName: "Owner / Founder",
    businessName: "INZFYER",
    projectType: "E-Commerce Website",
    text: "[Client testimonial will be added here]"
  },
  {
    clientName: "Owner / Founder",
    businessName: "NMS Dairy Farm",
    projectType: "Business Website",
    text: "[Client testimonial will be added here]"
  },
  {
    clientName: "Owner / Founder",
    businessName: "Confusion Clothing",
    projectType: "E-Commerce Website",
    text: "[Client testimonial will be added here]"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in-up">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4 block">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
            See what our clients have to say about the digital solutions we've built for them.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="relative bg-slate-50/50 rounded-3xl p-8 sm:p-10 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 -right-2 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors pointer-events-none">
                <Quote className="w-24 h-24 rotate-180" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-lg text-slate-700 font-medium leading-relaxed italic mb-10 flex-grow relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200 shrink-0">
                  <span className="text-indigo-600 font-bold text-lg">{testimonial.clientName.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{testimonial.clientName}</h4>
                  <p className="text-sm font-medium text-slate-500">{testimonial.businessName}</p>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mt-1">
                    {testimonial.projectType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Placeholder */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 text-center flex flex-col items-center justify-center border-dashed border-2">
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 border border-rose-100">
              <MessageSquare className="w-8 h-8 text-rose-500" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Google Reviews</h4>
            <p className="text-slate-500 font-medium max-w-md mx-auto mb-6">
              [Google Business Profile Integration Placeholder - Actual Google Reviews will be displayed here once connected]
            </p>
            <button disabled className="bg-slate-100 text-slate-400 font-bold text-sm uppercase tracking-wide py-3 px-8 rounded-xl cursor-not-allowed">
              Connect Google Business
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
