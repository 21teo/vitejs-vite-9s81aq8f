import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Ye function ensure karta hai ki browser autoplay policy block na kare
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 45; // 45 seconds par set kiya
        audioRef.current.play();
        window.removeEventListener('click', handleUserInteraction);
      }
    };

    window.addEventListener('click', handleUserInteraction);
    return () => window.removeEventListener('click', handleUserInteraction);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Music Player - Hidden */}
      <audio ref={audioRef} loop>
        <source src="/khat.mp3" type="audio/mpeg" />
      </audio>

      {/* Click indicator for user */}
      <div className="fixed top-4 right-4 z-50 text-xs text-slate-500 animate-pulse">
        Click anywhere to hear the story...
      </div>

      {/* 1. SCENE: Assignment */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold mb-10 text-pink-400">First meet with sweety</h2>
        <img src="/boy_assignment.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl border-4 border-white/10" alt="Assignment" />
        <p className="mt-8 text-2xl font-light text-center">Us din ma itna khush tha, us din tumhare lie kuch bhi, islie tumhare ek kehne pe tumhare liye sari raat assignment likha...</p>
      </section>

      {/* 2. SCENE: Chatting */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Dosti aur Chatting</h2>
        <img src="/chatting.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl border-4 border-white/10" alt="Chatting" />
        <p className="mt-8 text-2xl font-light text-center">Tumse apne man ki baatein share karna bohot acha lagta tha......</p>
      </section>

      {/* 3. SCENE: Chocolate */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold mb-10 text-amber-400">Ek Chocolate, Ek Umeed</h2>
        <img src="/chocolate.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl border-4 border-white/10" alt="Chocolate" />
        <p className="mt-8 text-2xl font-light text-center">Ma bohot khushi se tumhare lie choclate or gifts laya tha par tumne mujhe galat samjha....</p>
      </section>

      {/* 4. SCENE: Video Exchange Scene */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-pink-50 text-black">
        <h2 className="text-3xl font-bold mb-10 text-pink-600">Ek Chhoti si Koshish</h2>
        <img src="/video_exchange.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl" alt="Video exchange" />
        <p className="mt-8 text-xl font-medium italic">"Sirf ek baar tum hus do, wahi kaafi tha...islie tumhe video send karta tha, khudko joker banake"</p>
      </section>

      {/* 5. SCENE: WhatsApp Block Animation */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-slate-300 p-8">
        <h2 className="text-3xl font-bold mb-8 text-slate-400">Khamoshi.....ab sab khatam</h2>
        <motion.div 
          initial={{ opacity: 1 }}
          whileInView={{ opacity: [1, 0.5, 0.1] }}
          transition={{ duration: 4, ease: "linear" }}
          className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4 max-w-sm w-full"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
            <div className="w-10 h-10 rounded-full bg-slate-700"></div>
            <div>
              <div className="font-semibold text-sm text-slate-400">Dost</div>
              <div className="text-[10px] text-rose-400">Tap for details</div>
            </div>
          </div>
          <p className="text-sm text-slate-500 italic py-4 text-center">
            Chat history is clearing or contact has become unavailable.
          </p>
        </motion.div>
      </section>

      {/* 6. SCENE: Final Sad Scene */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-red-950">
        <img src="/sad_boy.jpg" className="w-full max-w-xl rounded-full shadow-2xl border-4 border-red-500" alt="Sad Boy" />
        <h2 className="text-5xl font-black mt-10 text-red-200 text-center italic">"Par at the end main tumhara dost hi nahi ban paya...</h2>
      </section>
    </div>
  );
}
