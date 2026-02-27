import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AddToCartButton from '@/components/add-to-cart-button'

export const metadata = {
  title: 'Pure - EcoSip Premium Filtration Bottle',
  description: 'Premium filtration system with smart tech integration. Crystal clean water anywhere.',
}

export default function PureProduct() {
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
                  src="/images/3-product.png"
                  alt="EcoSip Pure"
                  width={300}
                  height={400}
                  className="object-contain drop-shadow-lg w-auto h-auto"
                />
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                  <p className="text-primary text-sm font-semibold">Premium Edition</p>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  Pure
                </h1>
                <p className="text-2xl text-primary font-bold mb-4">₹499</p>

                <p className="text-lg text-muted mb-8 leading-relaxed">
                  Our premium filtration bottle with integrated smart technology. Crystal clean water anywhere, anytime. Connect with the EcoSip app for real-time water quality monitoring.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Advanced Filtration System</h4>
                      <p className="text-muted text-sm">Multi-stage filter removes 99.9% of impurities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Smart Connectivity</h4>
                      <p className="text-muted text-sm">Bluetooth enabled with app integration for tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Real-Time Water Quality</h4>
                      <p className="text-muted text-sm">Display shows pH, TDS, and temperature metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Premium Build Quality</h4>
                      <p className="text-muted text-sm">Stainless steel construction with premium finish</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AddToCartButton
                    id="pure"
                    name="Pure"
                    price={79.99}
                    image="/images/3-product.png"
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
                  <li className="flex justify-between"><span>Height:</span> <span className="text-foreground">11.5 inches</span></li>
                  <li className="flex justify-between"><span>Diameter:</span> <span className="text-foreground">3.5 inches</span></li>
                  <li className="flex justify-between"><span>Weight:</span> <span className="text-foreground">18.2 oz</span></li>
                  <li className="flex justify-between"><span>Capacity:</span> <span className="text-foreground">32 oz / 946 ml</span></li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4 text-lg">Technology & Care</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex justify-between"><span>Material:</span> <span className="text-foreground">Stainless Steel</span></li>
                  <li className="flex justify-between"><span>Connectivity:</span> <span className="text-foreground">Bluetooth 5.0</span></li>
                  <li className="flex justify-between"><span>Battery:</span> <span className="text-foreground">7-day charge</span></li>
                  <li className="flex justify-between"><span>Warranty:</span> <span className="text-foreground">Lifetime Guarantee</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Pure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary-light rounded-xl p-8">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="font-bold text-foreground mb-3">Pure Water</h3>
                <p className="text-muted">Multi-stage filtration ensures you drink the cleanest water possible</p>
              </div>
              <div className="bg-secondary-light rounded-xl p-8">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-bold text-foreground mb-3">Smart App</h3>
                <p className="text-muted">Track water quality and hydration goals in real-time</p>
              </div>
              <div className="bg-secondary-light rounded-xl p-8">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="font-bold text-foreground mb-3">Eco-Certified</h3>
                <p className="text-muted">Every purchase supports ocean cleanup initiatives</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary-light/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Experience the future of hydration
            </h2>
            <button className="px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all">
              Shop Pure Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
