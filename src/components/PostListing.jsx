import React, { useState } from 'react';
import './PostListing.css';

function PostListing({ addPost }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    location: "",
    price: "",
    image: "",
    bedrooms: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      title: "",
      desc: "",
      location: "",
      price: "",
      image: "",
      bedrooms: "",
      propertyType: "",
    });
  };

  return (
    <div className="postListingMain">
      <div className="postListingMainTitle">Post Listing</div>
      <div className="postListingContainer">
        <div className="postListingForm">
          <div className="postListingInputs">
            <form onSubmit={handleSubmit}>
              <input
                required
                className="postListingTitle"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
              <br />
              <input
                required
                className="postListingDescription"
                name="desc"
                placeholder="Description"
                value={formData.desc}
                onChange={handleChange}
              />
              <br />
              <input
                required
                className="postListingLocation"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
              <br />
              <input
                required
                className="postListingPrice"
                name="price"
                placeholder="Price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
              <br />
              <select
                required
                className="postListingBedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Number of Bedrooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <br />
              <select
                required
                className="postListingPropertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Property Type
                </option>
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
              <br />
              <input
                required
                className="postListingImage"
                name="image"
                placeholder="Image"
                type="file"
                onChange={handleChange}
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    marginTop: '10px'
                  }}
                />
              )}
              <br />
              <button className="postListingButton" type="submit">
                Post
              </button>
            </form>
          </div>
        </div>

        <div className="postListingInfo">
          <div className="postListingInfoText">
            <ul>
              <li><b>Title:</b> Add a title for your post (e.g., Beachfront Villa)</li>
            </ul>
            <ul>
              <li><b>Description:</b> Provide details about your property</li>
            </ul>
            <ul>
              <li><b>Location:</b> Specify the address or area (e.g., Beirut)</li>
            </ul>
            <ul>
              <li><b>Price:</b> Mention the price in USD</li>
            </ul>
            <ul>
              <li><b>Bedrooms:</b> Select the number of bedrooms</li>
            </ul>
            <ul>
              <li><b>Property Type:</b> Choose a type (e.g., Villas, Chalets)</li>
            </ul>
            <ul>
              <li><b>Image:</b> Upload one image of your property</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostListing;