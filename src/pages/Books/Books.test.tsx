import React from 'react';
import {render, screen} from '@testing-library/react';
import Books from './Books';

test('Render Books', () => {
    render(<Books/>);
    const linkElement = screen.getByText(/Books/i);
    expect(linkElement).toBeInTheDocument();
});
