import React, { useState } from 'react';
import SortHomes from './SortHomes';
import { Link, useNavigate } from 'react-router-dom';
import { formatDateTime } from '../utils/api';
import './HomeList.css';

function HomeList({ homes }) {
    const [sortedHomes, setSortedHomes] = useState([...homes]);
    const navigate = useNavigate();
    const handleSort = ({ criteria, order }) => {
        const sorted = [...sortedHomes].sort((a, b) => {
            if (criteria === 'price') {
                const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
                const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
                return order === 'asc' ? priceA - priceB : priceB - priceA;
            } else if (criteria === 'registered') {
                const dateA = new Date(a.registered).getTime();
                const dateB = new Date(b.registered).getTime();
                return order === 'asc' ? dateA - dateB : dateB - dateA;
            }
            return 0; // Default, no sorting
        });

        setSortedHomes(sorted);
    };
    const handleAddHomeClick = () => {
        navigate('/add'); // Redirect to the "/add" route
    };
    function formatRegistrationDate(dateString) {
        return formatDateTime(dateString);
    }
    // console.log('Homes Prop:', homes);
    // console.log('Sorted Homes:', sortedHomes);
    return (
        <div>
            <div className="home-listings-header">Home Listings</div>
            <div className="button-container">
                <SortHomes onSort={handleSort} />
                <button
                    onClick={handleAddHomeClick}
                    style={{ backgroundColor: 'green', color: '#fff' }} // Change the background color and text color
                >
                    Add Home
                </button>
            </div>
            <div className="homes-container">
                {sortedHomes.map((home) => (
                    <div key={home.id} className="home" data-testid="home">
                        <img
                            src={home.image_url}
                            alt={`Home ${home.id}`}
                            className="home-image"
                        />
                        <div className="text-container">
                            <Link to={`/${home.id}`} className="link-button">View Details</Link>
                            <p>
                                <span className="home-key">Price:</span>
                                <span className="home-value">{home.price}</span>
                            </p>
                            <p>
                                <span className="home-key">Address:</span>
                                <span className="home-value">{home.address}</span>
                            </p>
                            <p>
                                <span className="home-key">Registration Date:</span>
                                <span className="home-value">{formatRegistrationDate(home.registered)}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeList;

