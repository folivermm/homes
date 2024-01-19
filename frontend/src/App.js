import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeList from './components/HomeList';
import HomeDetails from './components/HomeDetails';
import AddHomeForm from './components/AddHomeForm';
import UpdateHomeForm from './components/UpdateHomeForm';
import { listHomes, listRealtors, getHomeWithRealtor } from './utils/api';

function App() {
  const [homes, setHomes] = useState([]);
  const [realtors, setRealtors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedHomes = await listHomes();
        const fetchedRealtors = await listRealtors(); // Fetch the list of realtors
        setHomes(fetchedHomes);
        setRealtors(fetchedRealtors); // Set the list of realtors in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleHomeAdded = (newHome) => {
    // Update the list of homes with the new home
    setHomes((prevHomes) => [...prevHomes, newHome]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error.message}</div>
            ) : (
              <>
                <HomeList homes={homes} onHomeAdded={handleHomeAdded} />
              </>
            )
            }
          />
          <Route
            path="/:id"
            element={<HomeDetails getHome={getHomeWithRealtor} />}
          />
          <Route
            path="/add"
            element={<AddHomeForm onHomeAdded={handleHomeAdded} realtors={realtors} />}
          />
          <Route
            path="/updateHome/:id"
            element={<UpdateHomeForm homes={homes} realtors={realtors} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
