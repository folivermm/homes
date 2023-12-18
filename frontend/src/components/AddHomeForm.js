import React, { useState } from 'react';
import { createHome } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './AddHomeForm.css'; // Import your CSS file

function AddHomeForm({ onHomeAdded, realtors }) {
    const navigate = useNavigate();
    const [newHome, setNewHome] = useState({
        price: '',
        image_url: '',
        address: '',
        about: '',
        registered: '',
        realtor_id: '',
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
            // Check if a realtor is selected
            if (!newHome.realtor_id) {
                throw new Error('Realtor must be selected.');
            }

            const createdHome = await createHome(newHome);
            onHomeAdded(createdHome);
            setNewHome({
                price: '',
                image_url: '',
                address: '',
                about: '',
                registered: '',
                realtor_id: '', // Reset realtor_id after successful submission
            });
            navigate('/');
        } catch (error) {
            console.error('Error creating home:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-home-form">
            {/* Apply CSS classes for styling */}
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    value={newHome.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="image_url">Image URL:</label>
                <input
                    type="text"
                    name="image_url"
                    className="form-control"
                    placeholder="Image URL"
                    value={newHome.image_url}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    value={newHome.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="about">About:</label>
                <textarea
                    name="about"
                    className="form-control"
                    placeholder="About"
                    value={newHome.about}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="registered">Registered:</label>
                <input
                    type="text"
                    name="registered"
                    className="form-control"
                    placeholder="Registered"
                    value={newHome.registered}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="realtor_id">Realtor:</label>
                <select
                    id="realtor_id"
                    name="realtor_id"
                    value={newHome.realtor_id}
                    onChange={handleChange}
                    required
                    className="form-control"
                >
                    <option value="">Select a Realtor</option>
                    {realtors.map((realtor) => (
                        <option key={realtor.id} value={realtor.id}>
                            {realtor.first_name} {realtor.last_name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Home
            </button>
        </form>
    );
}

export default AddHomeForm;
