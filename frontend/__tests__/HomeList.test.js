import React from 'react';
import { render } from '@testing-library/react';
import HomeList from '../src/components/HomeList';
import homesData from '../data/homes.json';

test('displays homes with image, price, address, and registration date', () => {
    const { getAllByTestId } = render(<HomeList homes={homesData} />);

    // Get all the elements with data-testid attributes
    const homeElements = getAllByTestId('home');

    // Iterate through each home element and assert the presence and content of required information
    homeElements.forEach((homeElement, index) => {
        const home = homesData[index]; // Get the corresponding data sample data
        const imageElement = homeElement.querySelector('[data-testid="home-image"]');
        const priceElement = homeElement.querySelector('[data-testid="home-price"]');
        const addressElement = homeElement.querySelector('[data-testid="home-address"]');
        const registrationDateElement = homeElement.querySelector('[data-testid="home-registration-date"]');

        // Assert that the required information is displayed for each home
        expect(imageElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
        expect(addressElement).toBeInTheDocument();
        expect(registrationDateElement).toBeInTheDocument();

        // Check the content of these elements
        expect(imageElement).toHaveAttribute('src', home.image_url);
        expect(priceElement.textContent).toBe(`Price: ${home.price}`);
        expect(addressElement.textContent).toBe(`Address: ${home.address}`);
        expect(registrationDateElement.textContent).toBe(`Registration Date: ${home.registered}`);
    });
});
