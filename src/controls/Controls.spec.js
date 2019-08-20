import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
    it('should display unlock gate and disable open button if locked is true', () => {
        const { getByText } = render(<Controls locked />);
        getByText(/unlock gate/i);
        const openButton = getByText(/close gate/i);
        expect(openButton).toBeDisabled();
    });

    it('should display lock gate if locked is false', () => {
        const { getByText } = render(<Controls locked={false} />);
        getByText(/lock gate/i);
    });

    it('should display open gate if the closed is true', () => {
        const { getByText } = render(<Controls closed />);
        getByText(/open gate/i);
    });

    it('should display close gate and disable lock button if closed is false', () => {
        const { getByText } = render(<Controls closed={false} />);
        getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);
        expect(lockButton).toBeDisabled();
    });
    it('should fire click handler functions', () => {
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();

        const { getByText } = render(
            <Controls
                closed
                locked={false}
                toggleLocked={toggleLocked}
                toggleClosed={toggleClosed}
            />
        );
        const openButton = getByText(/open gate/i);
        const lockButton = getByText(/lock gate/i);
        fireEvent.click(openButton);
        fireEvent.click(lockButton);
        expect(toggleLocked).toHaveBeenCalledTimes(1);
        expect(toggleClosed).toHaveBeenCalledTimes(1);
    });
});