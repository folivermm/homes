import React, { useState } from 'react';
import SortHomes from './SortHomes';
import { Link, useNavigate } from 'react-router-dom';
import { formatDateTime } from '../utils/api';

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
            <SortHomes onSort={handleSort} />
            <button onClick={handleAddHomeClick}>Add Home</button>
            {sortedHomes.map((home) => (
                <div key={home.id} data-testid="home" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                    <img
                        src={home.image_url}
                        alt={`Home ${home.id}`}
                        data-testid="home-image"
                        style={{ maxWidth: '300px', maxHeight: '150px' }}
                    />
                    <Link to={`/${home.id}`}>View Details</Link>
                    <p data-testid="home-price" style={{ margin: '0' }}>Price: {home.price}</p>
                    <p data-testid="home-address" style={{ margin: '0' }}>Address: {home.address}</p>
                    <p data-testid="home-registered" style={{ margin: '0' }}>Registration Date: {formatRegistrationDate(home.registered)}</p>
                </div>
            ))}
        </div>
    );
}

export default HomeList;

