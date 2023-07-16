import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('says hello', () => {
    // arrange
    render(<App />);
    // act
    const hello = screen.getByText('hello');
    // assert
    expect(hello).toBeInTheDocument();
  });
});
