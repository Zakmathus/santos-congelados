import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'
import HowItWorks from './components/HowItWorks'
import Advantages from './components/Advantages'
import ContactCard from './components/ContactCard'
import CTAFloat from './components/CTAFloat'
import Footer from './components/Footer'
import { WA } from './config';

export default function App() {
  // Datos estáticos de ejemplo (luego vendrán de la API)
  const products = [
    { id: 1, name: 'Mango Congelado', emoji: '🥭', desc: 'Cubos o rebanadas. Cajas de 1kg / 5kg / 20kg.' },
    { id: 2, name: 'Plátano Congelado', emoji: '🍌', desc: 'Cortado y listo para smoothies. Cajas industriales.' },
    { id: 3, name: 'Piña Congelada', emoji: '🍍', desc: 'Dulce, natural. Cortes a medida.' },
    { id: 5, name: 'Papaya Congelada', emoji: '🥭', desc: 'Papaya en cubos, ideal para licuados y jugos.' },
  ]

  const steps = [
    { icon: '🚜', title: 'Acopio', desc: 'Compra directa a huerteros confiables en Colima y Guadalajara.' },
    { icon: '⏱️', title: 'Congelado Rápido', desc: 'Proceso que conserva sabor y textura.' },
    { icon: '🚚', title: 'Entrega Refrigerada', desc: 'Enviamos en camiones hasta tu almacén.' },
  ]

  const advantages = [
    { icon: '🤝', title: 'Trato directo', desc: 'Negociación personalizada y visitas presenciales.' },
    { icon: '📦', title: 'Grandes volúmenes', desc: 'Surtimos camiones completos y pedidos a gran escala.' },
    { icon: '❄️', title: 'Cadena de frío', desc: 'Transporte y almacenamiento refrigerado garantizado.' },
    { icon: '🌱', title: 'Precios competitivos', desc: 'Compra directa a huerteros, mejor costo por caja.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 text-gray-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <section className="mt-10">
          <ProductsGrid products={products} />
        </section>
        <section className="mt-14">
          <HowItWorks steps={steps} />
        </section>
        <section className="mt-14">
          <Advantages items={advantages} />
        </section>
        <section className="mt-14 mb-10">
          <ContactCard phone={WA.DEFAULT} email="ventas@santoscongelados.mx" locations={['Tijuana','Colima','Guadalajara']} />
        </section>
      </main>
      <CTAFloat phone={WA.DEFAULT} />
      <Footer />
    </div>
  )
}
