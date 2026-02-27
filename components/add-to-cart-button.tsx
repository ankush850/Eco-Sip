'use client'

import { useCart } from '@/contexts/cart-context'
import { useState } from 'react'

interface AddToCartButtonProps {
  id: string
  name: string
  price: number
  image: string
}

export default function AddToCartButton({
  id,
  name,
  price,
  image,
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({ id, name, price, image })
    setIsAdded(true)

    // Reset the "added" state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`flex-1 px-8 py-4 rounded-lg font-bold text-lg transition-all ${
        isAdded
          ? 'bg-green-600 text-white'
          : 'bg-primary text-background hover:bg-primary/90'
      }`}
    >
      {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
    </button>
  )
}
