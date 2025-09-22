import React from 'react'
import { motion } from 'framer-motion'
import { WA } from '../config';

export default function ProductCard({ product }) {
  const handleQuote = () => {
    const text = encodeURIComponent(`Hola, quiero cotizar: ${product.name}`);
    window.open(`https://wa.me/${WA.DEFAULT}?text=${text}`, '_blank');
  }

  return (
    <motion.div whileHover={{scale:1.03}} className="bg-white rounded-xl p-5 shadow border">
      <div className="w-full flex items-center justify-center">
        {product.image ? (
          <div className="w-24 h-24 rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
          </div>
        ) : (
          <div className="text-4xl">{product.emoji}</div>
        )}
      </div>

      <div className="mt-3 font-semibold text-lg text-green-800">{product.name}</div>
      <div className="text-gray-600 mt-2 text-sm">{product.desc}</div>
      <div className="mt-4 flex gap-2">
        <button onClick={handleQuote} className="bg-accent px-3 py-2 rounded-md font-semibold">Solicitar cotización</button>
        <button className="px-3 py-2 rounded-md border text-sm">Ver especificaciones</button>
      </div>
    </motion.div>
  )
}
