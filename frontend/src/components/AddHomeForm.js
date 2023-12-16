// import React, { useState } from 'react';
// import { createHome } from '../utils/api';
// import { useNavigate } from 'react-router-dom';

// function AddHomeForm({ onHomeAdded }) {
//     const navigate = useNavigate();
//     const [newHome, setNewHome] = useState({
//         price: '',
//         image_url: '',
//         address: '',
//         about: '',
//         registered: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewHome((prevHome) => ({
//             ...prevHome,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Make an API request to create a new home
//             const createdHome = await createHome(newHome);
//             // Call the callback function to notify the parent component of the new home
//             onHomeAdded(createdHome);
//             // Clear the form
//             setNewHome({
//                 price: '',
//                 image_url: '',
//                 address: '',
//                 about: '',
//                 registered: '',
//             });
//             navigate('/');
//         } catch (error) {
//             console.error('Error creating home:', error);
//         }
//     };
import React, { useState } from 'react';
import { createHome } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function AddHomeForm({ onHomeAdded, realtors }) {
    const navigate = useNavigate();
    const [newHome, setNewHome] = useState({
        price: '',
        image_url: '',
        address: '',
        about: '',
        registered: '',
        realtor_id: '', // Initialize realtor_id as an empty string
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
            <div>
                <label htmlFor="realtor_id">Realtor:</label>
                <select
                    id="realtor_id"
                    name="realtor_id"
                    value={newHome.realtor_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a Realtor</option>
                    {realtors.map((realtor) => (
                        <option key={realtor.id} value={realtor.id}>
                            {console.log(realtor.id)}
                            {realtor.id} {realtor.first_name} {realtor.last_name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Home</button>
        </form>
    );
}


export default AddHomeForm;

