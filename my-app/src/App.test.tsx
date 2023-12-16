import React from 'react';
import {render, screen} from '@testing-library/react';

import {AppWrapper} from "./App/AppWrapper";

test('renders learn react link', () => {
    render(<AppWrapper/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
