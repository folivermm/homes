const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * @param {string} url - The URL for the request.
 * @param {object} options - Any options for the fetch.
 * @param {any} onCancel - Value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>} - A promise that resolves to the `json` data or an error.
 *                               If the response is not in the 200 - 399 range, the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return null; // No content
        }

        const payload = await response.json();

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }

        return payload.data;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }

        return Promise.resolve(onCancel);
    }
}

// utils/formatDate.js
export function formatDateTime(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}


/**
 * GET request to retrieve a list of homes
 * @returns {Promise<Array>} - A promise that resolves to an array of home objects.
 */
export function listHomes() {
    const url = `${API_BASE_URL}/homes`;
    return fetchJson(url, { headers });
}


export async function getHomeWithRealtor(id) {
    try {
        const homeUrl = `${API_BASE_URL}/homes/${id}`;
        // Fetch the home data
        const homeData = await fetchJson(homeUrl, { headers });
        // Return the home data directly
        return homeData;
    } catch (error) {
        console.error('Error fetching home with realtor:', error);
        throw error;
    }
}


/**
 * POST request to create a new home
 * @param {object} home - The home object to create.
 * @returns {Promise<object>} - A promise that resolves to the created home object.
 */
export function createHome(home) {
    const url = `${API_BASE_URL}/homes`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(home),
    };
    return fetchJson(url, options);
}

/**
 * GET request to retrieve a list of realtors
 * @returns {Promise<Array>} - A promise that resolves to an array of realtor objects.
 */
export function listRealtors() {
    const url = `${API_BASE_URL}/realtors`;
    return fetchJson(url, { headers });
}

/**
 * PUT request to update a home by ID
 * @param {string} id - The ID of the home to update.
 * @param {object} home - The updated home object.
 * @returns {Promise<object>} - A promise that resolves to the updated home object.
 */
export function updateHome(id, home) {
    const url = `${API_BASE_URL}/homes/${id}`;
    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify(home),
    };

    return fetchJson(url, options)
        .then((updatedHome) => {
            // You can handle the updated home data here
            console.log('Updated Home:', updatedHome);
            return updatedHome;
        })
        .catch((error) => {
            // Handle any errors that occur during the update process
            console.error('Error updating home:', error);
            throw error;
        });
}

// /**
//  * DELETE request to delete a home by ID
//  * @param {string} id - The ID of the home to delete.
//  * @returns {Promise} - A promise that resolves when the deletion is successful.
//  */
// export function deleteHome(id) {
//     const url = `${API_BASE_URL}/homes/${id}`;
//     const options = {
//         method: "DELETE",
//         headers,
//     };
//     return fetchJson(url, options);
// }
