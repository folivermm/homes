import React, { useState } from 'react';
import { createHome } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function AddHomeForm({ onHomeAdded }) {
    const navigate = useNavigate();
    const [newHome, setNewHome] = useState({
        price: '',
        image_url: '',
        address: '',
        about: '',
        registered: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHome((prevHome) => ({
            ...prevHome,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an API request to create a new home
            const createdHome = await createHome(newHome);
            // Call the callback function to notify the parent component of the new home
            onHomeAdded(createdHome);
            // Clear the form
            setNewHome({
                price: '',
                image_url: '',
                address: '',
                about: '',
                registered: '',
            });
            navigate('/');
        } catch (error) {
            console.error('Error creating home:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={newHome.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="image_url">Image URL:</label>
                <input
                    type="text"
                    id="image_url"
                    name="image_url"
                    value={newHome.image_url}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={newHome.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="about">About:</label>
                <textarea
                    id="about"
                    name="about"
                    value={newHome.about}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="registered">Registered:</label>
                <input
                    type="text"
                    id="registered"
                    name="registered"
                    value={newHome.registered}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Home</button>
        </form>
    );
}

export default AddHomeForm;
