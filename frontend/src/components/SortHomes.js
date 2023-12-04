import React from 'react';

function SortHomes({ onSort }) {
    const handleSort = (criteria, order) => {
        onSort({ criteria, order });
    };

    return (
        <div>
            <button onClick={() => handleSort('price', 'asc')}>Sort by Price (Min)</button>
            <button onClick={() => handleSort('price', 'desc')}>Sort by Price (Max)</button>
            <button onClick={() => handleSort('registered', 'asc')}>Sort by Registration Date (Oldest)</button>
            <button onClick={() => handleSort('registered', 'desc')}>Sort by Registration Date (Most Recent)</button>
        </div>
    );
}

export default SortHomes;


// // src/components/SortHomes.js
// import React from 'react';

// function SortHomes({ sortByPrice, sortByDate }) {
//     return (
//         <div>
//             <button onClick={sortByPrice}>Sort by Price</button>
//             <button onClick={sortByDate}>Sort by Date</button>
//         </div>
//     );
// }

// export default SortHomes;
// SortHomes.js (or wherever the buttons are defined)
// import React from 'react';

// function SortHomes({ sortByPrice, sortByDate }) {
//     return (
//         <div>
//             <button onClick={sortByPrice}>Sort by Price</button>
//             <button onClick={sortByDate}>Sort by Date</button>
//         </div>
//     );
// }

// export default SortHomes;
