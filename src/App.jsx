import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

import sneaker1 from "./assets/images/sneaker-1.png";
import sneaker3 from "./assets/images/sneaker-3.png";
import sneaker2 from "./assets/images/sneaker-2.png";
import sneaker4 from "./assets/images/sneaker-4.png";
import sneaker5 from "./assets/images/sneaker-5.png";
import sneaker6 from "./assets/images/sneaker-6.png";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Nike Men's Court Vision Next Nature Shoes, Sneakers, Mid Top",
      price: "$85.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker1,
      imageAlt: "Nike Men's Court Vision Next Nature Shoes, Sneakers, Mid Top",
      details:
        "In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Meet the Nike Court Vision Mid. A classic remixed with at least 20% recycled materials by weight. Nike replaced leather with recycled and synthetic materials that keeps the soul of the original style. Its crisp upper and stitched overlays stays true to its origins. The plush collar keeps it sleek and comfortable for your world. ",
    },
    {
      id: 2,
      name: "Men's Grand Court 2.0 Cloudfoam Comfort Sneakers",
      price: "$89.99",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker2,
      imageAlt: "Men's Grand Court 2.0 Cloudfoam Comfort Sneakers",
      details:
        "These men's tennis-inspired shoes have a durable synthetic leather upper and a Cloudfoam Comfort sockliner for step-in cushioning. Classic-look 3-Stripes provide the finishing touch. This product represents just one of the adidas solutions to help end plastic waste.",
    },
    {
      id: 3,
      name: "Converse Men's Chuck Taylor All Star Ox Uni Hightop Sneakers - Black",
      price: "$79.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker3,
      imageAlt:
        "Converse Men's Chuck Taylor All Star Ox Uni Hightop Sneakers - Black",
      details:
        "The Chuck Taylor All Star is the shoe that started it all for Converse. These hightop sneakers have the iconic canvas uppers and vulcanized rubber outsoles. There've been countless imitations - the star-centered patch, rubber toe cap, toe bumper and striping tell you these are the real thing.",
    },
    {
      id: 4,
      name: "PUMA Men's Softrider Enzo NXT Shoes",
      price: "$95.99",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker4,
      imageAlt: "PUMA Men's Softrider Enzo NXT Shoes",
      details:
        "This is what happens when you combine two of PUMA's most innovative franchises: Softride and Enzo. A shoe that takes cushioning to the extreme, a shoe that provides unbelievable all-day comfort, a shoe that boasts a progressive upper design language with bold PUMA branding. Whether you want to stand out from the crowd, or leave your opponent far behind, these are the shoes for you.",
    },
    {
      id: 5,
      name: "PUMA Men's Classic XXI Shoes, Sneakers, Suede",
      price: "$89.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker5,
      imageAlt: "PUMA Men's Classic XXI Shoes, Sneakers, Suede",
      details:
        "The Suede hit the scene in 1968 and has been changing the game ever since. While many sneakers have come and gone since then – leaving footprints of varying sizes – it's difficult to argue any shoe having as much of a deep-rooted impact on society and culture as the Suede. From Tommie Smith’s protest on the victory stand during the 1968 Olympic games to b-boy crews in NYC adopting the shoe in the 1980s. It’s been worn by the icons of every generation – and it’s stayed classic through it all. The PUMA Suede is an icon for everyone. The Classic XXI brings back PUMA's most iconic silhouette with a full suede upper and several quality improvements.",
    },
    {
      id: 6,
      name: "Nike Men's Air Jordan 1 Basketball Shoes",
      price: "$155.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker6,
      imageAlt: "Nike Men's Air Jordan 1 Basketball Shoes",
      details:
        "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.",
    },
  ];
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
