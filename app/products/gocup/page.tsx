import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AddToCartButton from '@/components/add-to-cart-button'

export const metadata = {
  title: 'GoCup - EcoSip Travel Bottle',
  description: 'Collapsible and lightweight travel bottle. Designed for on-the-go professionals.',
}

export default function GoCupProduct() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative h-96 md:h-96 rounded-2xl overflow-hidden bg-secondary-light flex items-center justify-center">
                <Image
                  src="/images/2-product.png"
                  alt="EcoSip GoCup"
                  width={300}
                  height={400}
                  className="object-contain drop-shadow-lg w-auto h-auto"
                />
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                  <p className="text-primary text-sm font-semibold">Travel Friendly</p>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  GoCup
                </h1>
                <p className="text-2xl text-primary font-bold mb-4">₹1299</p>

                <p className="text-lg text-muted mb-8 leading-relaxed">
                  Collapsible and lightweight. Designed for on-the-go professionals who never compromise on quality. Perfect for commuters, travelers, and active lifestyles.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Collapsible Design</h4>
                      <p className="text-muted text-sm">Collapses to 50% size when empty for easy packing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Lightweight & Portable</h4>
                      <p className="text-muted text-sm">Only 6.2 oz - perfect for any bag or backpack</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Leak-Proof Lid</h4>
                      <p className="text-muted text-sm">Advanced sealing technology prevents spills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Eco-Certified</h4>
                      <p className="text-muted text-sm">Carbon neutral and fully recyclable</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AddToCartButton
                    id="gocup"
                    name="GoCup"
                    price={39.99}
                    image="/images/2-product.png"
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
        <section className="py-20 bg-secondary-light/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4 text-lg">Dimensions & Weight</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex justify-between"><span>Height (Expanded):</span> <span className="text-foreground">8.5 inches</span></li>
                  <li className="flex justify-between"><span>Height (Collapsed):</span> <span className="text-foreground">4.2 inches</span></li>
                  <li className="flex justify-between"><span>Weight:</span> <span className="text-foreground">6.2 oz</span></li>
                  <li className="flex justify-between"><span>Capacity:</span> <span className="text-foreground">18 oz / 533 ml</span></li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4 text-lg">Materials & Care</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex justify-between"><span>Material:</span> <span className="text-foreground">Silicone & Recycled Plastic</span></li>
                  <li className="flex justify-between"><span>Insulation:</span> <span className="text-foreground">Eco-Foam (4 hours)</span></li>
                  <li className="flex justify-between"><span>Care:</span> <span className="text-foreground">Dishwasher Safe</span></li>
                  <li className="flex justify-between"><span>Warranty:</span> <span className="text-foreground">2-Year Guarantee</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Perfect for your on-the-go lifestyle
            </h2>
            <button className="px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all">
              Shop GoCup Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
