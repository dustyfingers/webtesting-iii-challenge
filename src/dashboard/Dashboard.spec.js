import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {

    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render controls and display', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/unlocked/i);
        getByText(/open/i);
        getByText(/lock Gate/i);
        getByText(/close Gate/i);
    });

});