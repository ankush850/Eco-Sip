export default function AppPromo() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-secondary-light to-secondary-light/50 border border-primary/30 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Download the EcoSip App
          </h2>
          
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Track your hydration, connect with the eco-community, and unlock exclusive rewards. Available on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg hover:bg-foreground/90 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 13.5c-.91 0-1.64.75-1.64 1.74s.73 1.74 1.64 1.74c.9 0 1.64-.75 1.64-1.74s-.74-1.74-1.64-1.74zM6.95 13.5c-.9 0-1.64.75-1.64 1.74s.74 1.74 1.64 1.74 1.64-.75 1.64-1.74-.73-1.74-1.64-1.74z" />
              </svg>
              Download for iOS
            </button>
            <button className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg hover:bg-foreground/90 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13.5h8v8H3z" />
              </svg>
              Download for Android
            </button>
          </div>

          <p className="text-sm text-muted/70">
            Sign up with your email to receive 20% off your first order
          </p>
        </div>
      </div>
    </section>
  )
}
