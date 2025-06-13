import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';

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
