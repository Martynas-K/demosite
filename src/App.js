import React, {Component} from 'react';
import './styles/css/App.css';
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <HeaderSection />
            <ProductsSection />
            <ContactSection />
            <Footer />
        </div>
    )
  }
}

export default App;
