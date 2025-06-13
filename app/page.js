import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: "Metta Muse | Handmade Artisans Marketplace",
  description: "Discover unique, handmade artisan products curated by Metta Muse. Shop globally, sustainably and ethically.",
  keywords: "artisan, handmade, sustainable, ethical fashion, global marketplace"
};

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductList />
      <Footer />
    </div>
  )
}
