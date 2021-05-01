import React from 'react';
import {render, screen} from '@testing-library/react';
import Videos from './Videos';

test('Render Videos', () => {
    render(<Videos/>);
    const linkElement = screen.getByText(/Videos/i);
    expect(linkElement).toBeInTheDocument();
});
