import React, { useState } from 'react';
import '../Styles/upload.css';

const UploadPage = () => {
  const [location, setLocation] = useState('India');
  const locations = ['India', 'USA', 'UK', 'China'];

  const changeLocation = () => {
    const currentIndex = locations.indexOf(location);
    const nextIndex = (currentIndex + 1) % locations.length;
    setLocation(locations[nextIndex]);
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];

    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }

    const validExtensions = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ];

    if (!validExtensions.includes(file.type)) {
      alert('Please upload a valid Excel file.');
      return;
    }

    alert(`File ${file.name} uploaded successfully!`);
  };

  return (
    <div className="container">
      <div className="left-div">
        <div className="header">
          <span className="icon">&#128193;</span>
          <span className="title">Upload File For {location}</span>
          <span className="change-location" onClick={changeLocation}>
            &#8592; Change Location
          </span>
        </div>

        <div className="file-upload">
          <label htmlFor="file">Choose file</label>
          <input
            type="file"
            id="file"
            accept=".xlsx, .xls"
            onChange={uploadFile}
            hidden
          />
        </div>

        <button className="upload-button">Upload Excel</button>
        <a className="download-template" href="#">Download Standard Template Here</a>
      </div>

      <div className="right-div">
        <h3>Instructions</h3>
        <ol>
          <li>Click on the icon to download the template.</li>
          <li>Update the data as per the headers of the template and before uploading, delete the sample entry.</li>
          <li>After the data is uploaded, you will receive an email stating "The Alumni Data is uploaded".</li>
          <li>After receiving the email, click on "Fetch Result" to move to the next screen.</li>
          <li>Select the relevant "Job Family Group" & "Job Family" to send emails to the manager.</li>
          <li>After sharing the email, download the report of the shared email.</li>
          <li>After all the emails are shared, click on "Delete Alumni Uploaded Dump" to clear the records.</li>
        </ol>
      </div>
    </div>
  );
};

export default UploadPage;

/* CSS (App.css) */

