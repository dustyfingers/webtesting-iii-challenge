import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';


describe('<Display />', () => {

    it('should default to open and unlocked', () => {
        const { getByText } = render(<Display />);
        const lockPanel = getByText(/unlocked/i);
        const doorPanel = getByText(/open/i);
        expect(lockPanel).toHaveClass('led green-led');
        expect(doorPanel).toHaveClass('led green-led');
    });

    it('should display gate as closed and door as locked if passed down as props', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        const lockPanel = getByText(/locked/i);
        const doorPanel = getByText(/closed/i);
        expect(lockPanel).toHaveClass('led red-led');
        expect(doorPanel).toHaveClass('led red-led');
    });

});