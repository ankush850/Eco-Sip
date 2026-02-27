'use client'

import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-background">ES</span>
            </div>
            <span className="font-bold text-foreground text-lg hidden sm:inline">EcoSip</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Sustainability</Link>
            <Link href="/cart" className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-background text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="px-6 py-2 bg-primary text-background rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors">Products</Link>
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors">Sustainability</Link>
            <Link href="/cart" className="flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart size={20} />
              <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
            </Link>
            <button className="w-full mt-4 px-6 py-2 bg-primary text-background rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Shop Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
