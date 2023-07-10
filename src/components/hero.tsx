'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/utils/cn';

import { Icons } from './icon';
import { Button } from './ui/button';

const heroImages = [
  {
    title: 'Hero Image One',
    src: '/assets/images/hero-image-one.webp',
  },
  {
    title: 'Hero Image Two',
    src: '/assets/images/hero-image-two.webp',
  },
  {
    title: 'Hero Image Three',
    src: '/assets/images/hero-image-three.webp',
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    if (currentImage === heroImages.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function prevImage() {
    if (currentImage === 0) {
      setCurrentImage(heroImages.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <div
      role="region"
      aria-label="Hero"
      aria-roledescription="carousel"
      aria-atomic="true"
      aria-relevant="additions removals"
      className="relative"
    >
      <div className="aspect-h-9 aspect-w-16">
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* <h1 className="absolute z-30 text-center text-6xl font-bold tracking-tight">
          {heroImages[currentImage].title}
        </h1> */}

        <Image
          src={heroImages[currentImage].src}
          alt={heroImages[currentImage].title}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center gap-2 pb-2">
        {heroImages.map((image, index) => (
          <Button
            key={image.title}
            className={cn(
              'h-1.5 w-10 rounded-none p-0 hover:bg-white',
              index === currentImage ? 'bg-white' : 'bg-zinc-500',
            )}
            onClick={() => setCurrentImage(index)}
          >
            <span className="sr-only">
              Slide {index + 1} of {heroImages.length}
            </span>
          </Button>
        ))}
      </div>
      <div className="absolute inset-x-0 inset-y-1/2 z-20 hidden justify-between px-4 py-2 md:flex">
        <Button
          size="sm"
          className="w-9 rounded-full bg-zinc-500 p-0 text-white hover:bg-zinc-600"
          onClick={prevImage}
        >
          <Icons.chevronLeft className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="sm"
          className="w-9 rounded-full bg-zinc-500 p-0 text-white hover:bg-zinc-600"
          onClick={nextImage}
        >
          <Icons.chevronRight className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
