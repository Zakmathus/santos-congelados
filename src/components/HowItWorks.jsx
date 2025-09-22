import React from 'react'
import { motion } from 'framer-motion'

export default function HowItWorks({ steps = [] }) {
  return (
    <section id="how">
      <h2 className="text-2xl font-bold text-green-700">Cómo trabajamos</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} transition={{delay: i*0.12}} className="bg-white p-6 rounded-xl shadow border">
            <div className="text-3xl">{s.icon}</div>
            <div className="mt-3 font-semibold">{s.title}</div>
            <div className="text-gray-600 mt-2">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
