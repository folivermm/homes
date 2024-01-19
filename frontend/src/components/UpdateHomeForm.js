import React, { useState, useEffect } from 'react';
import { updateHome } from '../utils/api';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteHome from './DeleteHome';
import './UpdateHomeForm.css'

function UpdateHomeForm({ homes, realtors }) {
    const { id } = useParams();
    const [updatedHome, setUpdatedHome] = useState({});
    console.log('Homes prop inside UpdateHomeForm:', homes);
    const navigate = useNavigate();


    // Find the specific home to update based on the id from the route parameters
    useEffect(() => {
        if (Array.isArray(homes)) {
            console.log('Homes prop inside UpdateHomeForm:', homes)
            const foundHome = homes.find((home) => home.id === parseInt(id));
            console.log('After find:', foundHome);
            if (foundHome) {
                console.log('Found Home:', foundHome)
                setUpdatedHome(foundHome);
                console.log('Updated Home:', updatedHome); // Log the updatedHome after state update
            }
        }
    }, [homes, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedHome((prevHome) => ({
            ...prevHome,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateHome(id, updatedHome);
            // console.log('Home updated successfully:', update); const update = 
            navigate('/');
            setTimeout(() => {
                window.location.reload();
            }, 0);
        } catch (error) {
            console.error('Error updating home:', error);
        }
    };


    const handleGoToHomePage = () => {
        navigate('/'); // Redirect to the home page
    };

    return (
        <form onSubmit={handleSubmit} className="update-home-form">
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    value={updatedHome.price}
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
                    value={updatedHome.image_url}
                    onChange={handleChange}
                    required
                />
                <img src={updatedHome.image_url} alt="Home Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    value={updatedHome.address}
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
                    value={updatedHome.about}
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
                    value={updatedHome.registered}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="realtor_id">Realtor:</label>
                <select
                    id="realtor_id"
                    name="realtor_id"
                    value={updatedHome.realtor_id}
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
            <div className="button-container">
                <button onClick={handleGoToHomePage} className="btn btn-primary">
                    Return Home
                </button>
                <button type="submit" className="btn btn-primary">
                    Update Home
                </button>
                <DeleteHome id={id} onDelete={() => navigate('/')} className="btn-red" />
            </div>
        </form>
    );
}

export default UpdateHomeForm;
