import  { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="body1">
    <div className="container1">
      <div className="form-container8">
        <div className="left-container">
          <div className="left-inner-container">
            <h2>Let's Chat</h2>
            <p>Whether you have a question, want to start a project or simply want to connect.</p>
            <br />
            <p>Feel free to send me a message in the contact form</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-inner-container">
            <form onSubmit={handleSubmit}>
              <h2 className="lg-view">Contact</h2>
              <h2 className="sm-view">Let's Chat</h2>
              <p>* Required</p>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <input
              className='i1' 
                type="text" 
                placeholder="Name *" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
              <input className="i1"type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} 
              />
              <input className="i1"type="text" placeholder="Company" name="company" value={formData.company} onChange={handleChange} 
              />
              <input className="i1"type="phone" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} 
              />
              <textarea className="i1"rows="4" placeholder="Message" name="message" value={formData.message} onChange={handleChange}
              ></textarea>
              <button type="submit" className='b3'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    
  );
};

export default Contacts;
