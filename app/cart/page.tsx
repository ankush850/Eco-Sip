'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const totalAmount = total * 1.1 // Total with tax

  const handleRazorpayCheckout = async () => {
    setIsProcessing(true)
    
    try {
      // Load Razorpay script
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag',
          amount: Math.round(totalAmount * 100), // Amount in paise
          currency: 'INR',
          name: 'EcoSip',
          description: 'Premium Sustainable Bottles',
          handler: (response: any) => {
            console.log('[v0] Payment successful:', response)
            alert('Payment successful! Order ID: ' + response.razorpay_payment_id)
            clearCart()
            setShowCheckout(false)
            setIsProcessing(false)
          },
          prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: '9999999999'
          },
          theme: {
            color: '#2ecc71'
          },
          modal: {
            ondismiss: () => {
              console.log('[v0] Payment cancelled')
              setIsProcessing(false)
            }
          }
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
      }

      document.body.appendChild(script)
    } catch (error) {
      console.error('[v0] Razorpay error:', error)
      setIsProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="max-w-6xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">Your Cart is Empty</h1>
            <p className="text-muted mb-8 text-lg">
              Start adding products to get started with your EcoSip collection.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl font-bold text-foreground mb-12">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 bg-white p-6 rounded-lg border border-border"
                  >
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                      <p className="text-primary font-bold text-xl mb-4">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                          >
                            −
                          </button>
                          <span className="px-4 py-2 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-4 py-2 text-red-600 font-semibold hover:bg-red-50 rounded-lg transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-foreground font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={clearCart}
                className="mt-8 px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg border border-border sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-muted">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Tax</span>
                    <span>${(total * 0.1).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-foreground font-bold text-lg">Total</span>
                  <span className="text-primary font-bold text-2xl">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>

                {!showCheckout ? (
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full px-6 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all"
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <div className="space-y-4">
                    <button
                      onClick={handleRazorpayCheckout}
                      disabled={isProcessing}
                      className="w-full px-6 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <span className="inline-block animate-spin">⟳</span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Ctext x='10' y='28' font-size='24' font-weight='bold' fill='white'%3ERazorpay%3C/text%3E%3C/svg%3E"
                            alt="Razorpay"
                            className="h-5"
                          />
                          Pay with Razorpay
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
                    >
                      Back to Cart
                    </button>
                  </div>
                )}

                <Link
                  href="/"
                  className="block text-center mt-4 px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
