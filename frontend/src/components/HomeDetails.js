import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './HomeDetails.css';


function HomeDetails({ getHome }) {
    const { id } = useParams();
    const [homeDetails, setHomeDetails] = useState(null);

    useEffect(() => {
        // Fetch the home data along with its associated realtor
        async function fetchHomeWithRealtor() {
            try {
                const homeWithRealtor = await getHome(id);
                const registeredDate = new Date(homeWithRealtor.registered).toLocaleString();
                homeWithRealtor.registered = registeredDate;
                console.log(homeWithRealtor)
                setHomeDetails(homeWithRealtor);
            } catch (error) {
                console.error('Error fetching home with realtor:', error);
            }
        }

        fetchHomeWithRealtor();
    }, [getHome, id]);


    // Render loading state while fetching data
    if (!homeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-details-container"> {/* Apply the CSS class */}
            <h2 className="home-details-title">Home Details</h2>
            <img
                src={homeDetails.image_url}
                alt={homeDetails.address}
                className="home-details-image"
            />
            <p className="home-details-info">Price: {homeDetails.price}</p>
            <p className="home-details-info">Address: {homeDetails.address}</p>
            <p className="home-details-info">Registered: {homeDetails.registered}</p>
            <p className="home-details-info">About: {homeDetails.about}</p>
            <p className="home-details-info">Realtor: {homeDetails.first_name} {homeDetails.last_name}</p>
            <p className="home-details-info">Email: {homeDetails.email}</p>
            <p className="home-details-info">Phone: {homeDetails.phone}</p>
            <Link to="/" className="home-details-link">Back to Home</Link>
        </div>
    );
}

export default HomeDetails;