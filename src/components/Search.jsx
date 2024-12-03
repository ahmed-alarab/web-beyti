import React, { useState } from 'react';
import Slider from 'react-slider';
import { AiFillCloseCircle } from 'react-icons/ai';
import './search.css';

function Search({ posts }) {
  const MIN = 0;
  const MAX = 2000;

  // States for filters
  const [values, setValues] = useState([MIN, MAX]);
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [type, setType] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // Filtered posts
  const filteredPosts = posts.filter((post) => {
    const inPriceRange = post.price >= values[0] && post.price <= values[1];
    const matchesLocation = location ? post.location.toLowerCase().includes(location.toLowerCase()) : true;
    const matchesBedrooms = bedrooms ? post.bedrooms === parseInt(bedrooms) : true; // Compare as numbers
    const matchesType = type ? post.propertyType === type : true;
    return inPriceRange && matchesLocation && matchesBedrooms && matchesType;
  });

  const showDetails = (post) => {
    setSelectedPost(post);
  };

  const closeDetails = () => {
    setSelectedPost(null);
  };

  return (
    <>
      {/* Filter Section */}
      <div className="filterContainer">
        <div className="rangeContainer">
          <div className="rangeTitle">Price Range</div>
          <div className="rangeFilter">
            <div className="sliderValues">
              <b>${values[0]} - ${values[1]}</b>
            </div>
            <Slider
              className="slider"
              min={MIN}
              max={MAX}
              value={values}
              onChange={setValues}
            />
          </div>
        </div>
        <div className="locationContainer">
          <div className="locationTitle">Location</div>
          <select
            className="locationFilter"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Beirut">Beirut</option>
            <option value="Baalbeck">Baalbeck</option>
            <option value="Tripoli">Tripoli</option>
            <option value="Jounieh">Jounieh</option>
            <option value="Zahle">Zahle</option>
          </select>
        </div>
        <div className="bedroomsContainer">
          <div className="bedroomsTitle">Number of Bedrooms</div>
          <select
            className="bedroomsFilter"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="typeContainer">
          <div className="typeTitle">Property Type</div>
          <select
            className="typeFilter"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Detached Houses">Detached Houses</option>
            <option value="Semi-Detached Houses">Semi-Detached Houses</option>
            <option value="Duplexes">Duplexes</option>
            <option value="Mansions">Mansions</option>
            <option value="Chalets">Chalets</option>
            <option value="Terraced Houses">Terraced Houses</option>
            <option value="Cabins">Cabins</option>
            <option value="Courtyard Houses">Courtyard Houses</option>
            <option value="Villas">Villas</option>
          </select>
        </div>
      </div>

      {/* Post Details Modal */}
      {selectedPost && (
        <div className="detailsContainer">
          <button onClick={closeDetails} className="close-circle">
            <AiFillCloseCircle className="close" />
          </button>
          <img
            className="details-image"
            src={selectedPost.image}
            alt={selectedPost.title}
          />
          <div className="details-title">{selectedPost.title}</div>
          <div className="details-info">
            <div className="details-description">{selectedPost.desc}</div>
            <div className="details-location">{selectedPost.location}</div>
            <div className="details-bedrooms">Bedrooms: {selectedPost.bedrooms}</div>
            <div className="details-type">Type: {selectedPost.propertyType}</div>
            <div className="details-price">${selectedPost.price}</div>
          </div>
        </div>
      )}

      {/* Post Listing */}
      <div className="searchContainer">
        {filteredPosts.map((post) => (
          <div className="searchBox" key={post.id}>
            <div className="searchCardContainer">
              <img
                className="searchDataImage"
                src={post.image}
                alt={post.title}
              />
              <div className="searchDataInfo">
                <div className="searchDataTitle">{post.title}</div>
                <div className="searchInfoBottom">
                  <div className="searchDataPrice">{post.price}$</div>
                  <button
                    className="searchInfoButton"
                    onClick={() => showDetails(post)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;