// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomeList from './components/HomeList';
// import HomeDetails from './components/HomeDetails';
// import { listHomes } from './utils/api';
// import { getHomeWithRealtor } from './utils/api'

// function App() {
//   const [homes, setHomes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchHomes() {
//       try {
//         const fetchedHomes = await listHomes();
//         setHomes(fetchedHomes);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching homes:', error);
//         setError(error);
//         setLoading(false);
//       }
//     }

//     fetchHomes();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               loading ? (
//                 <div>Loading...</div>
//               ) : error ? (
//                 <div>Error: {error.message}</div>
//               ) : (
//                 <HomeList homes={homes} />
//               )
//             }
//           />
//           <Route path="/:id" element={<HomeDetails getHome={getHomeWithRealtor} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeList from './components/HomeList';
import HomeDetails from './components/HomeDetails';
import AddHomeForm from './components/AddHomeForm'; // Import the AddHomeForm component
import { listHomes, getHomeWithRealtor } from './utils/api';

function App() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHomes() {
      try {
        const fetchedHomes = await listHomes();
        setHomes(fetchedHomes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching homes:', error);
        setError(error);
        setLoading(false);
      }
    }

    fetchHomes();
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
            element={
              loading ? (
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
          <Route path="/:id" element={<HomeDetails getHome={getHomeWithRealtor} />} />
          <Route path="/add" element={<AddHomeForm onHomeAdded={handleHomeAdded} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
