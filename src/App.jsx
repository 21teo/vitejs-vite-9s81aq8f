import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 45;
        audioRef.current.play();
        window.removeEventListener('click', handleUserInteraction);
      }
    };
    window.addEventListener('click', handleUserInteraction);
    return () => window.removeEventListener('click', handleUserInteraction);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Analytics />
      <audio ref={audioRef} loop>
        <source src="/khat.mp3" type="audio/mpeg" />
      </audio>

      {/* Yahan aapke saare sections (Assignment, Chatting, Laptop, etc.) aa jayenge */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        {/* ... baaki sections wahi jo pehle the ... */}
      </section>
      
      {/* ... baaki ka sara code ... */}
    </div>
  );
}
