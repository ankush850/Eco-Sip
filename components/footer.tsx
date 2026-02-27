import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-background">ES</span>
              </div>
              <span className="font-bold text-foreground text-lg">EcoSip</span>
            </div>
            <p className="text-muted text-sm">
              Everyday hydration reinvented. Smart reusable bottles made from recycled materials for a sustainable future.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/core" className="text-muted hover:text-primary transition-colors text-sm">
                  Core
                </Link>
              </li>
              <li>
                <Link href="/products/gocup" className="text-muted hover:text-primary transition-colors text-sm">
                  GoCup
                </Link>
              </li>
              <li>
                <Link href="/products/pure" className="text-muted hover:text-primary transition-colors text-sm">
                  Pure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 EcoSip. All rights reserved. Making hydration sustainable.
          </p>
          
          <div className="flex gap-6">
            <a href="/" className="text-muted hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20a11.08 11.08 0 0 0 11.26-11.26 8 8 0 0 0 1.95-2.04 8 8 0 0 1-2.31.63 4 4 0 0 0 1.77-2.21 8 8 0 0 1-2.54.98 4 4 0 0 0-6.93 3.64A11.4 11.4 0 0 1 2.7 3.9a4 4 0 0 0 1.24 5.35 4 4 0 0 1-1.82-.5v.05a4 4 0 0 0 3.2 3.92 4 4 0 0 1-1.8.07 4 4 0 0 0 3.74 2.77A8 8 0 0 1 1 18.95a11.4 11.4 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a href="/" className="text-muted hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a href="/" className="text-muted hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
