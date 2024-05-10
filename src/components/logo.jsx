import React from 'react';

const logo = () => {
  return (
    <div style={{ backgroundColor: '#e7926c', padding: '20px', width: '100%' }}>
      <div style={{ textAlign: 'center' }}>

      <img
          src="images.jpeg" // Update with your logo image path or URL
          alt="Company Logo"
          style={{
            maxWidth: '100px', // Adjust this to control image size
            height: 'auto', // Ensures the aspect ratio is maintained
            marginBottom: '10px', // Adds space between the image and text
          }}
          ></img>
        <h1
          style={{
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontSize: 'clamp(24px, 6vw, 80px)', // Flexible font size
            fontStyle: 'italic', // Italic text
          }}
        >
          Book Binge
        </h1>
      </div>
    </div>
  );
};

export default logo;
