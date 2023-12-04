import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortHomes from '../src/components/SortHomes';

test('sorts homes by price in ascending order', () => {
    const handleSort = jest.fn(); // Mock the handleSort function
    const { getByTestId } = render(<SortHomes onSort={handleSort} />);

    // Click the "Sort by Price (Low to High)" button
    const ascendingButton = getByTestId('sort-ascending-price');
    fireEvent.click(ascendingButton);

    // Assert that the handleSort function was called with the correct criteria and order
    expect(handleSort).toHaveBeenCalledWith({ criteria: 'price', order: 'asc' });
});

test('sorts homes by price in descending order', () => {
    const handleSort = jest.fn(); // Mock the handleSort function
    const { getByTestId } = render(<SortHomes onSort={handleSort} />);

    // Click the "Sort by Price (High to Low)" button
    const descendingButton = getByTestId('sort-descending-price');
    fireEvent.click(descendingButton);

    // Assert that the handleSort function was called with the correct criteria and order
    expect(handleSort).toHaveBeenCalledWith({ criteria: 'price', order: 'desc' });
});

test('sorts homes by registration date in ascending order', () => {
    const handleSort = jest.fn(); // Mock the handleSort function
    const { getByTestId } = render(<SortHomes onSort={handleSort} />);

    // Click the "Sort by Registration Date (Oldest to Newest)" button
    const ascendingButton = getByTestId('sort-ascending-date');
    fireEvent.click(ascendingButton);

    // Assert that the handleSort function was called with the correct criteria and order
    expect(handleSort).toHaveBeenCalledWith({ criteria: 'registered', order: 'asc' });
});

test('sorts homes by registration date in descending order', () => {
    const handleSort = jest.fn(); // Mock the handleSort function
    const { getByTestId } = render(<SortHomes onSort={handleSort} />);

    // Click the "Sort by Registration Date (Newest to Oldest)" button
    const descendingButton = getByTestId('sort-descending-date');
    fireEvent.click(descendingButton);

    // Assert that the handleSort function was called with the correct criteria and order
    expect(handleSort).toHaveBeenCalledWith({ criteria: 'registered', order: 'desc' });
});
