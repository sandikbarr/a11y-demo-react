import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('says hello', () => {
    // arrange
    render(<App />, { wrapper: BrowserRouter });
    // act
    const hello = screen.getByText('hello');
    // assert
    expect(hello).toBeInTheDocument();
  });
});
