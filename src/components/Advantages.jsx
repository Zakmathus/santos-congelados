import React from 'react'
import { motion } from 'framer-motion'

export default function Advantages({ items = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-green-700">Por qué elegirnos</h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((it, idx) => (
          <motion.div key={idx} initial={{opacity:0, x:-8}} whileInView={{opacity:1,x:0}} transition={{delay: idx*0.08}} className="bg-white rounded-xl p-5 shadow border flex gap-4 items-start">
            <div className="text-3xl">{it.icon}</div>
            <div>
              <div className="font-semibold text-green-800">{it.title}</div>
              <div className="text-gray-600 mt-1">{it.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
