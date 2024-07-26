import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, expect, test } from 'vitest';
import App from './App';

vi.mock('./pages/home/pokedex.jsx', () => ({
    Pokedex: () => <div>Pokedex Page</div>
}))

vi.mock('./pages/home/pokemon-details.jsx', () => ({
    PokeDetails: () => <div>PokeDetails Page</div>
}))

test('renders Pokedex page by default', () => {
    render( <App /> );
    expect(screen.getByText('Pokedex Page')).toBeDefined();
});

test('renders PokeDetails page on /pokemon/:id route', () => {
    window.history.pushState({}, 'Test Page', '/pokemon/1');
    render( <App /> );
    expect(screen.getByText('PokeDetails Page')).toBeDefined();
});
