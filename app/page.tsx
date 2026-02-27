import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ProductEcosystem from '@/components/product-ecosystem'
import FeaturedProducts from '@/components/featured-products'
import LifestyleGrid from '@/components/lifestyle-grid'
import AppPromo from '@/components/app-promo'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <ProductEcosystem />
      <FeaturedProducts />
      <LifestyleGrid />
      <AppPromo />
      <Footer />
    </main>
  )
}
