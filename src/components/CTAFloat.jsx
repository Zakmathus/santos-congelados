import React from 'react'
import { WA } from '../config'

export default function CTAFloat({ phone }) {
  const number = phone.replace(/\D/g,'')
  return (
    <a
      href={`https://wa.me/${WA.DEFAULT}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3 z-50"
    >
      <span className="text-lg">💬</span>
      <span className="font-semibold">Cotizar</span>
    </a>
  )
}
