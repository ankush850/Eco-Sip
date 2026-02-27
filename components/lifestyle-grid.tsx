import Image from "next/image";

export default function LifestyleGrid() {
  return (
    <section className="py-20 bg-secondary-light/50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Live Sustainably
          </h2>
          <p className="text-muted text-lg">
            Join thousands making eco-conscious choices every day
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Left Large Image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/nature-forest.png"
              alt="Eco lifestyle"
              fill
              priority
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Nature Inspired
                </h3>
                <p className="text-white/90">
                  Designed with nature in mind
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="space-y-8">
            <div className="relative h-[420px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/workspace.png"
                alt="Workspace Ready"
                fill
                className="object-contain"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-bold text-black">
                  Workspace Ready
                </h3>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="bg-background border border-border rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <p className="text-muted">Users</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                5K
              </div>
              <p className="text-muted">Tons Recycled</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                1
              </div>
              <p className="text-muted">Countries Served</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
