import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Seller = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookName: '',
    lendingDays: '',
    bookCondition: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#e7926c' }}>
      <div style={{ width: '50%' }}>
        {/* Title for the selling page */}
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1
            style={{
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              fontSize: 'clamp(24px, 6vw, 80px)', // Flexible font size
              fontStyle: 'italic', // Italic text
            }}
          >
            Selling Page
          </h1>
        </div>

        {/* Form for input fields */}
        <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
          <form>
            <div style={{ padding: '10px' }}>
              <label className="fw-bold fs-1">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ borderRadius: '10px', height: '60px' }}
              />
            </div>

            <div style={{ padding: '10px' }}>
              <label className="fw-bold fs-1">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{ borderRadius: '10px', height: '60px' }}
              />
            </div>

            <div style={{ padding: '10px' }}>
              <label className="fw-bold fs-1">Book Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Book Name"
                name="bookName"
                value={formData.bookName}
                onChange={handleInputChange}
                style={{ borderRadius: '10px', height: '60px' }}
              />
            </div>

            <div style={{ padding: '10px' }}>
              <label className="fw-bold fs-1">Lending Days</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Lending Days"
                name="lendingDays"
                value={formData.lendingDays}
                onChange={handleInputChange}
                style={{ borderRadius: '10px', height: '60px' }}
              />
            </div>

            <div style={{ padding: '10px' }}>
              <label className="fw-bold fs-1">Book Condition</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Book Condition"
                name="bookCondition"
                value={formData.bookCondition}
                onChange={handleInputChange}
                style={{ borderRadius: '10px', height: '60px' }}
              />
            </div>

            <div style={{ padding: '10px' }}>
              <label className="fw-bold fs-1">Upload a File</label>
              <input
                type="file"
                className="form-control-file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
                style={{ borderRadius: '10px' }} // Adjusted style
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seller;
