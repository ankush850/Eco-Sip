'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  tagline: string
  price: string
  image: string
  badge: string
  href: string
}

const products: Product[] = [
  {
    id: 'core',
    name: 'Core',
    tagline: 'Sip Smart. Live Sustainable.',
    price: '₹1499',
    image: '/images/core.png',
    badge: 'Best Seller',
    href: '/products/core'
  },
  {
    id: 'gocup',
    name: 'GoCup(Pair Of 2)',
    tagline: 'On-the-Go Essentials',
    price: ' ₹1299',
    image: '/images/2-product.png',
    badge: 'Travel Friendly',
    href: '/products/gocup'
  },
  {
    id: 'pure',
    name: 'Pure',
    tagline: 'Crystal Clear Technology',
    price: '₹499',
    image: '/images/3-product.png',
    badge: 'Premium Edition',
    href: '/products/pure'
  }
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted text-lg">
            Choose your perfect hydration companion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={product.href} key={product.id}>
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Product Card */}
                <div className="relative bg-secondary-light rounded-2xl overflow-hidden mb-6 h-80 flex items-center justify-center transition-all duration-500 hover:shadow-lg hover:shadow-primary/30">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background px-4 py-2 rounded-full text-sm font-bold z-10">
                    {product.badge}
                  </div>

                  {/* Product Image */}
                  <div className="relative w-full h-full flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      loading={product.id === 'core' ? 'eager' : 'lazy'}
                      className="object-contain drop-shadow-lg w-auto h-auto"
                    />
                  </div>

                  {/* Hover Glow */}
                  {hoveredId === product.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted mb-4">{product.tagline}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <button className="px-6 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all transform hover:scale-105 active:scale-95">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
