import React, {Component} from 'react';
import './styles/css/App.css';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Article from "./components/Article";
import Weather from "./components/Weather";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import MessageUs from "./components/MessageUs";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <Welcome />
            <Article />
            <Weather />
            <Product />
            <ContactUs />
            <MessageUs />
            <Footer />
        </div>
    )
  }
}

export default App;
