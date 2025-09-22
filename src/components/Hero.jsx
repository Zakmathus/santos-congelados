import React from 'react'
import { motion } from 'framer-motion'
import { WA } from '../config'

export default function Hero(){
  const waHref = WA.DEFAULT ? `https://wa.me/${WA.DEFAULT}` : '#';

  return (
    <section className="pt-10">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="bg-white rounded-2xl p-8 shadow-md">
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800">Fruta Congelada al Mayoreo</h1>
            <p className="mt-3 text-lg text-gray-700">Acopiamos, seleccionamos y distribuimos fruta congelada para empresas. Entregas en camión refrigerado a todo México y exportación.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waHref} target="_blank" rel="noreferrer" className="bg-primary text-white px-5 py-3 rounded-lg font-semibold shadow">Cotizar por WhatsApp</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-gray-200">Solicitar muestra</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Atención personal en Tijuana, Colima y Guadalajara.</div>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-yellow-50 to-green-50 flex items-center justify-center text-5xl shadow-inner">🥭🍍🍌🥭</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
