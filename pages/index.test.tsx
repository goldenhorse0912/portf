// AboutSection.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from './index'; // adjust this path as needed

test('renders heading correctly', () => {
    render(<AboutSection />);
    const heading = screen.getByText(/hi, i'm lawrence/i);
    expect(heading).toBeInTheDocument();
});
