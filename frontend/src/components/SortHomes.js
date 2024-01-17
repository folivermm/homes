import React, { useState } from 'react';

function SortHomes({ onSort }) {
    const [selectedOption, setSelectedOption] = useState('price-asc');

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        const [criteria, order] = selectedValue.split('-');
        onSort({ criteria, order });
    };

    return (
        <div>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={selectedOption} onChange={handleSortChange}>
                <option value="price-asc">Price (Min)</option>
                <option value="price-desc">Price (Max)</option>
                <option value="registered-asc">Registration Date (Oldest)</option>
                <option value="registered-desc">Registration Date (Most Recent)</option>
            </select>
        </div>
    );
}

export default SortHomes;
