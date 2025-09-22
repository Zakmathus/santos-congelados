import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsGrid({ products = [] }) {
  return (
    <section id="products">
      <h2 className="text-2xl font-bold text-green-700">Nuestros productos</h2>
      <p className="text-gray-600 mt-2">Presentaciones industriales y condicionales para empresas y distribuidores.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
