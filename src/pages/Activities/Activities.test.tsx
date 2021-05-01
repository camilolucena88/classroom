import React from 'react';
import {render, screen} from '@testing-library/react';
import Activities from './Activities';

test('Render Activities', () => {
    render(<Activities/>);
    const linkElement = screen.getByText(/Activities/i);
    expect(linkElement).toBeInTheDocument();
});
