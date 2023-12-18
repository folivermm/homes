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