export default function ProductEcosystem() {
  return (
    <section id="eco-ecosystem" className="py-20 bg-secondary-light/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The EcoSip Ecosystem
          </h2>
          <p className="text-muted text-lg">
            Three smart solutions for sustainable living
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Core */}
          <div className="group bg-background border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <span className="text-2xl">♻️</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Core</h3>
            <p className="text-muted mb-4">
              Our flagship 24oz bottle made from 100% recycled materials. Perfect for daily hydration.
            </p>
            <a href="/products/core" className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
              View Details →
            </a>
          </div>

          {/* GoCup */}
          <div className="group bg-background border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <span className="text-2xl">☕</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">GoCup</h3>
            <p className="text-muted mb-4">
              Collapsible and lightweight. Designed for on-the-go professionals who never compromise.
            </p>
            <a href="/products/gocup" className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
              View Details →
            </a>
          </div>

          {/* Pure */}
          <div className="group bg-background border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <span className="text-2xl">💧</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Pure</h3>
            <p className="text-muted mb-4">
              Premium filtration system. Crystal clean water anywhere, anytime with smart tech integration.
            </p>
            <a href="/products/pure" className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
              View Details →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
