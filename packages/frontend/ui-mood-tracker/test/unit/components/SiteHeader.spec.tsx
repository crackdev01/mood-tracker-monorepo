import React from 'react';
import { render } from '@testing-library/react';

import SiteHeader from 'packages/frontend/ui-mood-tracker/src/components/site-header/SiteHeader';

describe('SiteHeader', () => {
  test('renders', () => {
    const { container } = render(<SiteHeader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
