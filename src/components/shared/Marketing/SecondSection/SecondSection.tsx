"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/features/feature1.svg",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/features/feature2.svg",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/features/feature3.svg",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/features/feature4.svg",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/features/feature5.svg",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/images/features/feature6.svg",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

export default function SecondSection() {
  return (
    <>
      <div className="md:flex-row flex-col items-center flex justify-center pb-10">
        <div className="p-5 justify-center md:w-1/3 ">
          <div
            className="
          bg-gradient-to-r
          from-blue-800
          to-green-300
          bg-clip-text
          text-transparent
          text-4xl
            md:text-6xl
            font-bold
            pb-10
          "
          >
            Beginner or Intermediate, Byte Bard&apos;s got your back!
          </div>
          <div className="text-2xl mb-8">
            Built for all programmers, Byte Bard is the only platform you need
            to improve your coding skills.
          </div>
          <Button
            className="bg-blue-500 text-white p-4 justify-center flex 
          md:w-1/3 rounded-lg hover:bg-blue-600"
          >
            Get Started
          </Button>
        </div>
        <video className="rounded-xl md:w-2/5 p-4 md:p-0" autoPlay muted loop>
          <source src="/content/landing-page-video.mp4" />
        </video>
      </div>
      <div className="flex-col items-center justify-center">
        <div
          className="text-3xl flex justify-center md:text-5xl 
        font-bold pt-5 pb-10 bg-gradient-to-r 
        from-purple-400 to-blue-800 bg-clip-text text-transparent"
        >
          Features
        </div>
        <div
          className="grid grid-cols-1 p-4 md:grid-cols-3 
        gap-4 md:px-40"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="text-gray-600 text-3xl font-bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain items-center justify-center mb-10"
                />
                <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                  {feature.name}
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
