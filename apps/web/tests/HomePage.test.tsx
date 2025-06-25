import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../app/routes/index';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    const heading = screen.getByText(/RELYSIA/i);
    expect(heading).toBeInTheDocument();
  });
}); 