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
                priority
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-bold text-black">
                  Workspace Ready
                </h3>
              </div>
            </div>
          </div>

        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary-light/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary/10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Impact created through sustainable innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Users Card */}
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  50+
                </div>
                <p className="text-foreground font-semibold text-lg">
                  Users
                </p>
              </div>
            </div>

            {/* Tons Recycled Card */}
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  5K
                </div>
                <p className="text-foreground font-semibold text-lg">
                  Tons Recycled
                </p>
              </div>
            </div>

            {/* Countries Served Card */}
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  1
                </div>
                <p className="text-foreground font-semibold text-lg">
                  Countries Served
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}