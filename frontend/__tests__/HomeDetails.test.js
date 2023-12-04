import React from 'react';
import { render } from '@testing-library/react';
import HomeDetails from '../src/components/HomeDetails';

const sampleHome = {
    id: '5ec54c30978ba340e7d36de2',
    price: '$267,663.78',
    image_url: 'http://placehold.it/2000x1000',
    realtor: {
        image_url: 'http://placehold.it/32x32',
        first: 'Romero',
        last: 'Soto',
        company: 'JASPER',
        email: 'romero.soto@jasper.net',
        phone: '+1 (963) 406-2309'
    },
    address: '839 Huron Street, Catharine, Pennsylvania, 47153',
    about:
        'Non pariatur duis enim eu amet et Lorem proident dolore nulla. Dolor laborum reprehenderit ut enim laborum dolor. Consequat consequat eiusmod voluptate excepteur officia aliqua nostrud. Proident pariatur consequat irure in occaecat velit veniam duis exercitation. Est reprehenderit et aliquip ut. Lorem ullamco amet proident aliqua ad consequat tempor in labore in excepteur sit aute cillum.',
    registered: 'Friday, May 25, 2018 10:19 PM'
};

test('displays home details', () => {
    const { getByText, getByAltText } = render(<HomeDetails home={sampleHome} />);

    // Check if home details are displayed
    expect(getByText('Home Details')).toBeInTheDocument();
    expect(getByAltText('Home 5ec54c30978ba340e7d36de2')).toBeInTheDocument();
    expect(getByText('Price: $267,663.78')).toBeInTheDocument();
    expect(getByText('Address: 839 Huron Street, Catharine, Pennsylvania, 47153')).toBeInTheDocument();
    expect(getByText('Registration Date: Friday, May 25, 2018 10:19 PM')).toBeInTheDocument();
    expect(getByText('Real Estate Agent:')).toBeInTheDocument();
    expect(getByAltText('Agent Romero')).toBeInTheDocument();
    expect(getByText('Name: Romero Soto')).toBeInTheDocument();
    expect(getByText('Company: JASPER')).toBeInTheDocument();
    expect(getByText('Email: romero.soto@jasper.net')).toBeInTheDocument();
    expect(getByText('Phone: +1 (963) 406-2309')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText(sampleHome.about)).toBeInTheDocument();
});
