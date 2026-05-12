'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/mai2.png',
    '/mai3.png',
    '/mai4.png',
    '/mai5.png',
    '/mai6.png',
    '/mai7.png',
    '/mai8.png',
    '/mai9.png',
    '/mai10.png',
    '/mai11.png',
    '/mai12.png',
    '/mai13.png',
    '/mai14.png',
    '/mai15.png',
    '/IMG_7298.png',
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
