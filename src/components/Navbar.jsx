import React from 'react'
import { WA } from '../config'
import logo from '../assets/logo.svg'; // <-- ajusta la ruta si difiere

export default function Navbar() {
  return (
    <header className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Santos Congelados - logo" className="w-8 h-8 object-contain block" />
          <div>
            <div className="font-bold text-lg">Santos Congelados</div>
            <div className="text-sm opacity-90">Al Mayoreo — Colima · Guadalajara · Tijuana</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#products" className="hover:underline">Productos</a>
          <a href="#how" className="hover:underline">Cómo trabajamos</a>
          <a href="#contact" className="hover:underline">Contacto</a>
          <a href={`https://wa.me/${WA.DEFAULT}`} target="_blank" rel="noreferrer" className="bg-accent text-black px-4 py-2 rounded-full font-semibold shadow">Cotizar</a>
        </div>
        <div className="md:hidden">
          <a href={`https://wa.me/${WA.DEFAULT}`} target="_blank" rel="noreferrer" className="bg-accent text-black px-3 py-2 rounded-full font-semibold">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
