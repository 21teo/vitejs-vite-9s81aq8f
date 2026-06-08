import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 1. SCENE: Assignment */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold mb-10 text-pink-400">First meet</h2>
        <img src="/boy_assignment.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl border-4 border-white/10" alt="Assignment" />
        <p className="mt-8 text-2xl font-light text-center">Uske ek kehne pe uske liye assignment likha...</p>
      </section>

      {/* 2. SCENE: Chatting */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Dosti aur Chatting</h2>
        <img src="/chatting.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl border-4 border-white/10" alt="Chatting" />
        <p className="mt-8 text-2xl font-light text-center">Dheere-dheere dosti gehri hoti gayi.</p>
      </section>

      {/* 3. SCENE: Chocolate */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold mb-10 text-amber-400">Ek Chocolate, Ek Umeed</h2>
        <img src="/chocolate.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl border-4 border-white/10" alt="Chocolate" />
        <p className="mt-8 text-2xl font-light text-center">Ma bohot man se, khushi se tumhe gift dene aya tha</p>
      </section>

      {/* 4. SCENE: Video Exchange Scene */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-pink-50 text-black">
        <h2 className="text-3xl font-bold mb-10 text-pink-600">Ek Chhoti si Koshish</h2>
        <img src="/video_exchange.jpg" className="w-full max-w-xl rounded-3xl shadow-2xl" alt="Video exchange" />
        <p className="mt-8 text-xl font-medium italic">"Sirf ek baar tum hus do, wahi kaafi tha..."</p>
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
        <h2 className="text-5xl font-black mt-10 text-red-200 text-center italic">"Main tumhara dost nahi ban paya."</h2>
      </section>

    </div>
  );
}
