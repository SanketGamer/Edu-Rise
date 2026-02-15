import React from 'react';
import { motion } from 'framer-motion'
import { dummyTestimonial, assets } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="py-12 px-4 md:px-10 lg:px-16 w-screen">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Testimonials</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {dummyTestimonial.map((t, idx) => {
          const likes = (t.rating ? Math.round(t.rating * 120) : 120) + idx * 7
          const replies = 3 + (idx % 7)
          return (
            <motion.div
              key={idx}
              className="rounded-3xl border border-white/10 bg-[#0e1826]/70 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] overflow-hidden"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              {/* header */}
              <div className="flex items-start justify-between p-4">
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold leading-none">{t.name}</p>
                      <span className="text-xs text-white/60">· Follow</span>
                    </div>
                    <p className="mt-1 text-base text-white">{t.role || '@learner'}</p>
                  </div>
                </div>
                <button className="text-white/40 hover:text-white/70">✕</button>
              </div>

              {/* content */}
              <div className="px-4 pb-2">
                <p className="text-white/80 text-sm leading-relaxed">
                  {t.feedback}
                </p>
                {/* optional media placeholder style */}
                <div className="mt-3 rounded-2xl bg-white/5 border border-white/10 aspect-[16/10]">
                 <p className="text-white text-sm text-center mt-2">
                 {t.mediaText || "Some placeholder text here"}
                  </p>
                </div>
              </div>

              {/* actions */}
              <div className="px-4 pt-1 pb-3">
                <div className="flex items-center gap-6 text-white/60 text-sm">
                  <span className="flex items-center gap-2"><span>❤</span>{likes}</span>
                  <span className="flex items-center gap-2"><span>💬</span>Reply</span>
                  <span className="flex items-center gap-2"><span>🔗</span>Copy link</span>
                </div>
                <button className="mt-3 w-full text-center text-sky-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2 text-sm">
                  Read {replies} replies
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default Testimonials;
