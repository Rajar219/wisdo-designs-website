export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 text-center relative">

      {/* soft premium glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-100 via-white to-blue-100 blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-3xl shadow-2xl p-14">

        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Premium Digital Solutions
          <span className="text-purple-600"> for Modern Businesses</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We help shops, startups, and entrepreneurs launch, manage,
          and grow their business with powerful digital systems.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/services" className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-purple-500">
            Explore Services
          </a>

          <a href="/contact" className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100">
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}