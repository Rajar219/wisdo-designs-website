"use client";
import { useEffect, useState } from "react";

export default function HeroSlider() {
  const slides = ["/slide1.jpg", "/slide2.jpg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <img
        src={slides[index]}
        className="w-full h-[420px] object-cover rounded-3xl shadow-lg transition duration-700"
      />
    </div>
  );
}