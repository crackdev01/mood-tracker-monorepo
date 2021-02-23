import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LocationModal from '../../../../components/location/LocationModal';

Enzyme.configure({ adapter: new Adapter() });

describe('LocationModal', () => {
  test('renders', () => {
    const w = shallow(<LocationModal />);
    expect(w.debug()).toMatchSnapshot();
  });
});
