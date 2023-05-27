import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test("should have 'Footer' text", () => {
    render(<Footer />);

    const ele = screen.getByText('Footer');
    expect(ele).toBeInTheDocument();
  });
});
