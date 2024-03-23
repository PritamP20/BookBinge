import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Seller = () => {

  // const[name,setName]=useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [bookName, setBookName] = useState('');
  // const [lendingDays, setLendingDays] = useState('');
  // const [bookCondition, setBookCondition] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookName: '',
    lendingDays: '',
    bookCondition: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const allFieldsFilled = Object.values(formData).some(value => value.trim() !== '');




  console.log("allFieldsFilled:", allFieldsFilled);


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (Object.values(formData).every(value => value.trim() !== '')) {
  //     setShowAlert(true);
  //   }
  // };



  return (
    <center>
      <div className="container mt-5">        <div style={{ backgroundColor: 'orange', height: '40px' }}>
        <h1>Pls enter the details</h1>
      </div>

        <div className="container mt-4" style={{ padding: '30px 10px 30px' }}>
          <div className="row">
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '20px' }}>Name</label>
              <input
                style={{ borderRadius: '10px', width: '50%', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>



          <div className="row mt-3">
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center', padding: '30px 10px 30px' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '20px' }}>Phone</label>
              <input
                style={{ width: '50%', borderRadius: '10px', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '20px', display: 'inline-block' }}>Book Name</label>
              <input
                style={{ width: 'calc(50% - 24px)', borderRadius: '10px', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter the Book Name"
                value={formData.bookName}
                onChange={handleInputChange}
                name="bookName"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '20px', display: 'inline-block' }}>Lending Days</label>
              <input
                style={{ width: 'calc(50% - 24px)', borderRadius: '10px', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter the Lending Days"
                value={formData.lendingDays}
                onChange={handleInputChange}
                name="lendingDays"
              />
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '20px', display: 'inline-block' }}>Book Condition</label>
              <input
                style={{ borderRadius: '10px', width: '50%', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter the Book Condition"
                value={formData.bookCondition}
                onChange={handleInputChange}
                name="bookCondition"
              />
            </div>
          </div>


          {allFieldsFilled && (
            <div className="row mt-3">
              <div className="col-md-6" style={{ padding: '30px 10px 30px' }}>
                <div className="alert alert-danger" role="alert" style={{ backgroundColor: 'red', fontWeight: 'bold', fontSize: '35px' }}>
                  You will be paid 10 rupees
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </center>
  );
};

export default Seller;
