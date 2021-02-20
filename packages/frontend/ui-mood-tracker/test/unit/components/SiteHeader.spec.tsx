import React from 'react';
import { render } from '@testing-library/react';

import SiteHeader from '../../../src/components/SiteHeader';

describe('SiteHeader', () => {
  test('renders', () => {
    const { container } = render(<SiteHeader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
