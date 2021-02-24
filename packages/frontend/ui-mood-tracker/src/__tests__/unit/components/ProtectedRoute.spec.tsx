import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProtectedRoute from '../../../components/ProtectedRoute';

Enzyme.configure({ adapter: new Adapter() });

const mockComponent = () => {
  return <div>Mock Component</div>;
};

describe('ProtectedRoute', () => {
  // TODO: Can't differentiate with generated snapshots. Check for other possibilities.
  test('renders for unauthenticated Route', () => {
    const props = {
      component: mockComponent,
      isAuthenticated: false,
    };
    const w = shallow(<ProtectedRoute {...props} />);
    expect(w.debug()).toMatchSnapshot();
  });

  test('renders for authenticated Route', () => {
    const props = {
      component: mockComponent,
      isAuthenticated: true,
    };
    const w = shallow(<ProtectedRoute {...props} />);
    expect(w.debug()).toMatchSnapshot();
  });
});
