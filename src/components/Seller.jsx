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
    bookCondition: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const allFieldsFilled = Object.values(formData).some(value => typeof value === 'string' && value.trim() !== '');





  console.log("allFieldsFilled:", allFieldsFilled);


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (Object.values(formData).every(value => value.trim() !== '')) {
  //     setShowAlert(true);
  //   }
  // };

  return (
    <center>
      <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
        <div className='container-lg text-decoration-underline bg-white'>
        <form>
          <h1 style={{fontSize:'5rem',padding:'100px'}}>Pls enter the details</h1>
        

        {/* <div className="row mt-3 ">
          <div className="col-md-6"> */}
            <div className="" style={{padding:'40px'}}>
              <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                <label className="fw-bold fs-1" style={{padding:'15px'}}>Name</label>
                <input
                  style={{ borderRadius: '10px', width: '100%', height: '60px', padding: '12px' }}
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
            </div>



          <div className="" style={{padding:'40px'}}>
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center', padding: '30px 10px 30px' }}>
              <label className="fw-bold fs-1" >Phone</label>
              <input
                style={{ width: '100%', borderRadius: '10px', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
          </div>


          <div className="" style={{padding:'40px'}}>
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label className="fw-bold fs-1">Book Name</label>
              <input
                style={{ width: '100%', borderRadius: '10px', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter the Book Name"
                value={formData.bookName}
                onChange={handleInputChange}
                name="bookName"
              />
            </div>
          </div>

          <div className="" style={{padding:'40px'}}>
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label className="fw-bold fs-1">Lending Days</label>
              <input
                style={{ width: '100%', borderRadius: '10px', height: '60px' }}
                type="text"
                className="form-control"
                placeholder="Enter the Lending Days"
                value={formData.lendingDays}
                onChange={handleInputChange}
                name="lendingDays"
              />
            </div>
          </div>


          <div className="" style={{padding:'40px'}}>
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
              <label className="fw-bold fs-1">Book Condition</label>
              <input
               style={{width:'100%'}}
                type="text"
                className="form-control"
                placeholder="Enter the Book Condition"
                value={formData.bookCondition}
                onChange={handleInputChange}
                name="bookCondition"
              />
            </div>
          </div>

          <div className="" style={{padding:'40px'}}>
            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center', padding: '30px 10px 30px' }}>
              <label className="fw-bold fs-1 p-">Upload a File</label>
              <input
              style={{gap:'20px'}}
                type="file"
                className="form-control-file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
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

      
      
      </form>
      </div>
      </div>
    </center>
  );
};

export default Seller;
