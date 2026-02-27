import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ProductEcosystem from '@/components/product-ecosystem'
import FeaturedProducts from '@/components/featured-products'
import LifestyleGrid from '@/components/lifestyle-grid'



export default function Home() {
  return (
    <main className="overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <Hero />
      <ProductEcosystem />
      <FeaturedProducts />
      <LifestyleGrid />
    </main>
  )
}
