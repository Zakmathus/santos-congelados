import React from 'react'
import { WA } from '../config'

export default function ContactCard({ phone, email, locations = [] }) {
  return (
    <section id="contact">
      <div className="bg-white rounded-2xl p-6 shadow border">
        <h3 className="text-xl font-semibold text-green-800">Contacto empresarial</h3>
        <p className="text-gray-700 mt-2">¿Quieres cotizar o agendar visita? Contáctanos:</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a className="bg-primary text-white px-4 py-3 rounded-md inline-block" href={`https://wa.me/${WA.DEFAULT}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="border px-4 py-3 rounded-md inline-block" href={`mailto:${email}`}>Enviar email</a>
        </div>
        <div className="mt-4 text-gray-600">
          <strong>Presencia:</strong> {locations.join(' · ')}
        </div>
      </div>
    </section>
  )
}
