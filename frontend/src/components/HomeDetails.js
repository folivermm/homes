import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


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
        <div>
            <h2>Home Details</h2>
            {/* <pre>{homeDetails}</pre> */}
            {/* Render home and realtor details using homeDetails */}
            <img
                src={homeDetails.image_url}
                alt={homeDetails.address}
                style={{ width: '500px', height: '250px' }}
            />
            <p>Price: {homeDetails.price}</p>
            <p>Address: {homeDetails.address}</p>
            <p>Registered: {homeDetails.registered}</p>
            <p>About: {homeDetails.about}</p>
            <p>Realtor: {homeDetails.first_name} {homeDetails.last_name}</p>
            <p>Email: {homeDetails.email}</p>
            <p>Phone: {homeDetails.phone}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default HomeDetails;












// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// function HomeDetails({ getHome }) {
//     const { id } = useParams();
//     const [homeDetails, setHomeDetails] = useState(null);

//     useEffect(() => {
//         // Fetch the home data along with its associated realtor
//         async function fetchHomeWithRealtor() {
//             try {
//                 const homeWithRealtor = await getHome(id);
//                 const registeredDate = new Date(homeWithRealtor.registered).toLocaleString();
//                 homeWithRealtor.registered = registeredDate;
//                 setHomeDetails(homeWithRealtor);
//             } catch (error) {
//                 console.error('Error fetching home with realtor:', error);
//             }
//         }

//         fetchHomeWithRealtor();
//     }, [getHome, id]);

//     // Render loading state while fetching data
//     if (!homeDetails) {
//         return <div>Loading...</div>;
//     }

//     // Render home and realtor details when data is available
//     return (
//         <div>
//             <h2>Home Details</h2>
//             <img
//                 src={homeDetails.image_url}
//                 alt={homeDetails.address}
//                 style={{ width: '500px', height: '250px' }}
//             />
//             <p>Price: {homeDetails.price}</p>
//             <p>Address: {homeDetails.address}</p>
//             <p>Registered: {homeDetails.registered}</p>
//             <p>About: {homeDetails.about}</p>
//             <p>Realtor: {homeDetails.realtor_first_name} {homeDetails.realtor_last_name}</p>
//             <p>Email: {homeDetails.realtor_email}</p>
//             <p>Phone: {homeDetails.realtor_phone}</p>
//             <p>Company: {homeDetails.realtor_company}</p>
//             <Link to="/">Back to Home</Link>
//         </div>
//     );
// }

// export default HomeDetails;