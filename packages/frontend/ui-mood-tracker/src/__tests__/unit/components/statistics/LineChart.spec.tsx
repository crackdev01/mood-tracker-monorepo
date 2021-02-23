import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LineChart from '../../../../components/statistics/LineChart';
import { mockMoods } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('LineChart', () => {
  test('renders default', () => {
    const props = {
      data: mockMoods
        .map((m: any) => {
          return {
            x: m.mood_enteredAt,
            y: m.mood_intensity,
          };
        }
      ),
    };
    const w = shallow(<LineChart {...props} />);
    expect(w.debug()).toMatchSnapshot();
  });
});
