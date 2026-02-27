import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AddToCartButton from '@/components/add-to-cart-button'

export const metadata = {
  title: 'Core - EcoSip Premium Bottle',
  description: 'Our flagship 24oz bottle made from 100% recycled materials. Perfect for daily hydration.',
}

export default function CoreProduct() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20 border-b border-border">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-background-light">
                <Image
                  src="/images/core.png"
                  alt="EcoSip Core on study desk"
                  fill
                  loading="eager"
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                  <p className="text-primary text-sm font-semibold">Best Seller</p>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  Core
                </h1>
                <p className="text-2xl text-primary font-bold mb-4">₹1499</p>

                <p className="text-lg text-muted mb-8 leading-relaxed">
                  Our flagship 24oz bottle designed for everyday hydration. Built from 100% recycled materials and engineered for maximum insulation and durability.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Double-Wall Insulation</h4>
                      <p className="text-muted text-sm">Keeps drinks cold for 24 hours or hot for 12 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">100% Recycled Materials</h4>
                      <p className="text-muted text-sm">Made from reclaimed plastics and aluminum</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Smart Tracking</h4>
                      <p className="text-muted text-sm">Integrated temperature display and hydration reminder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">BPA-Free & Non-Toxic</h4>
                      <p className="text-muted text-sm">Safe for you and the environment</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AddToCartButton
                    id="core"
                    name="Core"
                    price={49.99}
                    image="/images/model.png"
                  />
                  <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all">
                    ❤
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specs Section */}
        <section className="py-20 bg-gray-50 border-b border-border">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4 text-lg">Dimensions & Weight</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex justify-between"><span>Height:</span> <span className="text-foreground">10.2 inches</span></li>
                  <li className="flex justify-between"><span>Diameter:</span> <span className="text-foreground">3.1 inches</span></li>
                  <li className="flex justify-between"><span>Weight:</span> <span className="text-foreground">12.5 oz</span></li>
                  <li className="flex justify-between"><span>Capacity:</span> <span className="text-foreground">24 oz / 710 ml</span></li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4 text-lg">Materials & Care</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex justify-between"><span>Material:</span> <span className="text-foreground">Recycled Aluminum</span></li>
                  <li className="flex justify-between"><span>Insulation:</span> <span className="text-foreground">Double-Wall Vacuum</span></li>
                  <li className="flex justify-between"><span>Care:</span> <span className="text-foreground">Hand Wash Recommended</span></li>
                  <li className="flex justify-between"><span>Warranty:</span> <span className="text-foreground">Lifetime Guarantee</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to upgrade your hydration?
            </h2>
            <button className="px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all">
              Shop Core Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
