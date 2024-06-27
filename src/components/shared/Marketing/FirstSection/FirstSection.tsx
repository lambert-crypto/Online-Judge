import { Button } from "@/components/ui/button";
import React from "react";

export default function FirstSection() {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-300 to-gray-100">
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center fotnt-bold md:px-20 pb-10
        text-gradient
        bg-gradient-to-r
        from-blue-500
        to-green-400
        bg-clip-text
        text-transparent
        "
        >
          Learn to code with AI - Faster, and Better.
        </div>
        <p
          className="text-lg md:text-xl md-10
        bg-gradient-to-r
        from-black
        to-gray-400
        bg-clip-text
        text-transparent
        font-bold"
        >
          The best way to learn programming is by practice, and more practice.
          Learn and improve rapidly with AI.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Button className="bg-blue-500 text-white px-10 py-6 rounded-md text-lg font-bold">
            Get Started
          </Button>
          <Button className="bg-gray-600 text-white px-10 py-6 rounded-md text-lg font-bold">
            Learn More
          </Button>
        </div>
        <div className="pt-10 flex justify-center">
          <video className="rounded-xl" width="1000" autoPlay muted loop>
            <source src="/content/landing-page-video.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
