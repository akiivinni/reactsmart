import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationDropdown = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace fetch with hardcoded JSON data
    try {
      const data = {
        countries: [
          { id: 1, name: 'India' },
          { id: 2, name: 'USA' },
          { id: 3, name: 'UK' },
          { id: 4, name: 'China' },
        ],
      };

      setLocations(data.countries || []);
      setLoading(false);
    } catch (err) {
      setError('Error loading locations');
      setLoading(false);
    }
  }, []);

  const handleSelection = (e) => {
    const selectedLocation = e.target.value;
    if (selectedLocation) {
      navigate('/admin/upload'); // Redirect to the upload page when a country is selected
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="location">Select Location:</label>
      <select id="location" name="location" style={styles.select} onChange={handleSelection}>
        {loading ? (
          <option value="">Loading locations...</option>
        ) : error ? (
          <option value="">{error}</option>
        ) : (
          <>
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
    width: '300px',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default LocationDropdown;
