import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from './Home';

test('Render Home Page Title', () => {
    render(<Home/>);
    const linkElement = screen.getByText(/Classroom/i);
    expect(linkElement).toBeInTheDocument();
})