import React from 'react';
import { render } from '@testing-library/react';

import App from '../../src/App';

jest.mock('../../src/components/SiteHeader', () => () => 'SiteHeader');

describe('App.vue', () => {
  test('renders', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
