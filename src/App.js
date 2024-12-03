import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Search from './components/Search.jsx';
import Contact from './components/Contact.jsx';
import PostListing from './components/PostListing.jsx';
import About from './components/About.jsx';
import house1 from './components/houseImages/h1.jpg';
import house2 from './components/houseImages/h2.jpg';
import house3 from './components/houseImages/h3.jpg';
import house4 from './components/houseImages/h4.jpg';
import house5 from './components/houseImages/h5.jpg';

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Modern Apartment in Beirut",
      desc: "Located in the heart of Beirut, this modern apartment offers a perfect combination of comfort and convenience.",
      location: "Beirut, Lebanon",
      price: 1200,
      image: house1,
      bedrooms: 2,  
      propertyType: "cabins",  
    },
    {
      id: 2,
      title: "Traditional House in Byblos",
      desc: "A charming traditional house with a large garden, perfect for a peaceful retreat.",
      location: "Byblos",
      price: 600,
      image: house2,
      bedrooms: 3,  
      propertyType: "mansions",  
    },
    {
      id: 3,
      title: "Luxurious Villa in Jounieh",
      desc: "A spacious villa with breathtaking sea views, ideal for families or groups.",
      location: "Jounieh",
      price: 1200,
      image: house3,
      bedrooms: 5,  
      propertyType: "Villas",  
    },
    {
      id: 4,
      title: "Mountain Chalet in Faraya",
      desc: "A cozy mountain chalet with a fireplace, surrounded by stunning natural beauty.",
      location: "Tripoli",
      price: 800,
      image: house4,
      bedrooms: 4,  
      propertyType: "Chalets",  
    },
    {
      id: 5,
      title: "Beachfront Apartment in Batroun",
      desc: "A stylish beachfront apartment with direct access to the beach and incredible sunset views.",
      location: "zahle",
      price: 500,
      image: house5,
      bedrooms: 2,  
      propertyType: "detached houses",  
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search posts={posts} />} />
          <Route path="/postListing" element={<PostListing addPost={addPost} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
