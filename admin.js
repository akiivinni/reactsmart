import React, { useState } from 'react';
import '../Styles/admin.css';
import Layout from '../Components/layout';
import LocationDropdown from '../Components/dropdown';



const AdminPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const[dropdown,setDropdown]=useState(false);
  
  
 

  const handleAgree = () => {
    setShowPopup(false); 
    setDropdown(true);
  };

  const handleDisagree = () => {
    alert('Please click on Agree button'); 
  };

  

  return (
    <>
      <Layout>
        <div>
          {showPopup && (
            <div className="modal-overlay">
              <div className="modal">
                <h2 className="modal-heading">DATA PRIVACY NOTICE</h2>
                <div className="underline"></div>
                <p className="modal-text">
                  In the process of working on <span className="highlight">Smart</span>, you will have access to personal identification information about employees' personal data, which should solely be used for <span className="highlight">Smart Email Notification</span>.
                </p>
                <div className="underline"></div>
                <div className="modal-buttons">
                  <button onClick={handleAgree} className="modal-button agree">Agree</button>
                  <button onClick={handleDisagree} className="modal-button disagree">Disagree</button>
                </div>
              </div>
            </div>
          )}
          
        
         {dropdown && <LocationDropdown></LocationDropdown>}
         
          
        </div>
      </Layout>
    </>
  );
};

export default AdminPage;