"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  },
];

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div
        className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10 mt-20
  bg-gradient-to-r
  from-blue-500
  to-green-300
  bg-clip-text
  text-transparent
  "
      >
        Learn to code in multiple languages
      </div>
      <div className="grid grid-cols-4 p-4 md:flex justify-center md:gap-x-20">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.75,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              custom={index}
            >
              <Image
                src={image.url}
                width={100}
                height={100}
                alt="Logo"
                className="object-contain items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
